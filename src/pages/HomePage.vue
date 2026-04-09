<template>
  <div>
  <header class="site-header">
    <h1>University Study Guide</h1>
    <p class="subtitle">Key Concepts, Patterns &amp; Summaries</p>
    <p class="book-ref">Organized by subject — built for efficient study sessions</p>
  </header>

  <div class="page-container">
    <section style="margin: 2rem 0;">
      <h2 style="color: var(--blue-700); font-size: 1.3rem; margin-bottom: 0.5rem;">Welcome</h2>
      <p>This study guide collects validated key concepts from university course materials. Each subject contains book or module summaries with clear explanations, analogies, comparison tables, and key takeaways. Pick a subject to start studying.</p>
    </section>

    <div class="subject-grid">
      <router-link to="/sa" class="subject-card" style="border-top-color: var(--blue-500);">
        <span class="card-icon">&#128736;</span>
        <div class="card-title">Software Architecture</div>
        <p class="card-desc">Microservices patterns, architectural styles, decomposition strategies, communication, data management, and more.</p>
        <span class="card-badge">2 Books</span>
      </router-link>

      <router-link to="/nsa" class="subject-card" style="border-top-color: var(--accent-teal);">
        <span class="card-icon">&#128421;</span>
        <div class="card-title">Network &amp; System Administration</div>
        <p class="card-desc">IT systems, server administration, user management, network design, data administration, and security fundamentals.</p>
        <span class="card-badge" style="background: #e6fffa; color: var(--accent-teal);">5 Modules</span>
      </router-link>

      <router-link to="/mad" class="subject-card" style="border-top-color: var(--accent-purple);">
        <span class="card-icon">&#128241;</span>
        <div class="card-title">Mobile App Development</div>
        <p class="card-desc">Mobile development concepts, frameworks, UI patterns, and platform-specific considerations.</p>
        <span class="card-badge" style="background: #faf5ff; color: var(--accent-purple);">Coming Soon</span>
      </router-link>

      <router-link to="/awp" class="subject-card" style="border-top-color: var(--accent-amber);">
        <span class="card-icon">&#127760;</span>
        <div class="card-title">Advanced Web Programming</div>
        <p class="card-desc">Modern web frameworks, performance, security, APIs, and advanced frontend/backend techniques.</p>
        <span class="card-badge" style="background: #fffff0; color: var(--accent-amber);">Coming Soon</span>
      </router-link>
    </div>
  </div>
  </div>
</template>
