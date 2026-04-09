<template>
  <div>
  <header class="chapter-header" style="background: linear-gradient(135deg, #1a3c4a, #2c7a7b);">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/nsa">NSA</router-link> &rsaquo;
      Server Administration
    </div>
    <h1>Server Administration</h1>
    <p class="chapter-desc">Physical and virtual servers, containers, cloud services, storage systems, backups, high availability, and the server administrator's responsibilities.</p>
    <div class="stats-bar">
      <span class="stat-badge">8+ Server Types</span>
      <span class="stat-badge">3 Virtualisation Levels</span>
      <span class="stat-badge">7 RAID Levels</span>
      <span class="stat-badge">3 Cloud Models</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li class="toc-section">
          <a href="#s1">1. Debunking the Server Myth</a>
          <ol>
            <li><a href="#s1-1">1.1 Server functions</a></li>
            <li><a href="#s1-2">1.2 Server configurations</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s2">2. Server Types</a>
          <ol>
            <li><a href="#s2-1">2.1 Physical servers</a></li>
            <li><a href="#s2-2">2.2 Virtual servers</a></li>
            <li><a href="#s2-3">2.3 Containers</a></li>
            <li><a href="#s2-4">2.4 Cloud servers</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s3">3. Server Aggregation</a>
          <ol>
            <li><a href="#s3-1">3.1 Load balancing &amp; clusters</a></li>
            <li><a href="#s3-2">3.2 Grid &amp; cloud computing</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s4">4. Storage</a>
          <ol>
            <li><a href="#s4-1">4.1 File systems &amp; RAID</a></li>
            <li><a href="#s4-2">4.2 Storage systems (SAN, NAS)</a></li>
          </ol>
        </li>
        <li class="toc-section"><a href="#s5">5. Backup &amp; Security</a></li>
        <li class="toc-section"><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <!-- ============================== -->
    <!-- 1. Debunking the Server Myth -->
    <!-- ============================== -->
    <h2 class="section-title" id="s1">1. Debunking the Server Myth</h2>

    <div class="content-section">
      <p>Servers no longer require entire rooms. Modern servers can be physical machines resembling desktop computers, virtual devices, or containers located thousands of miles away. What makes them different is the specialised hardware, software, and operational requirements.</p>

      <div class="info-box key-point-box">
        <p><strong>Definition:</strong> A server is a physical or virtual system that makes its own resources available to other client computers. It operates <strong>24/7/365</strong>, is designed to never stop, can withstand repairs while operational, and handles multiple concurrent service requests within defined response times.</p>
      </div>

      <h3 class="subsection-title" id="s1-1">1.1 Server functions</h3>

      <table class="comparison-table">
        <thead><tr><th>Server type</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><strong>Domain server</strong></td><td>Defines the IT infrastructure domain. Enables user/permission structuring and management/security policies.</td></tr>
          <tr><td><strong>File server</strong></td><td>Shares files among users/groups. Provides personal storage space. Facilitates mobility and backup.</td></tr>
          <tr><td><strong>Application server</strong></td><td>Shares applications among users. Typically a three-tier system: front end (web browsers), middle tier (application server), back end (database server).</td></tr>
          <tr><td><strong>Database server</strong></td><td>Hosts relational DBMSs or NoSQL databases.</td></tr>
          <tr><td><strong>Backup server</strong></td><td>Manages all backup operations, policies, rotations, and reports.</td></tr>
          <tr><td><strong>Mail server</strong></td><td>Sends and receives messages.</td></tr>
          <tr><td><strong>Security server</strong></td><td>Vulnerability analysis, SIEM, firewalls, proxies — guarantees IT infrastructure security.</td></tr>
          <tr><td><strong>ML/DL server</strong></td><td>Training artificial intelligence models (modern addition).</td></tr>
        </tbody>
      </table>

      <h3 class="subsection-title" id="s1-2">1.2 Server configurations</h3>

      <table class="comparison-table">
        <thead><tr><th>Configuration</th><th>Description</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><strong>One server, one operation</strong></td><td>Simplest: dedicated to a single service.</td><td>A server running only email management.</td></tr>
          <tr><td><strong>One server, N operations</strong></td><td>Uses unused resources for additional services. Optimises resources.</td><td>A physical server virtualised into multiple virtual servers.</td></tr>
          <tr><td><strong>N servers, one operation</strong></td><td>Critical services requiring scalability and high availability.</td><td>A high-availability email cluster.</td></tr>
          <tr><td><strong>N servers, N operations</strong></td><td>Heterogeneous system with different combinations.</td><td>Complex enterprise infrastructure.</td></tr>
        </tbody>
      </table>

      <div class="info-box note-box">
        <p><strong>OS landscape:</strong> Two major families dominate server operating systems: <strong>Windows</strong> and <strong>Linux</strong>. As of 2025, Linux usage has increased by 10% due to its dominance in cloud infrastructures.</p>
      </div>
    </div>

    <!-- ============================== -->
    <!-- 2. Server Types -->
    <!-- ============================== -->
    <h2 class="section-title" id="s2">2. Server Types</h2>

    <div class="content-section">
      <h3 class="subsection-title" id="s2-1">2.1 Physical servers</h3>
      <p>A physical server's components resemble a desktop computer (RAM, NIC, storage, CPU, power supply, GPU, motherboard) but are designed for continuous operation, high throughput, and reliability.</p>

      <table class="comparison-table">
        <thead><tr><th>Component</th><th>Server specifics</th></tr></thead>
        <tbody>
          <tr><td><strong>RAM</strong></td><td>Large amounts needed, especially for virtualisation servers and DBMSs. Faster RAM = better performance.</td></tr>
          <tr><td><strong>CPU</strong></td><td>Multiple sockets with multiple cores. Current systems: S (sockets) &times; N (cores) = total processing units.</td></tr>
          <tr><td><strong>GPU</strong></td><td>No longer just for graphics — now used for AI/ML training and blockchain. Connected via PCIe (256 Gb/s) or NVLink 5.0 (1,800 Gb/s).</td></tr>
          <tr><td><strong>FPGA</strong></td><td>Field-programmable gate arrays for specialised, fast processing tasks. CAPI 2.0 provides direct RAM access without CPU.</td></tr>
          <tr><td><strong>Motherboard</strong></td><td>Must be high quality for fast transmission. Internal bus uses PCIe channels (currently G6). Supports multiple sockets and built-in interfaces.</td></tr>
          <tr><td><strong>I/O cards</strong></td><td>Communication channel with peripherals, storage, and network. Ethernet cards (1 GbE to 100 GbE) and Fibre Channel cards (8 to 128 Gbps).</td></tr>
        </tbody>
      </table>

      <p>Physical layouts include standard rack-mount systems (most common), heat-resistant boxes, and <strong>blade systems</strong> where each server is a blade within a shared enclosure (blade centre) that provides power, cooling, and network access.</p>

      <h3 class="subsection-title" id="s2-2">2.2 Virtual servers</h3>
      <p><strong>Virtualisation</strong> allows one physical computer to run multiple operating systems and services independently and securely. A virtual server shares system resources through a <strong>hypervisor</strong>.</p>

      <table class="comparison-table">
        <thead><tr><th>Hypervisor type</th><th>How it works</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><strong>Bare-metal (Type 1)</strong></td><td>Virtualiser software interacts directly with physical hardware — no host OS needed.</td><td>VMware ESXi, Microsoft Hyper-V (standalone)</td></tr>
          <tr><td><strong>Application-based (Type 2)</strong></td><td>Shares resources through a host operating system.</td><td>Oracle VirtualBox, VMware Workstation</td></tr>
        </tbody>
      </table>

      <p>Advantages of virtualisation: fewer physical servers, less space, lower energy consumption, resource sharing, centralised management.</p>

      <h3 class="subsection-title" id="s2-3">2.3 Containers</h3>

      <div class="pattern-summary">
        <h4>Containers (Docker)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A standard unit of software that packages code and all dependencies so applications run reliably across environments. Shares parts of the OS with the host but has its own file system, CPU, and RAM.</span></div>
        <div class="ps-row"><span class="ps-label">Advantage:</span> <span>Easy to create and clone. Much lighter than full VMs. Can be deployed on physical servers, VMs, or directly on hypervisors.</span></div>
        <div class="ps-row"><span class="ps-label">Structures:</span> <span><strong>POD</strong> = one or more containers sharing storage with a unique address. <strong>Deployment</strong> = manages POD replicas for high availability. <strong>CSI</strong> = specialised container for disk access management.</span></div>
      </div>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> If a physical server is an entire apartment building, a virtual machine is a full apartment (with its own kitchen, bathroom, etc.). A container is more like a hotel room — it shares the building's plumbing and electricity (OS kernel) but has its own private space. Containers are quicker to set up and tear down than full apartments.</p>
      </div>

      <p>Container management uses <strong>orchestrators</strong> (Docker, Cloud Foundry) for lifecycle management and <strong>automation managers</strong> (Kubernetes) for deployment, scaling, and container management.</p>

      <h3 class="subsection-title" id="s2-4">2.4 Cloud servers</h3>

      <table class="comparison-table">
        <thead><tr><th>Service model</th><th>What is provided</th><th>Who manages what</th></tr></thead>
        <tbody>
          <tr><td><strong>IaaS</strong> (Infrastructure as a Service)</td><td>Physical infrastructure / bare metal directly available.</td><td>You manage everything from OS upward.</td></tr>
          <tr><td><strong>PaaS</strong> (Platform as a Service)</td><td>Configurable infrastructure platform.</td><td>You manage applications; provider manages infrastructure.</td></tr>
          <tr><td><strong>SaaS</strong> (Software as a Service)</td><td>Specialised services (email, storage, office tools).</td><td>Provider manages everything; you just use the software.</td></tr>
        </tbody>
      </table>

      <p>Additional models: <strong>BaaS</strong> (Backup as a Service), <strong>SECaaS</strong> (Security as a Service).</p>
    </div>

    <!-- ============================== -->
    <!-- 3. Server Aggregation -->
    <!-- ============================== -->
    <h2 class="section-title" id="s3">3. Server Aggregation</h2>

    <div class="content-section">
      <h3 class="subsection-title" id="s3-1">3.1 Load balancing &amp; clusters</h3>
      <p><strong>Load balancing</strong> divides the total workload between two or more systems. It can use hardware, software, or a combination, and supports asymmetric load distribution.</p>

      <p>A <strong>cluster</strong> is a group of interconnected computers working together as a single system. Advantages: cost-effective, simple components, high availability, scalable, good performance.</p>

      <table class="comparison-table">
        <thead><tr><th>Cluster type</th><th>Purpose</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><strong>High Performance (HPC)</strong></td><td>Tasks requiring massive processing power.</td><td>Supercomputers (El Capitan, MareNostrum)</td></tr>
          <tr><td><strong>High Availability (HA)</strong></td><td>Maximise uptime through failure detection and recovery.</td><td>Email cluster that stays online even if one node fails.</td></tr>
          <tr><td><strong>High Throughput (HT)</strong></td><td>Execute maximum number of tasks in shortest time.</td><td>Batch processing systems.</td></tr>
        </tbody>
      </table>

      <p>Cluster components: <strong>nodes</strong> (physical/virtual servers or containers), <strong>operating systems</strong>, <strong>network connections</strong> (Ethernet to Infiniband), <strong>middleware</strong> (provides single system image), <strong>optimisation tools</strong> (process migration, checkpointing, fault tolerance), and <strong>parallel programming environments</strong>.</p>

      <h3 class="subsection-title" id="s3-2">3.2 Grid &amp; cloud computing</h3>
      <p><strong>Grid computing</strong> combines resources from many computers (not necessarily co-located) transparently into a single supercomputer, connected via the internet. Key features: no central control, open standards, and non-trivial service qualities.</p>

      <div class="info-box note-box">
        <p><strong>Example — SETI Project:</strong> NASA's Search for ExtraTerrestrial Intelligence distributes radio telescope data among volunteer participants' computers worldwide. What a single computer would take thousands of years to analyse, millions of distributed computers accomplish in parallel.</p>
      </div>

      <p><strong>Cloud computing</strong> at the server level is largely based on <strong>load balancing clusters with virtualisation</strong>. Cloud Management Platforms (CMPs) like OpenStack, AWS, Azure, and Google Cloud Platform manage storage, communications, physical servers, virtual servers, and containers.</p>
    </div>

    <!-- ============================== -->
    <!-- 4. Storage -->
    <!-- ============================== -->
    <h2 class="section-title" id="s4">4. Storage</h2>

    <div class="content-section">
      <p>Disks store all organisational data and are critical components. Capacity, speed, security, and location are key factors.</p>

      <p>Standard server partitions: <strong>System</strong> (OS), <strong>Users</strong> (personal/group folders), <strong>Data</strong> (shared application data), <strong>Core applications</strong> (everyone, read + execute), <strong>Applications</strong> (group-restricted), and <strong>Other</strong> (databases, development).</p>

      <h3 class="subsection-title" id="s4-1">4.1 File systems &amp; RAID</h3>

      <table class="comparison-table">
        <thead><tr><th>File system</th><th>Platform</th><th>Key features</th></tr></thead>
        <tbody>
          <tr><td><strong>NTFS</strong></td><td>Windows</td><td>Small sector/cluster size, file system security, compression, encryption. Highly robust.</td></tr>
          <tr><td><strong>ReFS</strong></td><td>Windows (newer)</td><td>Resilient file system designed for data integrity and large volumes.</td></tr>
          <tr><td><strong>ext4</strong></td><td>Linux</td><td>Most common Linux FS. Supports volumes up to 1 EB, journaling, backward compatibility.</td></tr>
          <tr><td><strong>XFS</strong></td><td>Linux</td><td>High-performance 64-bit journaling FS. Good for large files and parallel I/O.</td></tr>
          <tr><td><strong>ZFS</strong></td><td>Cross-platform</td><td>Combined volume manager + file system. Built-in integrity checking, compression, snapshots.</td></tr>
        </tbody>
      </table>

      <p><strong>RAID</strong> (Redundant Array of Independent Disks) combines multiple physical disks for performance, capacity, or redundancy:</p>

      <table class="comparison-table">
        <thead><tr><th>RAID level</th><th>How it works</th><th>Min. disks</th><th>Fault tolerance</th></tr></thead>
        <tbody>
          <tr><td><strong>RAID 0</strong> (Striping)</td><td>Data split across disks for speed. No redundancy.</td><td>2</td><td>None — one disk failure loses all data.</td></tr>
          <tr><td><strong>RAID 1</strong> (Mirroring)</td><td>Data duplicated on two disks. Read from either.</td><td>2</td><td>Survives 1 disk failure. 50% storage efficiency.</td></tr>
          <tr><td><strong>RAID 5</strong> (Parity)</td><td>Data and parity distributed across disks.</td><td>3</td><td>Survives 1 disk failure. Good read performance.</td></tr>
          <tr><td><strong>RAID 6</strong> (Double parity)</td><td>Like RAID 5 but with two parity blocks.</td><td>4</td><td>Survives 2 simultaneous disk failures.</td></tr>
          <tr><td><strong>RAID 10</strong> (1+0)</td><td>Mirrored sets that are then striped. Combines speed and redundancy.</td><td>4</td><td>Survives 1 failure per mirrored pair. Best performance.</td></tr>
        </tbody>
      </table>

      <h3 class="subsection-title" id="s4-2">4.2 Storage systems (SAN, NAS)</h3>

      <table class="comparison-table">
        <thead><tr><th>System</th><th>How it works</th><th>Access type</th><th>Best for</th></tr></thead>
        <tbody>
          <tr><td><strong>Internal disk</strong></td><td>Disks inside the server.</td><td>Direct (block-level)</td><td>Simple setups, small organisations.</td></tr>
          <tr><td><strong>SAN</strong> (Storage Area Network)</td><td>Dedicated high-speed network connecting servers to storage devices. Uses Fibre Channel or iSCSI.</td><td>Block-level</td><td>Databases, high-performance workloads.</td></tr>
          <tr><td><strong>NAS</strong> (Network-Attached Storage)</td><td>Dedicated file server on the regular network. Uses NFS, SMB/CIFS.</td><td>File-level</td><td>File sharing, backups, media.</td></tr>
          <tr><td><strong>Hyperconvergence</strong></td><td>Integrates compute, storage, and networking into a single appliance with software-defined management.</td><td>Both</td><td>Simplified infrastructure, scalable growth.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- ============================== -->
    <!-- 5. Backup & Security -->
    <!-- ============================== -->
    <h2 class="section-title" id="s5">5. Backup &amp; Security</h2>

    <div class="content-section">
      <p>Backup policies define <strong>what</strong> to copy, <strong>how often</strong>, <strong>where</strong> to store copies, and <strong>how long</strong> to retain them. Backup types: complete, incremental, and differential (covered in the Data Administration module).</p>

      <p>Backup devices have evolved from <strong>tape drives</strong> (reliable, high capacity, slow) to <strong>virtual hard drives/tapes</strong> (faster, flexible) to <strong>cloud backups</strong> (offsite, scalable). Backup copies should be stored in a <strong>physically separate, secure location</strong>.</p>

      <h4 class="subsubsection-title">Server security</h4>
      <p>Server security spans three dimensions:</p>

      <table class="comparison-table">
        <thead><tr><th>Dimension</th><th>What it covers</th></tr></thead>
        <tbody>
          <tr><td><strong>Physical security</strong></td><td>Secure server room with climate control, access control, and fire suppression. Uninterruptible Power Supply (UPS) to protect against power outages and surges.</td></tr>
          <tr><td><strong>Software security</strong></td><td>OS hardening, regular patching, firewall configuration, intrusion detection, anti-malware.</td></tr>
          <tr><td><strong>High availability</strong></td><td>Ensuring the server stays operational. The "five nines" (99.999%) standard means max ~5 minutes of downtime per year.</td></tr>
        </tbody>
      </table>

      <div class="pattern-summary">
        <h4>High Availability Approaches</h4>
        <div class="ps-row"><span class="ps-label">Fault-tolerant:</span> <span>Hardware redundancy within a single server — duplicate components (power supplies, disks, NICs) so a failure is transparent to users.</span></div>
        <div class="ps-row"><span class="ps-label">HA Clusters:</span> <span>Multiple servers where one takes over if another fails. Provides service continuity at the cost of a brief switchover time.</span></div>
      </div>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> <strong>Fault-tolerant</strong> servers are like a car with run-flat tyres — a puncture doesn't stop you. <strong>HA clusters</strong> are like having a backup car following you — if yours breaks down, you switch to the other one with a brief pause.</p>
      </div>
    </div>

    <!-- ============================== -->
    <!-- Key Takeaways -->
    <!-- ============================== -->
    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways</h3>
      <ul>
        <li>A server is a physical or virtual system operating <strong>24/7/365</strong>, designed for continuous uptime, concurrent requests, and data security.</li>
        <li>Functional server types include domain, file, application, database, backup, mail, security, and ML/DL servers.</li>
        <li>Four configuration models: <strong>1:1</strong> (simple), <strong>1:N</strong> (virtualisation), <strong>N:1</strong> (high availability), <strong>N:N</strong> (enterprise).</li>
        <li>Three virtualisation levels: <strong>physical servers</strong> (hardware), <strong>virtual servers</strong> (hypervisors — Type 1 bare-metal or Type 2 application-based), and <strong>containers</strong> (Docker/Kubernetes).</li>
        <li>Cloud services: <strong>IaaS</strong> (raw infrastructure), <strong>PaaS</strong> (platform), <strong>SaaS</strong> (ready-to-use software).</li>
        <li>Clusters: <strong>HPC</strong> (performance), <strong>HA</strong> (availability), <strong>HT</strong> (throughput). Grid computing extends this across the internet.</li>
        <li>Key file systems: NTFS (Windows), ext4/XFS (Linux), ZFS (cross-platform with integrity features).</li>
        <li><strong>RAID</strong> levels: 0 (speed, no redundancy), 1 (mirror), 5 (distributed parity), 6 (double parity), 10 (mirror + stripe).</li>
        <li>Storage: <strong>SAN</strong> (block-level, Fibre Channel) for databases; <strong>NAS</strong> (file-level, network) for sharing; <strong>hyperconvergence</strong> for simplified infrastructure.</li>
        <li>Server security covers <strong>physical</strong> (secure room, UPS), <strong>software</strong> (hardening, patching), and <strong>high availability</strong> (fault-tolerant hardware, HA clusters, "five nines").</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/nsa/user-admin" class="prev">&larr; User Administration</router-link>
      <router-link to="/nsa/network-admin" class="next">Network Administration &rarr;</router-link>
    </div>

  </div>
  </div>
</template>

<script setup>
</script>
