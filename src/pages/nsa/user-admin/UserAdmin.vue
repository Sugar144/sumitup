<template>
  <div>
  <header class="chapter-header" style="background: linear-gradient(135deg, #1a3c4a, #2c7a7b);">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/nsa">NSA</router-link> &rsaquo;
      User Administration
    </div>
    <h1>User Administration</h1>
    <p class="chapter-desc">Designing user environments, access control, application distribution, workstation configuration, maintenance, training, and help desk management.</p>
    <div class="stats-bar">
      <span class="stat-badge">3 Design Models</span>
      <span class="stat-badge">AAA Security</span>
      <span class="stat-badge">4 Software Categories</span>
      <span class="stat-badge">6 Help Desk Phases</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li class="toc-section">
          <a href="#s1">1. User Environment Design</a>
          <ol>
            <li><a href="#s1-1">1.1 General user requirements</a></li>
            <li><a href="#s1-2">1.2 Access control (AAA model)</a></li>
            <li><a href="#s1-3">1.3 IT system design patterns</a></li>
            <li><a href="#s1-4">1.4 Application distribution</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s2">2. Server Design</a>
          <ol>
            <li><a href="#s2-1">2.1 Disk distribution &amp; privileges</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s3">3. Workstation Configuration &amp; Maintenance</a>
          <ol>
            <li><a href="#s3-1">3.1 Base image creation</a></li>
            <li><a href="#s3-2">3.2 Maintenance tasks</a></li>
          </ol>
        </li>
        <li class="toc-section"><a href="#s4">4. User Training &amp; Help Desk</a></li>
        <li class="toc-section"><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <!-- ============================== -->
    <!-- 1. User Environment Design -->
    <!-- ============================== -->
    <h2 class="section-title" id="s1">1. User Environment Design</h2>

    <div class="content-section">
      <p>Designing a user environment means preparing everything that users will find when using the organisation's IT systems. A good design makes administration easier and provides users with a more consistent, robust experience.</p>

      <p>Design objectives include: simple and intuitive to use, consistent across the organisation, fast response times, good security, easy to administer and update, easy to reinstall/reconfigure after crashes, no critical data lost if a computer fails, and easy to make backups.</p>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> Design criteria often contradict each other. Security is often at odds with convenience and speed. The end result is always a trade-off between these elements.</p>
      </div>

      <h3 class="subsection-title" id="s1-1">1.1 General user requirements</h3>
      <p>Despite varying roles, all users share four fundamental requirements:</p>
      <ol>
        <li><strong>A workstation</strong> — a computer, possibly with special devices (scanner, local printer, etc.)</li>
        <li><strong>A place to print</strong> — local or remote/shared printer</li>
        <li><strong>Space to store information</strong> — locally or on servers</li>
        <li><strong>Software for work</strong> — base software (OS), office software, communications software, and specific applications</li>
      </ol>

      <div class="info-box note-box">
        <p><strong>Single Sign-On (SSO):</strong> Users want to log in once and access all systems. Common SSO mechanisms include SAML, OAuth 2.0, and OpenID. Advantage: no repeated logins. Drawback: if someone accesses an unlocked session, they get access to everything.</p>
      </div>

      <h3 class="subsection-title" id="s1-2">1.2 Access control (AAA model)</h3>
      <p>A key design consideration is ensuring users can only access what they need. The <strong>AAA security model</strong> defines three steps:</p>

      <div class="pattern-summary">
        <h4>AAA Security Model</h4>
        <div class="ps-row"><span class="ps-label">Authentication:</span> <span>Verifying the identity of a user (typically via username/password or token). "Who are you?"</span></div>
        <div class="ps-row"><span class="ps-label">Authorisation:</span> <span>Determining what the identified user is allowed to access. "What can you do?" Must follow authentication.</span></div>
        <div class="ps-row"><span class="ps-label">Accounting:</span> <span>Recording how each resource is used. "What did you do?"</span></div>
      </div>

      <div class="info-box key-point-box">
        <p><strong>Principle of least privilege:</strong> Grant the most restrictive set of privileges necessary to carry out the task. (Source: US Department of Defense "Orange Book")</p>
      </div>

      <p><strong>Access control matrix</strong> defines the rights of each subject (user/process) regarding all objects (files/resources). Rows = subjects, columns = objects, entries = access rights (R, W, X). In practice, the full matrix is too large and mostly empty, so it is stored as <strong>Access Control Lists (ACLs)</strong> — each object has an ordered list of who can access it and how.</p>

      <h3 class="subsection-title" id="s1-3">1.3 IT system design patterns</h3>
      <p>Three design models exist with increasing complexity and security:</p>

      <table class="comparison-table">
        <thead><tr><th>Design</th><th>Core idea</th><th>Advantages</th><th>Disadvantages</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Minimum security</strong></td>
            <td>All users see all programs and have minimum permissions (read + execute). User folders are private.</td>
            <td>Simplest to administer. Uniform environment. Easy workstation cloning. No changes needed for workflow changes.</td>
            <td>No group concept. Can't share within departments only. Users confused by too much software. Sensitive data at risk.</td>
          </tr>
          <tr>
            <td><strong>Users in groups</strong></td>
            <td>Users belong to one group. Applications can be for everyone or group-specific.</td>
            <td>Better information protection. Users see only relevant software. Group sharing works well.</td>
            <td>Workflow changes require permission modifications. Moving users between groups requires profile updates. Cross-group sharing is complex.</td>
          </tr>
          <tr>
            <td><strong>Users in multiple groups</strong></td>
            <td>Users can belong to one or more groups. Most flexible model.</td>
            <td>Reflects complex organisational structures. Maximum flexibility for access control.</td>
            <td>Most complex to administer. Users may see software from multiple groups. Directory sharing across groups needs careful permissions.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Think of an office building. <strong>Minimum security</strong> = every door is unlocked, everyone can go anywhere. <strong>Users in groups</strong> = each department has a keycard, and you can only enter your department's floor. <strong>Users in multiple groups</strong> = some people (like managers) have keycards for multiple floors.</p>
      </div>

      <h3 class="subsection-title" id="s1-4">1.4 Application distribution</h3>
      <p>Applications can be installed in two places:</p>
      <ul>
        <li><strong>Local (on workstation):</strong> uses more disk space but runs faster and reduces network load.</li>
        <li><strong>Remote (on server):</strong> centralised control, easier updates, but depends on network speed and server availability.</li>
      </ul>
      <p>The <strong>application table</strong> summarises all applications, their location (local/remote), data location, group permissions, and provides the foundation for configuring both servers and workstations.</p>
    </div>

    <!-- ============================== -->
    <!-- 2. Server Design -->
    <!-- ============================== -->
    <h2 class="section-title" id="s2">2. Server Design</h2>

    <div class="content-section">
      <p>The user environment design determines server requirements: number and capacity of disks, partition content, information layout, and number of servers.</p>

      <h3 class="subsection-title" id="s2-1">2.1 Disk distribution &amp; privileges</h3>
      <p>Basic server partitions:</p>
      <ul>
        <li><strong>System partition</strong> — server operating system</li>
        <li><strong>User partition</strong> — personal and group folders</li>
        <li><strong>Application partition</strong> — shared software</li>
        <li><strong>Data partition</strong> — application data, shared data</li>
      </ul>

      <div class="info-box warning-box">
        <p><strong>Bottleneck risk:</strong> A physical disk can only serve one read at a time. Multiple simultaneous requests create a queue. If the queue becomes too long, server performance degrades significantly. Solution: distribute load across different disks/controllers, or use separate servers for high-traffic resources.</p>
      </div>

      <p>The file system manages information storage using directories, files, and access control lists. Each operating system manages its file system differently, but cross-platform access is possible.</p>
    </div>

    <!-- ============================== -->
    <!-- 3. Workstation Config & Maintenance -->
    <!-- ============================== -->
    <h2 class="section-title" id="s3">3. Workstation Configuration &amp; Maintenance</h2>

    <div class="content-section">
      <h3 class="subsection-title" id="s3-1">3.1 Base image creation</h3>
      <p>A <strong>base image</strong> (or master image) is a template workstation setup that can be cloned to all machines. It includes the OS, common software, and standard configuration. This dramatically reduces setup time for new workstations.</p>

      <p><strong>Disk imaging</strong> tools create an exact copy of a configured workstation's disk. This image can be deployed to identical hardware, providing a consistent environment across the organisation.</p>

      <h3 class="subsection-title" id="s3-2">3.2 Maintenance tasks</h3>
      <ul>
        <li><strong>Device maintenance</strong> — physical care of hardware components.</li>
        <li><strong>Data extraction</strong> — recovering data from failed computers.</li>
        <li><strong>Periodic tasks</strong> — server maintenance, virus protection, remote control for troubleshooting, deferred (scheduled) software updates.</li>
        <li><strong>Documentation &amp; procedures</strong> — creating standardised procedures for common tasks. Well-documented procedures save time, reduce errors, and enable any team member to handle incidents.</li>
      </ul>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> Procedures should be documented for all common tasks (new user setup, password reset, software installation, hardware replacement). This systematisation is essential for efficient IT department operations.</p>
      </div>
    </div>

    <!-- ============================== -->
    <!-- 4. User Training & Help Desk -->
    <!-- ============================== -->
    <h2 class="section-title" id="s4">4. User Training &amp; Help Desk</h2>

    <div class="content-section">
      <p><strong>Training</strong> is often neglected but reduces costs in the medium term by saving IT department time and making staff self-sufficient. It should cover: basic operating system usage, specific applications relevant to the user's role, security awareness, and proper data storage habits.</p>

      <p>The <strong>help desk</strong> (incident management) is the frontline for user support. A well-organised help desk follows these principles:</p>

      <ol>
        <li><strong>Single point of contact</strong> — users report all incidents to one place.</li>
        <li><strong>Incident logging</strong> — every incident is recorded with details, time, and resolution.</li>
        <li><strong>Prioritisation</strong> — incidents are classified by severity and impact.</li>
        <li><strong>Escalation</strong> — unresolved incidents are escalated to higher-level support.</li>
        <li><strong>Resolution tracking</strong> — track time to resolution and user satisfaction.</li>
        <li><strong>Knowledge base</strong> — build a repository of common problems and solutions for faster future resolution.</li>
      </ol>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> A help desk is like a hospital emergency room. Patients (users with incidents) arrive, are triaged (prioritised), treated by the appropriate specialist (support level), and their visit is documented. A good ER (help desk) learns from patterns to prevent recurring problems.</p>
      </div>
    </div>

    <!-- ============================== -->
    <!-- Key Takeaways -->
    <!-- ============================== -->
    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways</h3>
      <ul>
        <li>User environment design must balance simplicity, security, consistency, speed, and ease of administration.</li>
        <li>The <strong>AAA model</strong> (Authentication, Authorisation, Accounting) governs access control. Always apply the <strong>principle of least privilege</strong>.</li>
        <li><strong>Access Control Lists (ACLs)</strong> are the practical implementation of the access matrix — each object lists who can access it and how.</li>
        <li><strong>SSO</strong> (Single Sign-On) lets users log in once to access multiple systems, using SAML, OAuth 2.0, or OpenID.</li>
        <li>Three design models: <strong>minimum security</strong> (simple but open), <strong>users in groups</strong> (balanced), <strong>users in multiple groups</strong> (flexible but complex).</li>
        <li>Applications can be <strong>local</strong> (faster, more disk space) or <strong>remote</strong> (centralised, easier to maintain). The <strong>application table</strong> documents all decisions.</li>
        <li>Server partitions should separate system, users, applications, and data for better management and recovery.</li>
        <li><strong>Base images</strong> and disk imaging tools enable rapid, consistent workstation deployment.</li>
        <li><strong>Documented procedures</strong> for common tasks are essential for efficient operations.</li>
        <li>User <strong>training</strong> reduces medium-term costs. A structured <strong>help desk</strong> with incident logging, prioritisation, and escalation improves service quality.</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/nsa/intro" class="prev">&larr; Intro to Sys Admin</router-link>
      <router-link to="/nsa/server-admin" class="next">Server Administration &rarr;</router-link>
    </div>

  </div>
  </div>
</template>

<script setup>
</script>
