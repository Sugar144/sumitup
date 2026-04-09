<template>
  <div>
  <header class="chapter-header" style="background: linear-gradient(135deg, #1a3c4a, #2c7a7b);">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/nsa">NSA</router-link> &rsaquo;
      Introduction to Systems Administration
    </div>
    <h1>Introduction to Systems Administration</h1>
    <p class="chapter-desc">How IT departments are structured, what roles exist, and how they work together to keep an organisation's technology running.</p>
    <div class="stats-bar">
      <span class="stat-badge">8 Roles</span>
      <span class="stat-badge">3 Core Elements</span>
      <span class="stat-badge">4 Perspectives</span>
      <span class="stat-badge">4 Software Categories</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li class="toc-section"><a href="#s1">1. IT Systems and the Organisation</a></li>
        <li class="toc-section">
          <a href="#s2">2. IT Systems: Elements</a>
          <ol>
            <li><a href="#s2-hw">Hardware components</a></li>
            <li><a href="#s2-sw">Software components</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s3">3. IT System Staff</a>
          <ol>
            <li><a href="#s3-1">3.1 Roles</a></li>
            <li><a href="#s3-2">3.2 Role overlapping</a></li>
            <li><a href="#s3-3">3.3 Organisation chart</a></li>
          </ol>
        </li>
        <li class="toc-section"><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <!-- ============================== -->
    <!-- 1. IT Systems and the Organisation -->
    <!-- ============================== -->
    <h2 class="section-title" id="s1">1. IT Systems and the Organisation</h2>

    <div class="content-section">
      <p>An organisation's IT department can be understood from four different perspectives. Each stakeholder sees the same system through a different lens.</p>

      <table class="comparison-table">
        <thead>
          <tr><th>Perspective</th><th>How IT is seen</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Organisational</strong></td><td>A department like any other, with resources available to the organisation.</td></tr>
          <tr><td><strong>Technical</strong></td><td>A collection of servers, networks and workstations that enable employees to do their jobs.</td></tr>
          <tr><td><strong>User</strong></td><td>An additional tool provided by the organisation to improve their work.</td></tr>
          <tr><td><strong>Management</strong></td><td>A large query database that aids decision-making.</td></tr>
        </tbody>
      </table>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> A system is <strong>effective</strong> when it produces the expected results, and <strong>efficient</strong> when it performs the assigned task within a reasonable time frame using an appropriate number of resources. Both matter when building an IT system.</p>
      </div>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Think of the IT department like a building's plumbing and electrical system. Management sees it as "the lights work and water flows" (result). Technicians see pipes, wires and control panels (components). Users just see taps and switches (tools). And the facilities manager sees a budget line (resource).</p>
      </div>

      <p>The person in charge of the IT department is usually called the <strong>IT manager</strong> (also IT director or Head of IT). They are positioned at the organisational level and are the final decision-makers regarding the organisation's IT system.</p>

      <p>The IT department's key task is to plan and manage the IT system to ensure it provides good service to users.</p>
    </div>

    <!-- ============================== -->
    <!-- 2. IT Systems: Elements -->
    <!-- ============================== -->
    <h2 class="section-title" id="s2">2. IT Systems: Elements</h2>

    <div class="content-section">
      <p>The IT department is composed of <strong>three core elements</strong>:</p>
      <ol>
        <li><strong>IT manager</strong> — head of the department, responsible for organisational decisions that affect the IT system and for managing technical support staff.</li>
        <li><strong>Technical support staff</strong> — responsible for system maintenance and user support.</li>
        <li><strong>Physical IT system</strong> — the hardware and software that make everything work.</li>
      </ol>

      <h3 class="subsection-title" id="s2-hw">Hardware components</h3>
      <p>The physical IT system's hardware can be broadly broken down into three parts:</p>

      <table class="comparison-table">
        <thead>
          <tr><th>Component</th><th>What it is</th><th>Key characteristic</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Servers</strong></td>
            <td>Remote computers on the network containing programs and data that users access remotely.</td>
            <td>Organisations typically have multiple servers specialised in different functions to increase control and reduce failure risk.</td>
          </tr>
          <tr>
            <td><strong>Workstations</strong></td>
            <td>The computer assigned to each user within the organisation.</td>
            <td>Usually one per user, meaning organisations have a very high volume of workstations.</td>
          </tr>
          <tr>
            <td><strong>Network cabling &amp; electronics</strong></td>
            <td>Physical cables plus hubs, routers, firewalls and switches.</td>
            <td>Connects all workstations and servers together.</td>
          </tr>
        </tbody>
      </table>

      <h3 class="subsection-title" id="s2-sw">Software components</h3>
      <p>The software in an organisation falls into four categories:</p>
      <ul>
        <li><strong>Basic software</strong> — operating systems and basic communications applications on the servers.</li>
        <li><strong>Office software</strong> — office suites (spreadsheet, word processor, database, agenda).</li>
        <li><strong>Communications software</strong> — email, internet browsers (Edge, Firefox, Chrome), video call tools (Teams, Meet).</li>
        <li><strong>Specific applications</strong> — organisation- or department-specific programs (invoicing, accounting, graphic design, production control, payroll).</li>
      </ul>

      <div class="info-box note-box">
        <p><strong>Note:</strong> For the IT system to function correctly, all hardware and software components must be closely linked. The following modules explore each component and their relationships in greater detail.</p>
      </div>
    </div>

    <!-- ============================== -->
    <!-- 3. IT System Staff -->
    <!-- ============================== -->
    <h2 class="section-title" id="s3">3. IT System Staff</h2>

    <div class="content-section">
      <p>Rather than focusing on a specific organisation chart (which varies by company culture), it is more useful to discuss the <strong>tasks</strong> that need to be carried out. All IT department tasks are function-specific and can be distributed across one or many people depending on the organisation's size.</p>

      <h3 class="subsection-title" id="s3-1">3.1 Roles</h3>

      <table class="comparison-table">
        <thead>
          <tr><th>Role</th><th>Responsibilities</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Server Administrator</strong></td>
            <td>Installing, maintaining and servicing servers and IT infrastructure. Ensuring servers can be recovered quickly after failure. Keeping servers running so other admin tasks can be performed.</td>
          </tr>
          <tr>
            <td><strong>User Administrator</strong></td>
            <td>Taking care of user needs and maintaining their desktops. One of the most visible parts of the system — users experience issues directly.</td>
          </tr>
          <tr>
            <td><strong>Network Administrator</strong></td>
            <td>Ensuring the physical network works properly, monitoring its condition, upgrading it, and delivering connectivity to all areas of the organisation.</td>
          </tr>
          <tr>
            <td><strong>Data Manager</strong></td>
            <td>Maintaining the integrity of the organisation's information, whether on servers or scattered across the IT system. Linking stored information to gain organisational insights.</td>
          </tr>
          <tr>
            <td><strong>Web Administrator</strong></td>
            <td>Maintaining the web server and, often, the website content. Ensuring overall consistency across the server.</td>
          </tr>
          <tr>
            <td><strong>Security Manager</strong></td>
            <td>Protecting information, physically protecting equipment, and preventing internet-borne attacks. Security is a task present across all roles.</td>
          </tr>
          <tr>
            <td><strong>Development</strong></td>
            <td>Creating specific software for the organisation. Alternatives include purchasing standard software (e.g., SAP ERP) or outsourcing to consultancies.</td>
          </tr>
          <tr>
            <td><strong>IT Manager</strong></td>
            <td>The most senior manager in the IT department. Acts as a bridge between the organisation's needs and the IT department's work. Makes medium and long-term decisions about IT infrastructure.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> An IT department does not necessarily require every role. The most essential are <strong>IT manager</strong>, <strong>user administrator</strong> and <strong>server administrator</strong> — and in small organisations, a single person may perform all three.</p>
      </div>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Think of the IT department as a hospital. The IT manager is the hospital director — they don't treat patients directly but decide which departments exist and how resources are allocated. Server admins are like surgeons keeping critical systems alive. User admins are like nurses — the first point of contact for everyday needs. Network admins are like the maintenance crew keeping the building's infrastructure (electricity, plumbing) running.</p>
      </div>

      <h3 class="subsection-title" id="s3-2">3.2 Role overlapping</h3>
      <p>All these roles have defined tasks, but they do not work independently. They operate in a coordinated manner and often overlap. Each organisation must decide who handles tasks that fall between two roles.</p>

      <div class="info-box note-box">
        <p><strong>Example:</strong> Does registering a user on the servers fall under the server administrator or the user administrator? If one person does both roles, no problem. If they are different people, you need to decide: should the user admin have access to tweak the servers, or should the server admin handle user registration? The solution is that some tasks must cross role boundaries for efficient administration.</p>
      </div>

      <h3 class="subsection-title" id="s3-3">3.3 Organisation chart</h3>
      <p>A typical IT department organisation chart places the IT manager at the top, with branches for the different roles below. However, the actual structure is shaped by the organisation's culture, background, habits, and available technology.</p>

      <div class="info-box note-box">
        <p><strong>Note:</strong> Technology shifts can introduce changes to the organisation chart. For example, cloud migration might eliminate certain server admin tasks while creating new roles around cloud management and security.</p>
      </div>
    </div>

    <!-- ============================== -->
    <!-- Key Takeaways -->
    <!-- ============================== -->
    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways</h3>
      <ul>
        <li>IT has become essential in any organisation. Once it reaches a certain size, isolated computers are not enough — a network and an IT department are necessary.</li>
        <li>The IT department has <strong>three core elements</strong>: the IT manager, technical support staff, and the physical IT system (hardware + software).</li>
        <li>Four perspectives on IT: organisational (resource), technical (infrastructure), user (tool), and management (data for decisions).</li>
        <li>An IT system is <strong>effective</strong> when it produces expected results and <strong>efficient</strong> when it does so with appropriate resources and time.</li>
        <li>Eight roles exist in IT departments: server admin, user admin, network admin, data manager, web admin, security manager, development, and IT manager.</li>
        <li>The three <strong>essential</strong> roles are IT manager, server administrator, and user administrator — in small organisations, one person may cover all of them.</li>
        <li>Roles overlap in practice. Organisations must decide how to divide tasks at boundary points between roles.</li>
        <li>The department's size depends on the organisation's complexity, size, and purpose, but the <strong>tasks remain the same</strong> regardless of scale.</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/nsa" class="prev">&larr; NSA Overview</router-link>
      <router-link to="/nsa/user-admin" class="next">User Administration &rarr;</router-link>
    </div>

  </div>
  </div>
</template>

<script setup>
</script>
