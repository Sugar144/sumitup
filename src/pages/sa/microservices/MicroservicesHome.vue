<template>
  <div>
  <header class="site-header">
    <div class="breadcrumb" style="font-size:0.85rem;opacity:0.7;margin-bottom:0.5rem;">
      <router-link to="/" style="color:var(--blue-200);text-decoration:none;">Study Guide</router-link> &rsaquo;
      <router-link to="/sa" style="color:var(--blue-200);text-decoration:none;">SA</router-link> &rsaquo;
      Microservices Patterns
    </div>
    <h1>Microservices Patterns</h1>
    <p class="subtitle">Study Guide — Key Concepts &amp; Patterns</p>
    <p class="book-ref">Based on "Microservices Patterns" by Chris Richardson</p>
  </header>

  <div class="page-container">
    <section style="margin: 2rem 0;">
      <h2 style="color: var(--blue-700); font-size: 1.3rem; margin-bottom: 0.5rem;">About This Guide</h2>
      <p>This study guide covers validated key concepts extracted from selected chapters of <em>Microservices Patterns</em> by Chris Richardson. It is designed for efficient learning and review. Each chapter summary preserves the original book numbering and explains concepts in a shorter, clearer way.</p>
      <p>Chapters covered: 1, 2, 3, 4, 5, 6, 7, and 8.</p>
    </section>

    <div class="chapter-grid">
      <router-link to="/sa/microservices/ch1" class="chapter-card">
        <div class="card-number">Chapter 1</div>
        <div class="card-title">Escaping Monolithic Hell</div>
        <p class="card-desc">The problems of monolithic architecture, the scale cube, benefits and drawbacks of microservices, the pattern language, and organizational considerations.</p>
      </router-link>

      <router-link to="/sa/microservices/ch2" class="chapter-card">
        <div class="card-number">Chapter 2</div>
        <div class="card-title">Decomposition Strategies</div>
        <p class="card-desc">Software architecture fundamentals, architectural styles, decomposing by business capability or subdomain (DDD), obstacles, and defining service APIs.</p>
      </router-link>

      <router-link to="/sa/microservices/ch3" class="chapter-card">
        <div class="card-number">Chapter 3</div>
        <div class="card-title">Interprocess Communication in a Microservice Architecture</div>
        <p class="card-desc">IPC styles, API design and evolution, REST, gRPC, circuit breakers, service discovery, messaging, transactional outbox, and improving availability.</p>
      </router-link>

      <router-link to="/sa/microservices/ch4" class="chapter-card">
        <div class="card-number">Chapter 4</div>
        <div class="card-title">Managing Transactions with Sagas</div>
        <p class="card-desc">The distributed transaction problem, the Saga pattern, choreography vs. orchestration, isolation anomalies and countermeasures, and implementation architecture.</p>
      </router-link>

      <router-link to="/sa/microservices/ch5" class="chapter-card">
        <div class="card-number">Chapter 5</div>
        <div class="card-title">Designing Business Logic in a Microservice Architecture</div>
        <p class="card-desc">Transaction Script vs. Domain Model, DDD aggregates, aggregate rules, domain events, and service architecture with Kitchen and Order services.</p>
      </router-link>

      <router-link to="/sa/microservices/ch6" class="chapter-card">
        <div class="card-number">Chapter 6</div>
        <div class="card-title">Developing Business Logic with Event Sourcing</div>
        <p class="card-desc">Event sourcing pattern, traditional persistence problems, optimistic locking, snapshots, idempotent processing, saga integration.</p>
      </router-link>

      <router-link to="/sa/microservices/ch7" class="chapter-card">
        <div class="card-number">Chapter 7</div>
        <div class="card-title">Implementing Queries in a Microservice Architecture</div>
        <p class="card-desc">The API Composition pattern, CQRS pattern, designing CQRS views, and a DynamoDB implementation example.</p>
      </router-link>

      <router-link to="/sa/microservices/ch8" class="chapter-card">
        <div class="card-number">Chapter 8</div>
        <div class="card-title">External API Patterns</div>
        <p class="card-desc">API gateway pattern, Backends for Frontends (BFF), edge functions, reactive composition, GraphQL implementation.</p>
      </router-link>
    </div>

    <section class="takeaways" style="margin-top: 2rem;">
      <h3>Overall Concept Map</h3>
      <ul>
        <li><strong>Chapter 1</strong> introduces the motivation: why monoliths fail at scale and why microservices help.</li>
        <li><strong>Chapter 2</strong> explains how to break an application into services using business capabilities or DDD subdomains.</li>
        <li><strong>Chapter 3</strong> covers how services communicate — synchronously (REST, gRPC) or asynchronously (messaging).</li>
        <li><strong>Chapter 4</strong> solves the data consistency problem across services using the Saga pattern.</li>
        <li><strong>Chapter 5</strong> shows how to design business logic using aggregates and domain events.</li>
        <li><strong>Chapter 6</strong> covers event sourcing — storing aggregates as event sequences for reliable event publishing, full history, and temporal queries.</li>
        <li><strong>Chapter 7</strong> addresses querying data spread across services using API Composition and CQRS.</li>
        <li><strong>Chapter 8</strong> shows how to design external APIs using the API Gateway and Backends for Frontends patterns.</li>
      </ul>
    </section>
  </div>
  </div>
</template>
