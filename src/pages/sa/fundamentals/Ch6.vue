<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/sa">SA</router-link> &rsaquo;
      <router-link to="/sa/fundamentals">Fundamentals</router-link> &rsaquo;
      Chapter 6
    </div>
    <h1>Chapter 6: Measuring &amp; Governing Architecture Characteristics</h1>
    <p class="chapter-desc">From vague "-ilities" to concrete, measurable, automatically-governed quality gates — using fitness functions, ArchUnit, NetArchTest, and the Chaos Monkey.</p>
    <div class="stats-bar">
      <span class="stat-badge">Cyclomatic Complexity</span>
      <span class="stat-badge">Fitness Functions</span>
      <span class="stat-badge">ArchUnit</span>
      <span class="stat-badge">Netflix Chaos Engineering</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li><a href="#s6-1">Why Measurement Is Hard</a></li>
        <li><a href="#s6-2">Operational Measures</a></li>
        <li><a href="#s6-3">Structural Measures — Cyclomatic Complexity</a></li>
        <li><a href="#s6-4">Process Measures</a></li>
        <li><a href="#s6-5">Governance and Fitness Functions</a></li>
        <li><a href="#s6-6">Automated Governance Tools</a></li>
        <li><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <h2 class="section-title" id="s6-1">Why Measurement Is Hard</h2>
    <div class="content-section">
      <p>Architects struggle to define and measure architectural characteristics for three reasons:</p>
      <table class="comparison-table">
        <thead><tr><th>Problem</th><th>Example</th><th>Solution</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Vague meanings</strong></td>
            <td>"Agility" or "wicked fast performance" mean different things to different people</td>
            <td>Decompose composite characteristics into specific, measurable constituents</td>
          </tr>
          <tr>
            <td><strong>Wildly varying definitions</strong></td>
            <td>Dev says "performance = avg response time". Ops says "performance = 99th percentile". Neither is wrong.</td>
            <td>Establish a ubiquitous language — a shared, agreed-upon definition within the organization</td>
          </tr>
          <tr>
            <td><strong>Composite characteristics</strong></td>
            <td>"Agility" is really modularity + deployability + testability</td>
            <td>Break down composites into their observable components before measuring</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="section-title" id="s6-2">Operational Measures</h2>
    <div class="content-section">
      <p>Operational characteristics like performance and scalability have direct measurements. But even simple metrics require nuance:</p>

      <table class="comparison-table">
        <thead><tr><th>Metric</th><th>Basic measurement</th><th>Better measurement</th></tr></thead>
        <tbody>
          <tr>
            <td>Response time</td>
            <td>Average response time</td>
            <td>p99 (99th percentile) response time — catches outliers that average hides. 1% of requests may take 10x longer.</td>
          </tr>
          <tr>
            <td>Scalability</td>
            <td>Max users supported</td>
            <td>Statistical model of load over time — raise alarms when real-time metrics deviate from the model's predictions.</td>
          </tr>
          <tr>
            <td>Web performance</td>
            <td>Server response time</td>
            <td>First Contentful Paint (FCP), First CPU Idle — user-perceived metrics. K-weight budgets for page downloads.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box note-box">
        <p><strong>Performance budgets:</strong> Many organizations allow a maximum number of kilobytes of libraries/frameworks per page. This is derived from physics: only so many bytes travel over mobile networks. An architect who understands this sets a structural constraint (limited external dependencies) to meet a performance characteristic.</p>
      </div>
    </div>

    <h2 class="section-title" id="s6-3">Structural Measures — Cyclomatic Complexity</h2>
    <div class="content-section">
      <p><strong>Cyclomatic Complexity (CC)</strong>, designed by Thomas McCabe in 1976, provides an objective measure of code complexity by counting decision paths in a function or method.</p>

      <div class="pattern-summary">
        <h4>Cyclomatic Complexity formula</h4>
        <div class="ps-row"><span class="ps-label">Formula:</span> <span>CC = E − N + 2 (for a single function), where E = edges (decisions), N = nodes (lines of code)</span></div>
        <div class="ps-row"><span class="ps-label">No branches:</span> <span>CC = 1 (single linear path)</span></div>
        <div class="ps-row"><span class="ps-label">One if/else:</span> <span>CC = 2 (two possible paths)</span></div>
        <div class="ps-row"><span class="ps-label">Industry guidance:</span> <span>CC &lt; 10: acceptable. CC &gt; 10: complex. CC &gt; 20: very complex, refactor urgently.</span></div>
      </div>

      <div class="info-box warning-box">
        <p><strong>Limitation:</strong> Cyclomatic Complexity cannot distinguish between <em>essential complexity</em> (the problem itself is complex) and <em>accidental complexity</em> (the code is more complex than it needs to be). Establish baselines — then investigate whether high CC is justified by domain complexity.</p>
      </div>

      <p>Other structural measures include LCOM (Lack of Cohesion in Methods, Ch3) and Distance from the Main Sequence (Abstractness + Instability, Ch3). These can all be integrated into automated fitness functions.</p>
    </div>

    <h2 class="section-title" id="s6-4">Process Measures</h2>
    <div class="content-section">
      <p>Some architectural characteristics relate to development process quality:</p>
      <ul>
        <li><strong>Testability:</strong> Measured by code coverage, mutation testing results. Warning: developers can game coverage by writing assertions-free tests. Fitness functions can detect this.</li>
        <li><strong>Deployability:</strong> Measured by deployment frequency, lead time for changes, change failure rate, MTTR (Mean Time to Recover). The DORA metrics framework.</li>
        <li><strong>Agility:</strong> Composite of testability, deployability, modularity. Hard to measure holistically but measurable through its components.</li>
      </ul>
    </div>

    <h2 class="section-title" id="s6-5">Governance and Fitness Functions</h2>
    <div class="content-section">
      <p>Architecture decisions are worthless if ignored. Governance is about ensuring compliance. The most scalable governance approach: automate it. <strong>Fitness functions</strong> are automated tests that verify architectural characteristics continuously.</p>

      <div class="pattern-summary">
        <h4>Fitness Functions</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Automated verification mechanisms (unit tests, integration tests, production monitors) that check architectural constraints.</span></div>
        <div class="ps-row"><span class="ps-label">Origin:</span> <span>Term borrowed from evolutionary computing — a function that evaluates how close a solution is to meeting its target criteria.</span></div>
        <div class="ps-row"><span class="ps-label">Examples:</span> <span>Cyclomatic Complexity threshold, layer access rules, dependency direction rules, performance regression tests.</span></div>
      </div>

      <div class="info-box note-box">
        <p><strong>Important:</strong> Fitness functions should be collaborative. If developers don't understand why a fitness function exists, they'll resent it or work around it. Architects must explain the purpose before imposing the constraint.</p>
      </div>
    </div>

    <h2 class="section-title" id="s6-6">Automated Governance Tools</h2>
    <div class="content-section">
      <table class="comparison-table">
        <thead><tr><th>Tool</th><th>Language</th><th>What it does</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>ArchUnit</strong></td>
            <td>Java</td>
            <td>Define layer access rules, naming conventions, dependency direction constraints as JUnit tests. Runs in CI.</td>
          </tr>
          <tr>
            <td><strong>NetArchTest</strong></td>
            <td>.NET (C#)</td>
            <td>Same concept for .NET — test that presentation layer doesn't directly reference data layer.</td>
          </tr>
          <tr>
            <td><strong>JDepend</strong></td>
            <td>Java</td>
            <td>Checks Distance from Main Sequence thresholds and other coupling metrics.</td>
          </tr>
          <tr>
            <td><strong>Netflix Chaos Monkey / Simian Army</strong></td>
            <td>Production fitness functions</td>
            <td>Chaos Monkey randomly kills production instances. Chaos Kong simulates an entire datacenter failure. Latency Monkey simulates high latency. Tests resilience in production.</td>
          </tr>
        </tbody>
      </table>

      <h4 class="subsubsection-title">Netflix's Simian Army</h4>
      <p>When Netflix moved to AWS, they lost direct control of operations. Their solution: proactively simulate failures in production to ensure systems can handle them. This is automated resilience governance:</p>
      <ul>
        <li><strong>Chaos Monkey</strong>: kills random service instances in production</li>
        <li><strong>Latency Monkey</strong>: introduces artificial latency</li>
        <li><strong>Chaos Kong</strong>: simulates entire AWS datacenter failure</li>
        <li><strong>Conformity Monkey</strong>: enforces that each service meets defined governance rules</li>
        <li><strong>Security Monkey</strong>: finds security violations and misconfigured AWS settings</li>
        <li><strong>Janitor Monkey</strong>: cleans up unused resources to reduce cost</li>
      </ul>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Traditional quality assurance tests the fire alarm in a controlled drill. Netflix's Chaos Engineering actually sets small fires in production to verify the sprinklers work. Uncomfortable, but far more reliable than hoping they work when a real fire starts.</p>
      </div>
    </div>

    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways — Chapter 6</h3>
      <ul>
        <li>Architectural characteristics are hard to measure because they're vague, variably defined, and often composite. Decompose composites and establish a ubiquitous language.</li>
        <li>Operational measures (response time, scalability) should use statistical models and percentiles (p99), not just averages.</li>
        <li><strong>Cyclomatic Complexity</strong>: objective measure of code complexity. CC = E − N + 2. CC &lt; 10 is acceptable. Cannot distinguish essential from accidental complexity.</li>
        <li>Process measures (testability, deployability) map to DORA metrics and code coverage.</li>
        <li><strong>Fitness functions</strong> = automated architectural compliance tests. The most scalable governance mechanism. Run in CI, not just manual reviews.</li>
        <li><strong>ArchUnit</strong> (Java) and <strong>NetArchTest</strong> (.NET) automate layer access rules, dependency direction, and naming conventions as unit tests.</li>
        <li>Netflix's Simian Army demonstrates production-level fitness functions: deliberately introducing chaos to verify resilience characteristics.</li>
        <li>Fitness functions must be explained to developers — governance without understanding creates resentment and workarounds.</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/sa/fundamentals/ch5" class="prev">&larr; Chapter 5</router-link>
      <router-link to="/sa/fundamentals/ch7" class="next">Chapter 7 &rarr;</router-link>
    </div>
  </div>
  </div>
</template>
<script setup></script>
