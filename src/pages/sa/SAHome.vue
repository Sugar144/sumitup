<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb"><router-link to="/">Study Guide</router-link> &rsaquo; Software Architecture</div>
    <h1>Software Architecture</h1>
    <p class="chapter-desc">Architectural styles, microservices patterns, decomposition strategies, communication, and data management.</p>
  </header>

  <div class="page-container">
    <section style="margin: 2rem 0;">
      <h2 style="color: var(--blue-700); font-size: 1.3rem; margin-bottom: 0.5rem;">Books in this Subject</h2>
      <p>This subject covers key concepts from two foundational books on software architecture.</p>
    </section>

    <div class="chapter-grid">
      <router-link to="/sa/microservices" class="chapter-card">
        <div class="card-number">Book 1</div>
        <div class="card-title">Microservices Patterns</div>
        <p class="card-desc">By Chris Richardson — Decomposition, interprocess communication, sagas, business logic design, CQRS, and the complete microservice pattern language.</p>
      </router-link>

      <router-link to="/sa/fundamentals" class="chapter-card">
        <div class="card-number">Book 2</div>
        <div class="card-title">Fundamentals of Software Architecture</div>
        <p class="card-desc">By Mark Richards &amp; Neal Ford — Architecture thinking, modularity, component-based thinking, architecture styles, techniques, and soft skills.</p>
      </router-link>
    </div>
  </div>
  </div>
</template>
