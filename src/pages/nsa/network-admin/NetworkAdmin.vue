<template>
  <div>
  <header class="chapter-header" style="background: linear-gradient(135deg, #1a3c4a, #2c7a7b);">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/nsa">NSA</router-link> &rsaquo;
      Network Administration
    </div>
    <h1>Network Administration</h1>
    <p class="chapter-desc">Physical components, topologies, communication protocols, and configuration of computer networks.</p>
    <div class="stats-bar">
      <span class="stat-badge">3 Cable Types</span>
      <span class="stat-badge">3 Topologies</span>
      <span class="stat-badge">4 TCP/IP Layers</span>
      <span class="stat-badge">10+ Wi-Fi Standards</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li class="toc-section"><a href="#s1">1. Getting Started with Network Administration</a></li>
        <li class="toc-section">
          <a href="#s2">2. Physical Components and Network Design</a>
          <ol>
            <li><a href="#s2-1">2.1 Network cabling</a></li>
            <li><a href="#s2-2">2.2 Connection &amp; interconnection components</a></li>
            <li><a href="#s2-3">2.3 Network topologies</a></li>
            <li><a href="#s2-4">2.4 Local network types &amp; WLAN</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s3">3. Communication Protocols</a>
          <ol>
            <li><a href="#s3-1">3.1 TCP/IP</a></li>
            <li><a href="#s3-2">3.2 IPv6</a></li>
          </ol>
        </li>
        <li class="toc-section"><a href="#s4">4. Network Configuration (Client/Server)</a></li>
        <li class="toc-section"><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <!-- ============================== -->
    <!-- 1. Getting Started -->
    <!-- ============================== -->
    <h2 class="section-title" id="s1">1. Getting Started with Network Administration</h2>

    <div class="content-section">
      <p>Standalone computers can't give you direct access to different data across an organisation. Networks provide a middle ground between individual and centralised processing.</p>

      <p>Key benefits of deploying a network:</p>
      <ul>
        <li><strong>Sharing peripheral devices</strong> — mass storage, laser printers, plotters, and other costly devices.</li>
        <li><strong>Organisation-wide communication</strong> — email, video calls, corporate messaging.</li>
        <li><strong>Easy software maintenance</strong> — software shared over the network rather than installed individually on each workstation.</li>
        <li><strong>Centralised shared resource management</strong> — tools, data, and servers accessible across all locations, even geographically dispersed ones.</li>
      </ul>

      <table class="comparison-table">
        <thead><tr><th>Network type</th><th>Range</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><strong>LAN</strong> (Local Area Network)</td><td>10 – 1,000 m</td><td>Office, campus</td></tr>
          <tr><td><strong>MAN</strong> (Metropolitan Area Network)</td><td>1 – 10 km</td><td>City-wide network</td></tr>
          <tr><td><strong>WAN</strong> (Wide Area Network)</td><td>> 10 km</td><td>Country, continent</td></tr>
        </tbody>
      </table>

      <p>The <strong>network administrator</strong> must be familiar with hardware, communication protocols, operating systems, and minimum security requirements.</p>
    </div>

    <!-- ============================== -->
    <!-- 2. Physical Components -->
    <!-- ============================== -->
    <h2 class="section-title" id="s2">2. Physical Components and Network Design</h2>

    <div class="content-section">
      <p>Before designing a network, key questions include: How many computers? How much future growth? Where are they located? What speed is required? What resources need sharing?</p>

      <h3 class="subsection-title" id="s2-1">2.1 Network cabling</h3>

      <table class="comparison-table">
        <thead><tr><th>Cable type</th><th>Description</th><th>Range</th><th>Speed</th><th>Cost</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Twisted pair</strong></td>
            <td>Conductive wires twisted together. STP (shielded) or UTP (unshielded, 4 pairs). Categories 3/5/5e/6 determine speed.</td>
            <td>Up to 100 m</td>
            <td>10 – 1,000 Mbps</td>
            <td>Low</td>
          </tr>
          <tr>
            <td><strong>Coaxial</strong></td>
            <td>Single internal conductor with multiple protection layers. Available in thick (up to 2 km) and thin versions. BNC connectors.</td>
            <td>Up to 2 km</td>
            <td>20 – 100 Mbps</td>
            <td>Moderate</td>
          </tr>
          <tr>
            <td><strong>Fibre optic</strong></td>
            <td>Light beam through glass/plastic core. Single-mode (100 GHz/km bandwidth) or multi-mode (500 MHz/km). Immune to electromagnetic interference.</td>
            <td>Several km</td>
            <td>Hundreds of Mbps to Gbps</td>
            <td>Higher (but decreasing)</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Think of cables as roads. Twisted pair is a local street — cheap and short. Coaxial is a highway — handles longer distances but costs more. Fibre optic is a high-speed rail — extremely fast, covers great distances, but requires specialised infrastructure.</p>
      </div>

      <h3 class="subsection-title" id="s2-2">2.2 Connection &amp; interconnection components</h3>

      <table class="comparison-table">
        <thead><tr><th>Component</th><th>Function</th><th>Intelligence</th></tr></thead>
        <tbody>
          <tr><td><strong>NIC</strong> (Network Interface Card)</td><td>Connects a computer to the network.</td><td>Basic — identifies the device on the network.</td></tr>
          <tr><td><strong>Hub</strong></td><td>Shares a communication line between several computers. Sends all information to all connected devices.</td><td>None — broadcasts everything (wastes bandwidth).</td></tr>
          <tr><td><strong>Switch</strong></td><td>Manages traffic based on destination address. Redirects information only to the destination port.</td><td>Smart — reduces unnecessary traffic.</td></tr>
          <tr><td><strong>Repeater</strong></td><td>Amplifies signals to prevent damping over long cable runs. Operates at the physical layer.</td><td>None — just boosts signal.</td></tr>
          <tr><td><strong>Bridge</strong></td><td>Connects two network segments. Filters traffic between them. Self-learns which devices are on which side.</td><td>Data link layer — can filter and forward.</td></tr>
          <tr><td><strong>Router</strong></td><td>Manages packet traffic between networks. Can act as a firewall. Finds optimal routes for packets.</td><td>High — routing, filtering, security.</td></tr>
          <tr><td><strong>Gateway</strong></td><td>Connects networks that use incompatible protocols. Operates at upper OSI levels.</td><td>High — protocol translation.</td></tr>
          <tr><td><strong>Firewall</strong></td><td>Prevents unauthorised users from accessing a specific machine. Can be hardware or software.</td><td>Security-focused — access control.</td></tr>
        </tbody>
      </table>

      <h3 class="subsection-title" id="s2-3">2.3 Network topologies</h3>
      <p>Network topology refers to the logical way different devices are connected (distinct from physical layout/wiring).</p>

      <table class="comparison-table">
        <thead><tr><th>Topology</th><th>How it works</th><th>Strengths</th><th>Weaknesses</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Bus</strong></td>
            <td>All nodes connected to a common cable. Messages reach all nodes. No routing needed.</td>
            <td>Flexible, modular, low cost.</td>
            <td>Single bus = critical failure point. Easy to intercept. Overload traffic drops performance.</td>
          </tr>
          <tr>
            <td><strong>Ring</strong></td>
            <td>Cable runs from workstation to workstation in a loop. Each node amplifies and distributes data.</td>
            <td>Data flows predictably. No routing needed.</td>
            <td>One workstation failure can crash the entire ring. Easy to intercept (data passes through all nodes).</td>
          </tr>
          <tr>
            <td><strong>Star</strong></td>
            <td>All workstations connect to a central hub/switch. Communications go through the centre.</td>
            <td>Resilient to individual workstation crashes. Most popular today.</td>
            <td>Central component is a critical point — if it fails, entire network goes down.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> The <strong>star topology</strong> has become the most popular due to flexibility, reliability, and security — even in places where bus or ring would seem logical for the physical layout.</p>
      </div>

      <h3 class="subsection-title" id="s2-4">2.4 Local network types &amp; WLAN</h3>
      <p>The <strong>IEEE 802.x</strong> standards define how local area networks operate. The most relevant:</p>
      <ul>
        <li><strong>IEEE 802.3</strong> (Ethernet) — bus topology, CSMA/CD access. The most widely used standard.</li>
        <li><strong>IEEE 802.11</strong> (Wi-Fi) — wireless LAN standards with multiple revisions.</li>
        <li><strong>IEEE 802.15</strong> (Bluetooth) — wireless personal area networks.</li>
        <li><strong>IEEE 802.16</strong> (WiMAX) — broadband wireless access for metropolitan areas.</li>
      </ul>

      <p>WLANs solve problems where cables are physically difficult to install or network growth is unpredictable. The latest standard, <strong>802.11be</strong> (2024), achieves speeds up to <strong>46 Gbps</strong> on 2.4/5/6 GHz bands.</p>

      <div class="info-box note-box">
        <p><strong>Wi-Fi Security:</strong> WEP (original, now easily cracked) has been replaced by <strong>WPA3</strong>, which provides AES encryption, better authentication, and message integrity control. Wireless networks inherently require stronger security measures than wired networks because data circulates through the air.</p>
      </div>

      <table class="comparison-table">
        <thead><tr><th>Mode</th><th>How it works</th><th>Use case</th></tr></thead>
        <tbody>
          <tr><td><strong>Ad hoc</strong> (client-to-client)</td><td>Devices communicate directly within range.</td><td>Quick file exchange between two computers.</td></tr>
          <tr><td><strong>Infrastructure</strong> (client-to-AP)</td><td>Workstations communicate via access points that bridge to the rest of the network.</td><td>Standard corporate Wi-Fi setup.</td></tr>
        </tbody>
      </table>
    </div>

    <!-- ============================== -->
    <!-- 3. Communication Protocols -->
    <!-- ============================== -->
    <h2 class="section-title" id="s3">3. Communication Protocols</h2>

    <div class="content-section">
      <h3 class="subsection-title" id="s3-1">3.1 TCP/IP</h3>
      <p>TCP/IP is a protocol suite developed in 1972 by the US Department of Defense for ARPANET. It is now the standard for the Internet and supported by all major operating systems.</p>

      <p>Information is sent as <strong>datagrams</strong> containing data and control information. Each datagram is sent individually and can arrive out of order — TCP reassembles them correctly at the destination.</p>

      <table class="comparison-table">
        <thead><tr><th>TCP/IP Layer</th><th>OSI equivalent</th><th>Function</th><th>Example protocols</th></tr></thead>
        <tbody>
          <tr><td><strong>Application</strong></td><td>Application, Presentation, Session</td><td>Provides services to user applications</td><td>HTTP, FTP, SMTP, SSH, DNS</td></tr>
          <tr><td><strong>Transport</strong></td><td>Transport</td><td>Ensures data arrives complete, undamaged, and in sequence</td><td><strong>TCP</strong> (reliable, connection-based) / <strong>UDP</strong> (unreliable, connectionless — used for streaming)</td></tr>
          <tr><td><strong>Inter-network</strong></td><td>Network</td><td>Handles routing packets through the network</td><td>IP, ICMP, ARP</td></tr>
          <tr><td><strong>Link</strong></td><td>Data Link, Physical</td><td>Method for passing packets between devices</td><td>Ethernet, Wi-Fi</td></tr>
        </tbody>
      </table>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Think of TCP/IP like a postal system. The <strong>application layer</strong> is the letter you write. The <strong>transport layer</strong> is the postal service that guarantees delivery (TCP = registered mail; UDP = postcard, no guarantee). The <strong>internet layer</strong> decides the route. The <strong>link layer</strong> is the actual vehicle (truck, plane) carrying the mail.</p>
      </div>

      <h3 class="subsection-title" id="s3-2">3.2 IPv6</h3>
      <p>IPv6 is the latest Internet Protocol version, designed to replace IPv4. Key improvements:</p>
      <ul>
        <li><strong>Vastly increased addressing capacity:</strong> 2<sup>128</sup> addresses (~3.4 &times; 10<sup>38</sup>) versus IPv4's 2<sup>32</sup>.</li>
        <li><strong>Built-in security (IPSec):</strong> authentication and encryption for secure communication. Used in VPNs.</li>
        <li><strong>Mobility:</strong> nodes maintain their IP address despite physical movement.</li>
        <li><strong>Self-configuration:</strong> hosts can auto-configure interfaces and connect to the network.</li>
      </ul>

      <p>IPv6 introduces three address types: <strong>Unicast</strong> (one-to-one), <strong>Anycast</strong> (one-to-closest), <strong>Multicast</strong> (one-to-all-in-group, replacing IPv4 broadcast).</p>
    </div>

    <!-- ============================== -->
    <!-- 4. Network Configuration -->
    <!-- ============================== -->
    <h2 class="section-title" id="s4">4. Network Configuration (Client/Server)</h2>

    <div class="content-section">
      <p>Connecting a workstation to the network involves four steps:</p>
      <ol>
        <li><strong>NIC driver installation and configuration</strong> — install drivers, resolve potential I/O and interruption conflicts.</li>
        <li><strong>Communication protocol selection</strong> — TCP/IP is standard; older protocols (SPX/IPX, AppleTalk) are obsolete.</li>
        <li><strong>Client installation and configuration</strong> — install applications that use network resources (file sharing, web server, FTP).</li>
        <li><strong>Other configuration</strong> — access control (by resources or by users), file/printer sharing, machine identification, workgroup assignment.</li>
      </ol>
    </div>

    <!-- ============================== -->
    <!-- Key Takeaways -->
    <!-- ============================== -->
    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways</h3>
      <ul>
        <li>Networks provide <strong>resource sharing, communication, centralised management, and easier software maintenance</strong>.</li>
        <li>Three cable types: <strong>twisted pair</strong> (cheap, short-range), <strong>coaxial</strong> (medium range/cost), <strong>fibre optic</strong> (fast, long-range, immune to interference).</li>
        <li>Key components escalate in intelligence: hub (broadcasts everything) &lt; switch (directs to destination) &lt; router (manages routes, security) &lt; gateway (translates protocols).</li>
        <li>Three topologies: <strong>bus</strong> (shared cable), <strong>ring</strong> (loop), <strong>star</strong> (central hub) — star is most popular today for reliability and flexibility.</li>
        <li><strong>IEEE 802.3</strong> (Ethernet) is the dominant LAN standard. <strong>IEEE 802.11</strong> (Wi-Fi) enables wireless connectivity with WPA3 security.</li>
        <li>TCP/IP has four layers: Application, Transport (TCP/UDP), Inter-network (IP), and Link.</li>
        <li><strong>TCP</strong> guarantees delivery (reliable); <strong>UDP</strong> prioritises speed over reliability (used for streaming).</li>
        <li><strong>IPv6</strong> vastly expands addressing (2<sup>128</sup>), adds built-in security (IPSec), mobility, and self-configuration.</li>
        <li>Workstation network setup: install NIC drivers, select protocol (TCP/IP), install client software, configure access control and sharing.</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/nsa/server-admin" class="prev">&larr; Server Administration</router-link>
      <router-link to="/nsa/data-admin" class="next">Data Administration &rarr;</router-link>
    </div>

  </div>
  </div>
</template>

<script setup>
</script>
