<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/sa">SA</router-link> &rsaquo;
      <router-link to="/sa/fundamentals">Fundamentals</router-link> &rsaquo;
      Chapter 5
    </div>
    <h1>Chapter 5: Identifying Architectural Characteristics</h1>
    <p class="chapter-desc">How to extract the right "-ilities" from business requirements — avoiding the Vasa antipattern by prioritizing ruthlessly and collaborating with stakeholders.</p>
    <div class="stats-bar">
      <span class="stat-badge">Composite Characteristics</span>
      <span class="stat-badge">Architecture Katas</span>
      <span class="stat-badge">Worksheet Technique</span>
      <span class="stat-badge">Top-3 Prioritization</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li><a href="#s5-1">Extracting Characteristics from Domain Concerns</a></li>
        <li><a href="#s5-2">Composite Architectural Characteristics</a></li>
        <li><a href="#s5-3">Working with Architecture Katas</a></li>
        <li><a href="#s5-4">Explicit vs Implicit Characteristics</a></li>
        <li><a href="#s5-5">Limiting and Prioritizing</a></li>
        <li><a href="#s5-6">Case Study: The Vasa</a></li>
        <li><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <h2 class="section-title" id="s5-1">Extracting Characteristics from Domain Concerns</h2>
    <div class="content-section">
      <p>The process of identifying architectural characteristics begins with analyzing the problem domain. Architects must translate business requirements into architectural concerns — recognizing which capabilities the system needs to support to be successful.</p>

      <p>This requires distinguishing between:</p>
      <table class="comparison-table">
        <thead><tr><th>Domain concerns (functional)</th><th>Architectural characteristics</th></tr></thead>
        <tbody>
          <tr><td>"Users should be able to place orders"</td><td>The system must handle peak load of 10,000 concurrent orders</td></tr>
          <tr><td>"Display user profile"</td><td>Pages must load in under 200ms at p99</td></tr>
          <tr><td>"Store customer data"</td><td>Data must reside in EU (GDPR compliance)</td></tr>
          <tr><td>"Users must log in"</td><td>Authentication and authorization infrastructure required</td></tr>
        </tbody>
      </table>

      <p>Key technique: ask "what capabilities must this system have to succeed at this requirement?" — not "what should the system do?"</p>
    </div>

    <h2 class="section-title" id="s5-2">Composite Architectural Characteristics</h2>
    <div class="content-section">
      <p>Some architectural characteristics are actually composed of several simpler ones. Architects must decompose composites to find the measurable constituents:</p>

      <table class="comparison-table">
        <thead><tr><th>Composite characteristic</th><th>Constituent characteristics</th></tr></thead>
        <tbody>
          <tr><td><strong>Agility</strong></td><td>Modularity + Deployability + Testability</td></tr>
          <tr><td><strong>Reliability</strong></td><td>Availability + Fault tolerance + Recoverability</td></tr>
          <tr><td><strong>Security</strong></td><td>Authentication + Authorization + Confidentiality + Integrity + Non-repudiation</td></tr>
        </tbody>
      </table>

      <p>Decomposing composites is crucial for establishing objective, measurable definitions — preventing the "wildly varying definitions" problem where different teams mean different things by the same term.</p>
    </div>

    <h2 class="section-title" id="s5-3">Working with Architecture Katas</h2>
    <div class="content-section">
      <p>Architecture katas are practice scenarios — realistic system descriptions from which architects extract and analyze architectural characteristics. They're used for training and for practicing trade-off analysis.</p>

      <h4 class="subsubsection-title">Kata: Silicon Sandwiches</h4>
      <p>A national sandwich franchise wants a new ordering system to let customers order online in advance for pickup. Requirements include: thousands of locations, local customization of recipes and promotions, custom delivery area maps per location, third-party delivery, corporate goal of hiring cheap labor.</p>

      <p>From these requirements, the key architectural characteristics to extract:</p>
      <table class="comparison-table">
        <thead><tr><th>Requirement</th><th>Characteristic</th><th>Type</th></tr></thead>
        <tbody>
          <tr><td>"Thousands of locations, many users ordering at once"</td><td><strong>Scalability</strong></td><td>Explicit operational</td></tr>
          <tr><td>"Users want to pick up within minutes"</td><td><strong>Performance</strong></td><td>Explicit operational</td></tr>
          <tr><td>"Local customization of recipes, promotions, directions"</td><td><strong>Customizability</strong></td><td>Explicit structural</td></tr>
          <tr><td>"Users must be able to access the site" (unstated but obvious)</td><td><strong>Availability</strong></td><td>Implicit</td></tr>
          <tr><td>"No one wants a broken site" (unstated)</td><td><strong>Reliability</strong></td><td>Implicit</td></tr>
          <tr><td>"Payment processing" (unstated security)</td><td><strong>Security</strong></td><td>Implicit</td></tr>
        </tbody>
      </table>

      <div class="info-box note-box">
        <p><strong>Design vs Architecture boundary for customizability:</strong> Could be implemented via the Template Method design pattern (design decision) or via a microkernel architecture style (structural decision). Whether it rises to an architectural characteristic depends on whether structural support is needed — which in turn depends on competing concerns like performance and coupling. It's always a trade-off.</p>
      </div>
    </div>

    <h2 class="section-title" id="s5-4">Explicit vs Implicit Characteristics</h2>
    <div class="content-section">
      <table class="comparison-table">
        <thead><tr><th>Type</th><th>Where they come from</th><th>Common examples</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Explicit</strong></td>
            <td>Written in the requirements document or client specification</td>
            <td>"Support 10,000 concurrent users," "99.99% uptime SLA," "must support French and English"</td>
          </tr>
          <tr>
            <td><strong>Implicit</strong></td>
            <td>Unstated but essential. Architects derive from domain knowledge.</td>
            <td>Availability, reliability, security — no requirements document says "please don't crash" but they all need it.</td>
          </tr>
        </tbody>
      </table>
      <p>Overspecifying explicit characteristics while ignoring implicit ones is a common mistake. Architects need broad domain knowledge to recognize implicit characteristics before they cause failures.</p>
    </div>

    <h2 class="section-title" id="s5-5">Limiting and Prioritizing Characteristics</h2>
    <div class="content-section">
      <p>A common antipattern: asking stakeholders "which architectural characteristics do you want?" and receiving the answer "all of them!" Each characteristic adds complexity. The goal is to find the <em>minimum necessary set</em>.</p>

      <div class="info-box key-point-box">
        <p><strong>The architectural characteristics worksheet:</strong> An interactive workshop tool with 7 slots for driving characteristics (limiting to ~7 prevents overcomplication), a column for implicit characteristics already assumed, and a final step where all stakeholders select their top 3 priorities. Consensus on top-3 is more achievable than consensus on an ordered list of 20.</p>
      </div>

      <p>Exercise: Once you've listed characteristics, ask "which one could we eliminate?" This helps identify the truly critical ones and separates nice-to-haves from must-haves.</p>

      <p>In Silicon Sandwiches, either <strong>customizability</strong> or <strong>performance</strong> could be eliminated as a driving architectural characteristic. Eliminating customizability means it gets implemented via application design (Template Method pattern). Eliminating performance doesn't mean building something slow — it means not designing the architecture <em>primarily</em> for performance, but rather for scalability and availability.</p>
    </div>

    <h2 class="section-title" id="s5-6">Case Study: The Vasa</h2>
    <div class="content-section">
      <div class="info-box warning-box">
        <p><strong>The Vasa:</strong> A Swedish warship (1628) built by a king who wanted both a troop transport AND a gunship — so it had two decks and cannons twice the size of similar ships. The shipbuilders couldn't say no. On its maiden voyage, it shot a cannon salute and immediately capsized. It was top-heavy from trying to optimize too many architectural characteristics at once. The wreck now sits in a Stockholm museum as a cautionary tale about overspecification.</p>
        <p>Lesson: Trying to maximize too many architectural characteristics simultaneously produces an architecture that is unstable, overcomplex, and likely to fail.</p>
      </div>
    </div>

    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways — Chapter 5</h3>
      <ul>
        <li>Extract architectural characteristics from domain requirements by asking "what capabilities must the system have?" not "what should it do?"</li>
        <li><strong>Composite characteristics</strong> (agility, reliability) must be decomposed into measurable constituents for objective governance.</li>
        <li><strong>Architecture katas</strong> are realistic practice scenarios for extracting and analyzing characteristics.</li>
        <li>Implicit characteristics (availability, reliability, security) are unstated but always required. Architects must identify them proactively from domain knowledge.</li>
        <li>Limit the driving characteristics to ~7, prioritize to top-3 collaboratively with stakeholders. Consensus is easier on priorities than on a full ranked list.</li>
        <li>The Vasa antipattern: over-specifying architectural characteristics creates overcomplex, unstable architecture. Focus on the minimum necessary set.</li>
        <li><strong>"There are no wrong answers in architecture, only expensive ones."</strong></li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/sa/fundamentals/ch4" class="prev">&larr; Chapter 4</router-link>
      <router-link to="/sa/fundamentals/ch6" class="next">Chapter 6 &rarr;</router-link>
    </div>
  </div>
  </div>
</template>
<script setup></script>
