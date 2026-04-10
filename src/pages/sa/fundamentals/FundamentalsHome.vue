<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/sa">SA</router-link> &rsaquo;
      Fundamentals of Software Architecture
    </div>
    <h1>Fundamentals of Software Architecture</h1>
    <p class="chapter-desc">Mark Richards &amp; Neal Ford — 2nd Edition. A comprehensive guide to architecture thinking, modularity, component design, architecture styles, and the soft skills every architect needs.</p>
    <div class="stats-bar">
      <span class="stat-badge">3 Laws of Software Architecture</span>
      <span class="stat-badge">8 Architect Expectations</span>
      <span class="stat-badge">10+ Architecture Styles</span>
    </div>
  </header>

  <div class="page-container">

    <section style="margin: 1.5rem 0;">
      <p>This book provides a broad overview of the software architect role — from foundational concepts like architectural characteristics and component design, to a full catalog of architecture styles, to essential soft skills. It's designed for aspiring architects and practitioners who want to deepen their understanding of architecture trade-offs.</p>
      <div class="info-box note-box" style="margin-top: 1rem;">
        <p><strong>Key thesis:</strong> Everything in software architecture is a trade-off. Why is more important than how. Most architecture decisions exist on a spectrum, not as binary choices.</p>
      </div>
    </section>

    <!-- Part I -->
    <h2 class="section-title">Part I — Foundations (Chapters 1–8)</h2>
    <div class="chapter-grid">

      <router-link to="/sa/fundamentals/ch1" class="chapter-card">
        <div class="card-number">Chapter 1</div>
        <div class="card-title">Introduction</div>
        <p class="card-desc">Defining software architecture (4 dimensions), 3 laws of software architecture, and the 8 expectations of an architect.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch2" class="chapter-card">
        <div class="card-number">Chapter 2</div>
        <div class="card-title">Architectural Thinking</div>
        <p class="card-desc">Architecture vs design, technical breadth, trade-off analysis, the 20-minute rule, and developing a personal radar.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch3" class="chapter-card">
        <div class="card-number">Chapter 3</div>
        <div class="card-title">Modularity</div>
        <p class="card-desc">Cohesion, coupling, connascence, core metrics, distance from the main sequence, and from modules to components.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch4" class="chapter-card">
        <div class="card-number">Chapter 4</div>
        <div class="card-title">Architectural Characteristics Defined</div>
        <p class="card-desc">Operational, structural, cloud, and cross-cutting characteristics. Trade-offs and the "least worst architecture" principle.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch5" class="chapter-card">
        <div class="card-number">Chapter 5</div>
        <div class="card-title">Identifying Architectural Characteristics</div>
        <p class="card-desc">Extracting characteristics from domain concerns, composite characteristics, working with architecture katas.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch6" class="chapter-card">
        <div class="card-number">Chapter 6</div>
        <div class="card-title">Measuring &amp; Governing Characteristics</div>
        <p class="card-desc">Operational, structural, and process measures. Governance and fitness functions for automated compliance.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch7" class="chapter-card">
        <div class="card-number">Chapter 7</div>
        <div class="card-title">The Scope of Architectural Characteristics</div>
        <p class="card-desc">Architectural quanta, granularity, synchronous vs asynchronous communication, and scoping in the cloud.</p>
      </router-link>

      <router-link to="/sa/fundamentals/ch8" class="chapter-card">
        <div class="card-number">Chapter 8</div>
        <div class="card-title">Component-Based Thinking</div>
        <p class="card-desc">Defining logical components, component coupling (static &amp; temporal), assigning user stories, Law of Demeter.</p>
      </router-link>

    </div>

    <!-- Part II -->
    <h2 class="section-title" style="margin-top: 2.5rem;">Part II — Architecture Styles (Chapters 9–17)</h2>
    <div class="chapter-grid">

      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 9</div>
        <div class="card-title">Foundations</div>
        <p class="card-desc">Styles vs patterns, monolithic vs distributed, 8 fallacies of distributed computing, team topologies.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>

      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 10–11</div>
        <div class="card-title">Layered &amp; Modular Monolith</div>
        <p class="card-desc">Layers of isolation, data topologies, governance, and when to use (or avoid) monolithic styles.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>

      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 12–13</div>
        <div class="card-title">Pipeline &amp; Microkernel</div>
        <p class="card-desc">Filters and pipes, plug-in components, volatile core, registry and contracts.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>

      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 14–15</div>
        <div class="card-title">Service-Based &amp; Event-Driven</div>
        <p class="card-desc">Service granularity, API gateway options, mediator vs broker, choreography vs orchestration.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>

      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 16–17</div>
        <div class="card-title">Space-Based &amp; Microservices</div>
        <p class="card-desc">Tuple space, in-memory data replication, bounded contexts, separately deployable services, sidecar pattern.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>

    </div>

    <!-- Part III -->
    <h2 class="section-title" style="margin-top: 2.5rem;">Part III — Techniques &amp; Soft Skills (Chapters 18–27)</h2>
    <div class="chapter-grid">
      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 18–21</div>
        <div class="card-title">Decisions, Risk, Diagramming</div>
        <p class="card-desc">ADRs, risk matrices, C4 model, UML vs informal diagrams, documentation strategies.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>
      <div class="chapter-card" style="opacity: 0.55; cursor: default; pointer-events: none;">
        <div class="card-number">Ch 22–27</div>
        <div class="card-title">Teams, Negotiation, Career</div>
        <p class="card-desc">Team topologies, building consensus, presenting to stakeholders, negotiation skills, architect career paths.</p>
        <span class="card-badge" style="font-size: 0.7rem; background: #f0f4f8; color: var(--text-secondary);">Coming soon</span>
      </div>
    </div>

  </div>
  </div>
</template>

<script setup></script>
