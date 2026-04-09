<template>
  <div>
  <header class="site-header" style="background: linear-gradient(135deg, #1a3c4a, #2c7a7b);">
    <div style="font-size: 0.85rem; opacity: 0.7; margin-bottom: 0.5rem;">
      <router-link to="/" style="color: #b2dfdb; text-decoration: none;">Study Guide</router-link> &rsaquo; Network &amp; System Administration
    </div>
    <h1>Network &amp; System Administration</h1>
    <p class="subtitle">IT Systems, Servers, Users, Networks &amp; Data Management</p>
    <p class="book-ref">Based on UOC/FUOC course materials (PID_00302161–PID_00302167)</p>
  </header>

  <div class="page-container">
    <section style="margin: 2rem 0;">
      <h2 style="color: var(--blue-700); font-size: 1.3rem; margin-bottom: 0.5rem;">About This Subject</h2>
      <p>This subject covers the fundamentals of administering IT systems within organisations. The materials are divided into five modules, each addressing a key area of systems administration — from the overall organisation of IT departments to specific topics like server management, network design, and data protection.</p>
    </section>

    <div class="chapter-grid">
      <router-link to="/nsa/intro" class="chapter-card" style="border-left-color: var(--accent-teal);">
        <div class="card-number">Module 1</div>
        <div class="card-title">Introduction to Systems Administration</div>
        <p class="card-desc">IT systems within organisations, department structure, key roles (server admin, user admin, network admin, data manager, IT manager), and role overlapping.</p>
      </router-link>

      <router-link to="/nsa/user-admin" class="chapter-card" style="border-left-color: var(--accent-teal);">
        <div class="card-number">Module 2</div>
        <div class="card-title">User Administration</div>
        <p class="card-desc">User environment design, access control (AAA, ACL, SSO), IT system design patterns, application distribution, workstation configuration, maintenance, training, and help desk.</p>
      </router-link>

      <router-link to="/nsa/server-admin" class="chapter-card" style="border-left-color: var(--accent-teal);">
        <div class="card-number">Module 3</div>
        <div class="card-title">Server Administration</div>
        <p class="card-desc">Physical and virtual servers, containers (Docker, Kubernetes), cloud services (IaaS, PaaS, SaaS), clusters, storage systems, RAID, backups, high availability, and security.</p>
      </router-link>

      <router-link to="/nsa/network-admin" class="chapter-card" style="border-left-color: var(--accent-teal);">
        <div class="card-number">Module 4</div>
        <div class="card-title">Network Administration</div>
        <p class="card-desc">Network components (cabling, hubs, switches, routers), topologies (bus, ring, star), Ethernet, WLAN, Wi-Fi standards, TCP/IP, IPv6, and workstation configuration.</p>
      </router-link>

      <router-link to="/nsa/data-admin" class="chapter-card" style="border-left-color: var(--accent-teal);">
        <div class="card-number">Module 5</div>
        <div class="card-title">Data Administration</div>
        <p class="card-desc">Data vs. information, data location challenges, relational and NoSQL databases, big data (MapReduce, Hadoop, Spark), ERP, cloud data management, backups, and database security.</p>
      </router-link>
    </div>
  </div>
  </div>
</template>
