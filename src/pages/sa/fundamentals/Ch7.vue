<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/sa">SA</router-link> &rsaquo;
      <router-link to="/sa/fundamentals">Fundamentals</router-link> &rsaquo;
      Chapter 7
    </div>
    <h1>Chapter 7: The Scope of Architectural Characteristics</h1>
    <p class="chapter-desc">Architecture quanta — the independently deployable units of architecture — and how the scope of characteristics changes from monolithic to distributed systems.</p>
    <div class="stats-bar">
      <span class="stat-badge">Architecture Quantum</span>
      <span class="stat-badge">4 Coupling Types</span>
      <span class="stat-badge">DDD Bounded Context</span>
      <span class="stat-badge">Sync vs Async Communication</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li><a href="#s7-1">Architectural Quanta and Granularity</a></li>
        <li><a href="#s7-2">Coupling Types</a></li>
        <li><a href="#s7-3">DDD Bounded Context</a></li>
        <li><a href="#s7-4">Synchronous Communication</a></li>
        <li><a href="#s7-5">The Impact of Scoping</a></li>
        <li><a href="#s7-6">Scoping and the Cloud</a></li>
        <li><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <h2 class="section-title" id="s7-1">Architectural Quanta and Granularity</h2>
    <div class="content-section">
      <p>Architectural characteristics don't apply to an entire system equally. Different parts of a system may need different levels of scalability, availability, or security. The <strong>architecture quantum</strong> defines the boundary within which a set of characteristics applies.</p>

      <div class="pattern-summary">
        <h4>Architecture Quantum</h4>
        <div class="ps-row"><span class="ps-label">Definition:</span> <span>The smallest independently deployable unit of architecture. Establishes the scope for a set of architectural characteristics.</span></div>
        <div class="ps-row"><span class="ps-label">Informal:</span> <span>"The smallest part of the system that runs independently."</span></div>
        <div class="ps-row"><span class="ps-label">In microservices:</span> <span>Each service is typically its own quantum — independently deployable, with its own database, its own scalability requirements.</span></div>
        <div class="ps-row"><span class="ps-label">In a monolith:</span> <span>Usually one quantum of one. All characteristics apply to the whole system equally.</span></div>
      </div>

      <p>An architecture quantum has four properties:</p>
      <table class="comparison-table">
        <thead><tr><th>Property</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td><strong>Independent deployment</strong></td><td>Includes all components it needs to function — including its own database. Can be deployed without redeploying other quanta.</td></tr>
          <tr><td><strong>High functional cohesion</strong></td><td>Implements a single purposeful workflow or bounded context. Not a random collection of functionality.</td></tr>
          <tr><td><strong>Low external implementation static coupling</strong></td><td>Minimal coupling to other quanta. Changes to one quantum shouldn't require changes to another.</td></tr>
          <tr><td><strong>Synchronous communication</strong></td><td>The quantum may communicate synchronously internally but should minimize synchronous dependencies on other quanta.</td></tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-title" id="s7-2">Coupling Types</h2>
    <div class="content-section">
      <table class="comparison-table">
        <thead><tr><th>Coupling type</th><th>Definition</th><th>Controllable?</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Semantic coupling</strong></td>
            <td>Natural coupling from the problem domain. An order system is inherently coupled to inventory, customers, and payments.</td>
            <td>No — changing the domain changes the coupling. This is unavoidable.</td>
          </tr>
          <tr>
            <td><strong>Implementation coupling</strong></td>
            <td>How the architect chooses to implement domain boundaries. Single database vs. separate databases? Monolith vs. services?</td>
            <td>Yes — architectural decisions here have a large impact on system flexibility.</td>
          </tr>
          <tr>
            <td><strong>Static coupling</strong></td>
            <td>Wiring between services — which services depend on which other services or shared components at deploy time. Two services using the same database = same quantum.</td>
            <td>Yes — explicitly design service boundaries to minimize shared dependencies.</td>
          </tr>
          <tr>
            <td><strong>Dynamic coupling</strong></td>
            <td>Runtime communication between quanta. When they call each other during operation, trade-offs around latency and blocking emerge.</td>
            <td>Partially — choose sync vs async communication to manage blocking and latency.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box key-point-box">
        <p><strong>Simple rule for coupling scope:</strong> Two things are coupled if changing one might break the other. The broader the scope of coupling, the looser it should be. Tighter coupling is acceptable within a narrow scope (inside a service); broader scope demands looser coupling.</p>
      </div>
    </div>

    <h2 class="section-title" id="s7-3">DDD Bounded Context</h2>
    <div class="content-section">
      <p>Domain-Driven Design's <strong>bounded context</strong> concept deeply influenced the architecture quantum idea. Before DDD, architects sought universal shared entities across the entire organization:</p>

      <div class="info-box analogy-box">
        <p><strong>The "Customer" problem:</strong> Before bounded contexts, companies tried to create one universal <code>Customer</code> class shared by sales, shipping, billing, and support. But "Customer" means something different in each context: billing needs payment info, shipping needs an address, support needs case history. A universal <code>Customer</code> class becomes bloated, unstable, and a source of constant conflicts.</p>
        <p><strong>DDD solution:</strong> Each bounded context defines its own <code>Customer</code> entity with only the attributes it needs. Differences are reconciled at communication boundaries between contexts.</p>
      </div>

      <p>This maps directly to architecture quanta: each quantum corresponds to a bounded context. It has its own data, its own domain model, and low coupling to other contexts. Changes to one bounded context don't ripple through the entire system.</p>
    </div>

    <h2 class="section-title" id="s7-4">Synchronous Communication</h2>
    <div class="content-section">
      <p>When quanta must communicate, the choice between synchronous and asynchronous communication has direct implications for architectural characteristics:</p>

      <table class="comparison-table">
        <thead><tr><th>Aspect</th><th>Synchronous</th><th>Asynchronous</th></tr></thead>
        <tbody>
          <tr><td><strong>Availability impact</strong></td><td>If Service B is down, Service A's request fails immediately — tight availability coupling</td><td>Messages queue up; Service A continues; Service B processes when available</td></tr>
          <tr><td><strong>Performance</strong></td><td>Caller blocks while waiting for response — higher latency for callers</td><td>Caller continues immediately — better perceived performance</td></tr>
          <tr><td><strong>Complexity</strong></td><td>Simpler to implement and debug</td><td>More complex — need message brokers, dead-letter queues, idempotency</td></tr>
          <tr><td><strong>Consistency</strong></td><td>Easier to achieve consistency — response confirms success</td><td>Eventually consistent — harder to reason about failure states</td></tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-title" id="s7-5">The Impact of Scoping</h2>
    <div class="content-section">
      <p>Understanding the scope of architectural characteristics changes how you design systems:</p>
      <ul>
        <li>In a <strong>monolith</strong> (one quantum), all architectural characteristics apply uniformly. Scaling requires scaling the entire system.</li>
        <li>In <strong>microservices</strong> (many quanta), each service can have its own scalability, availability, and performance targets. The Order service might need 99.99% availability; the Analytics service might accept 99.9%.</li>
        <li>The ability to scope characteristics independently is one of the primary motivations for distributed architectures — but it comes at the cost of implementation complexity (distributed transactions, service discovery, circuit breakers).</li>
      </ul>
    </div>

    <h2 class="section-title" id="s7-6">Scoping and the Cloud</h2>
    <div class="content-section">
      <p>Cloud deployments often span multiple regions and availability zones. The architecture quantum concept maps naturally to cloud deployment units:</p>
      <ul>
        <li>A service deployed in EU must meet EU data residency requirements — its own quantum with its own characteristics</li>
        <li>Availability zones provide partial independence — a zone failure shouldn't affect other zones</li>
        <li>Architects must decide: one quantum per region, or a single global quantum? This depends on latency, data residency, and legal requirements</li>
      </ul>
    </div>

    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways — Chapter 7</h3>
      <ul>
        <li>An <strong>architecture quantum</strong> is the smallest independently deployable unit of architecture. It defines the scope for a set of architectural characteristics.</li>
        <li>Properties: independently deployable, high functional cohesion, low external static coupling, synchronous communication within.</li>
        <li>Four coupling types: semantic (unavoidable), implementation (architectural choice), static (wiring), dynamic (runtime communication).</li>
        <li>The broader the scope of coupling, the looser it should be. Tight coupling is acceptable within a narrow scope.</li>
        <li>DDD's <strong>bounded context</strong> is the domain-modeling equivalent of the architecture quantum. Each context has its own entity definitions, avoiding the "universal Customer class" problem.</li>
        <li>Synchronous communication creates tight availability coupling between quanta. Asynchronous communication decouples availability at the cost of complexity and eventual consistency.</li>
        <li>Microservices allow each service to have its own architectural characteristics scope — a major advantage over monoliths, at the cost of distributed systems complexity.</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/sa/fundamentals/ch6" class="prev">&larr; Chapter 6</router-link>
      <router-link to="/sa/fundamentals/ch8" class="next">Chapter 8 &rarr;</router-link>
    </div>
  </div>
  </div>
</template>
<script setup></script>
