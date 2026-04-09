<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb"><router-link to="/">Study Guide</router-link> &rsaquo; <router-link to="/sa">SA</router-link> &rsaquo; <router-link to="/sa/microservices">Microservices</router-link> &rsaquo; Chapter 1</div>
    <h1>Chapter 1: Escaping Monolithic Hell</h1>
    <p class="chapter-desc">Why monolithic applications become painful at scale, how the microservice architecture helps, and the pattern language that guides adoption.</p>
    <div class="stats-bar">
      <span class="stat-badge">73 Concepts</span>
      <span class="stat-badge">42 Patterns</span>
      <span class="stat-badge">11 Definitions</span>
      <span class="stat-badge">7 Problems</span>
      <span class="stat-badge">5 Tradeoffs</span>
      <span class="stat-badge">7 Principles</span>
      <span class="stat-badge">1 Technology</span>
    </div>
  </header>

  <div class="page-container">

    <!-- Table of Contents -->
    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li class="toc-section">
          <a href="#s1-1">1.1 The slow march toward monolithic hell</a>
          <ol>
            <li><a href="#s1-1-1">The architecture of the FTGO application</a></li>
            <li><a href="#s1-1-2">The benefits of the monolithic architecture</a></li>
            <li><a href="#s1-1-3">Living in monolithic hell</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s1-2">1.2 Why this book is relevant to you</a>
        </li>
        <li class="toc-section">
          <a href="#s1-3">1.3 What you'll learn in this book</a>
        </li>
        <li class="toc-section">
          <a href="#s1-4">1.4 Microservice architecture to the rescue</a>
          <ol>
            <li><a href="#s1-4-1">Scale cube and microservices</a></li>
            <li><a href="#s1-4-2">Microservices as a form of modularity</a></li>
            <li><a href="#s1-4-3">Each service has its own database</a></li>
            <li><a href="#s1-4-4">The FTGO microservice architecture</a></li>
            <li><a href="#s1-4-5">Comparing the microservice architecture and SOA</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s1-5">1.5 Benefits and drawbacks of the microservice architecture</a>
          <ol>
            <li><a href="#s1-5-1">Benefits of the microservice architecture</a></li>
            <li><a href="#s1-5-2">Drawbacks of the microservice architecture</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s1-6">1.6 The Microservice architecture pattern language</a>
          <ol>
            <li><a href="#s1-6-1">Microservice architecture is not a silver bullet</a></li>
            <li><a href="#s1-6-2">Patterns and pattern languages</a></li>
            <li><a href="#s1-6-3">Overview of the Microservice architecture pattern language</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s1-7">1.7 Beyond microservices: Process and organization</a>
          <ol>
            <li><a href="#s1-7-1">Software development and delivery organization</a></li>
            <li><a href="#s1-7-2">Software development and delivery process</a></li>
            <li><a href="#s1-7-3">The human side of adopting microservices</a></li>
          </ol>
        </li>
      </ol>
    </div>

    <!-- ============================================================ -->
    <!-- 1.1 The slow march toward monolithic hell -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-1">1.1 The slow march toward monolithic hell</h2>

    <div class="content-section">
      <p>Many successful applications start as a single, unified codebase. Over time, this codebase grows large and hard to manage. This section explains how that happens.</p>

      <!-- 1.1.1 -->
      <h3 class="subsection-title" id="s1-1-1">The architecture of the FTGO application</h3>
      <p>FTGO is an online food-delivery platform. It began as a monolithic application — one deployable unit containing all the business logic. The server-side code handles REST API requests, web pages, and integration with external services such as payment and messaging.</p>
      <p>At its core, the FTGO monolith has a hexagonal architecture. Business logic sits in the center, surrounded by adapters that connect it to the outside world (databases, message brokers, REST clients).</p>

      <div class="pattern-summary">
        <h4>Monolithic Architecture</h4>
        <div class="ps-row"><span class="ps-label">Structure:</span> <span>All functionality lives inside a single deployable unit.</span></div>
        <div class="ps-row"><span class="ps-label">Example:</span> <span>One WAR file that contains order management, delivery, billing, and restaurant logic together.</span></div>
      </div>

      <!-- 1.1.2 -->
      <h3 class="subsection-title" id="s1-1-2">The benefits of the monolithic architecture</h3>
      <p>When an application is small, the monolithic architecture has clear advantages:</p>
      <ul>
        <li><strong>Simple to develop</strong> — IDEs and tools work well with one codebase.</li>
        <li><strong>Easy to test</strong> — you can write end-to-end tests that cover the whole application.</li>
        <li><strong>Easy to deploy</strong> — copy one file to a server.</li>
        <li><strong>Easy to scale horizontally</strong> — run multiple copies behind a load balancer.</li>
      </ul>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> Startups should begin with a monolithic architecture. It lets you move fast when the codebase is still small and the team is still learning the domain.</p>
      </div>

      <!-- 1.1.3 -->
      <h3 class="subsection-title" id="s1-1-3">Living in monolithic hell</h3>
      <p>As the application grows over months and years, the codebase becomes very large. Development slows down. Teams step on each other's code. Deployments become risky. The application becomes difficult to understand, and fixing a bug in one area can break something in another. This state is called <strong>monolithic hell</strong>.</p>

      <div class="info-box warning-box">
        <p><strong>Problem — Monolithic Hell:</strong> The codebase is too large for any one person to understand. Building, testing, and deploying takes too long. Scaling is limited because all modules share the same resources, even if only one module needs more power.</p>
      </div>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Think of a small restaurant where one chef cooks everything. It works when there are few orders. But if the restaurant gets hundreds of orders per hour, one chef cannot scale — you need a team of specialized cooks, each handling a different part of the menu.</p>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- 1.2 Why this book is relevant to you -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-2">1.2 Why this book is relevant to you</h2>

    <div class="content-section">
      <p>Whether you are a developer, architect, CTO, or VP of Engineering, monolithic hell is a problem you will likely face. This book provides a structured approach — a pattern language — to adopt the microservice architecture successfully.</p>
      <p>Even if you are already working with microservices, the patterns help you solve recurring design problems in communication, data management, and deployment.</p>
    </div>

    <!-- ============================================================ -->
    <!-- 1.3 What you'll learn in this book -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-3">1.3 What you'll learn in this book</h2>

    <div class="content-section">
      <p>The book covers a broad set of topics needed to design, build, and operate microservices:</p>
      <ul>
        <li>How to decompose an application into services (by business capability or DDD subdomain).</li>
        <li>How services communicate using messaging or remote procedure invocation (REST, gRPC).</li>
        <li>How to manage data consistency across services with Sagas.</li>
        <li>How to query data spread across services using API Composition and CQRS.</li>
        <li>Deployment, observability, testing, and security patterns.</li>
      </ul>
    </div>

    <!-- ============================================================ -->
    <!-- 1.4 Microservice architecture to the rescue -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-4">1.4 Microservice architecture to the rescue</h2>

    <div class="content-section">
      <p>The microservice architecture structures an application as a set of small, loosely coupled services. Each service is independently deployable and focuses on one business capability.</p>

      <div class="info-box note-box">
        <p><strong>Core decision:</strong> Monolithic Architecture and Microservice Architecture are alternatives. Monolithic hell is the problem that motivates the move to microservices.</p>
      </div>

      <!-- 1.4.1 Scale cube and microservices -->
      <h3 class="subsection-title" id="s1-4-1">Scale cube and microservices</h3>
      <p>The <strong>Scale Cube</strong> is a three-dimensional model for scaling applications. Each axis represents a different strategy.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Axis</th>
            <th>Strategy</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>X-axis</strong></td>
            <td>Horizontal cloning</td>
            <td>Run multiple identical copies of the application behind a load balancer. Improves capacity but does not reduce complexity.</td>
          </tr>
          <tr>
            <td><strong>Y-axis</strong></td>
            <td>Functional decomposition</td>
            <td>Split the application into separate services by function. This is what defines the microservice architecture.</td>
          </tr>
          <tr>
            <td><strong>Z-axis</strong></td>
            <td>Data partitioning</td>
            <td>Each instance handles a subset of data (e.g., by customer ID). Complements X and Y axes.</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box key-point-box">
        <p><strong>Key point:</strong> Y-axis scaling (functional decomposition) is the axis that defines microservices. X-axis scaling helps with load but does not reduce code complexity. Z-axis scaling helps partition data across instances.</p>
      </div>

      <!-- 1.4.2 Microservices as a form of modularity -->
      <h3 class="subsection-title" id="s1-4-2">Microservices as a form of modularity</h3>
      <p>In a monolith, modularity is enforced by code conventions and packages — but nothing stops a developer from breaking module boundaries. In a microservice architecture, each service is a separate process with a well-defined API. You cannot accidentally call another service's internal code. This hard boundary enforces modularity much better than code conventions alone.</p>

      <!-- 1.4.3 Each service has its own database -->
      <h3 class="subsection-title" id="s1-4-3">Each service has its own database</h3>
      <p>In a microservice architecture, each service owns its private database. No other service can access it directly. This is the <strong>Database per Service</strong> pattern.</p>

      <div class="pattern-summary">
        <h4>Database per Service</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Each service has its own private datastore.</span></div>
        <div class="ps-row"><span class="ps-label">Why:</span> <span>Prevents tight coupling through shared tables. Services can evolve their schemas independently.</span></div>
        <div class="ps-row"><span class="ps-label">Tradeoff:</span> <span>Querying and maintaining consistency across services becomes harder.</span></div>
      </div>

      <p>Because services cannot share a database, you need new patterns for consistency and querying:</p>
      <ul>
        <li><strong>Saga</strong> — coordinates multi-service transactions without a shared database transaction.</li>
        <li><strong>API Composition</strong> — gathers data from multiple services to answer a query.</li>
        <li><strong>CQRS</strong> (Command Query Responsibility Segregation) — maintains a read-optimized view of data from multiple services.</li>
      </ul>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Imagine each department in a company keeps its own filing cabinet. No department can open another's cabinet. If you need information from two departments, you must ask each one separately and combine the answers yourself.</p>
      </div>

      <!-- 1.4.4 The FTGO microservice architecture -->
      <h3 class="subsection-title" id="s1-4-4">The FTGO microservice architecture</h3>
      <p>In the microservice version of FTGO, the monolith is split into services such as Order Service, Restaurant Service, Delivery Service, Kitchen Service, and Accounting Service. Each service owns its data and exposes a REST or messaging API.</p>
      <p>An <strong>API Gateway</strong> sits in front of all services. It routes requests from external clients (web, mobile) to the correct internal service. A related pattern, <strong>Backend for Frontend (BFF)</strong>, creates a separate gateway for each client type.</p>

      <!-- 1.4.5 Comparing microservice architecture and SOA -->
      <h3 class="subsection-title" id="s1-4-5">Comparing the microservice architecture and SOA</h3>
      <p>Service-Oriented Architecture (SOA) and the microservice architecture both organize applications into services. However, they differ in important ways.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>SOA</th>
            <th>Microservices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Communication</td>
            <td>Heavy protocols (ESB, WS-*, SOAP)</td>
            <td>Lightweight protocols (REST, gRPC, messaging)</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>Shared global database is common</td>
            <td>Database per service</td>
          </tr>
          <tr>
            <td>Service size</td>
            <td>Larger, enterprise-wide services</td>
            <td>Smaller services focused on one capability</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ============================================================ -->
    <!-- 1.5 Benefits and drawbacks -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-5">1.5 Benefits and drawbacks of the microservice architecture</h2>

    <div class="content-section">

      <!-- 1.5.1 Benefits -->
      <h3 class="subsection-title" id="s1-5-1">Benefits of the microservice architecture</h3>
      <ul>
        <li><strong>Enables continuous delivery and deployment</strong> — each service can be deployed independently, reducing risk and speeding up releases.</li>
        <li><strong>Small, maintainable services</strong> — each service is small enough for one team to understand and own.</li>
        <li><strong>Independently scalable</strong> — you only scale the services that need more resources, instead of scaling the entire application.</li>
        <li><strong>Better fault isolation</strong> — a failure in one service does not crash the whole system (when combined with patterns like Circuit Breaker).</li>
        <li><strong>Technology flexibility</strong> — different services can use different languages, frameworks, or databases.</li>
        <li><strong>Enables autonomous teams</strong> — teams can develop, test, and deploy their services without waiting for other teams.</li>
      </ul>

      <!-- 1.5.2 Drawbacks -->
      <h3 class="subsection-title" id="s1-5-2">Drawbacks of the microservice architecture</h3>
      <ul>
        <li><strong>Distributed system complexity</strong> — inter-service communication, partial failures, and network latency add complexity.</li>
        <li><strong>Data consistency challenges</strong> — without a single database transaction, you must use patterns like Saga.</li>
        <li><strong>Harder to query across services</strong> — joins across databases are not possible; you need API Composition or CQRS.</li>
        <li><strong>Deployment complexity</strong> — managing many services requires automation and tooling.</li>
        <li><strong>Risk of distributed monolith</strong> — if services are incorrectly decomposed or tightly coupled, you get the worst of both worlds.</li>
      </ul>

      <div class="info-box warning-box">
        <p><strong>Warning — Distributed Monolith:</strong> If you decompose incorrectly, services stay tightly coupled. Every change still requires coordinating multiple teams and deploying multiple services together. This is called a distributed monolith, and it is worse than a regular monolith because you also pay the cost of network communication.</p>
      </div>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Monolithic</th>
            <th>Microservices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simplicity</td>
            <td>Simple to develop, test, deploy early on</td>
            <td>More moving parts from the start</td>
          </tr>
          <tr>
            <td>Scalability</td>
            <td>Scale entire app (wasteful)</td>
            <td>Scale individual services</td>
          </tr>
          <tr>
            <td>Team autonomy</td>
            <td>Teams share the same codebase</td>
            <td>Teams own independent services</td>
          </tr>
          <tr>
            <td>Data consistency</td>
            <td>Single database transaction (ACID)</td>
            <td>Requires Sagas for cross-service consistency</td>
          </tr>
          <tr>
            <td>Deployment</td>
            <td>One unit to deploy</td>
            <td>Many units; needs automation</td>
          </tr>
          <tr>
            <td>Fault isolation</td>
            <td>One bug can crash everything</td>
            <td>Failures contained per service</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ============================================================ -->
    <!-- 1.6 The Microservice architecture pattern language -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-6">1.6 The Microservice architecture pattern language</h2>

    <div class="content-section">
      <p>A pattern language is an organized collection of patterns that solve related problems. The microservice architecture pattern language groups patterns into several categories that cover the full lifecycle of building microservices.</p>

      <!-- 1.6.1 Not a silver bullet -->
      <h3 class="subsection-title" id="s1-6-1">Microservice architecture is not a silver bullet</h3>
      <p>Microservices solve many problems, but they also introduce new ones. There is no single correct answer — every decision involves tradeoffs. The pattern language helps you navigate these tradeoffs by showing which patterns solve which problems, and what new issues each pattern may create.</p>

      <div class="info-box note-box">
        <p><strong>Adoption timing dilemma:</strong> Startups should begin with a monolith because the overhead of microservices is too high for a small team. As the application and team grow, you migrate to microservices when the pain of the monolith outweighs the cost of migration.</p>
      </div>

      <!-- 1.6.2 Patterns and pattern languages -->
      <h3 class="subsection-title" id="s1-6-2">Patterns and pattern languages</h3>
      <p>A <strong>pattern</strong> is a reusable solution to a problem that occurs in a specific context. Each pattern describes the problem, the forces at play, the solution, and the resulting consequences (both positive and negative). Patterns often have relationships: one pattern's consequence may be a problem solved by another pattern.</p>
      <p>A <strong>pattern language</strong> groups these patterns into a structured collection. It shows alternatives, dependencies, and chains of patterns that work together.</p>

      <!-- 1.6.3 Overview of the pattern language -->
      <h3 class="subsection-title" id="s1-6-3">Overview of the Microservice architecture pattern language</h3>
      <p>The pattern language is organized into the following groups. Each group addresses a different concern.</p>

      <!-- Decomposition -->
      <h4 class="subsubsection-title">Decomposition patterns</h4>
      <p>These patterns decide how to split an application into services.</p>

      <div class="pattern-summary">
        <h4>Decompose by Business Capability</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Define services around what the business does (e.g., Order Management, Delivery).</span></div>
        <div class="ps-row"><span class="ps-label">Alternative:</span> <span>Decompose by Subdomain (DDD).</span></div>
      </div>

      <div class="pattern-summary">
        <h4>Decompose by Subdomain (DDD)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Use Domain-Driven Design to identify bounded contexts and create one service per subdomain.</span></div>
        <div class="ps-row"><span class="ps-label">Alternative:</span> <span>Decompose by Business Capability.</span></div>
      </div>

      <!-- Communication -->
      <h4 class="subsubsection-title">Communication patterns</h4>
      <p>Services need to talk to each other. Two main styles exist.</p>

      <div class="pattern-summary">
        <h4>Messaging</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Services communicate asynchronously by sending messages through a broker.</span></div>
        <div class="ps-row"><span class="ps-label">Alternative:</span> <span>Remote Procedure Invocation (REST / gRPC).</span></div>
      </div>

      <div class="pattern-summary">
        <h4>Remote Procedure Invocation (REST / gRPC)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A service calls another service's API directly and waits for a response.</span></div>
        <div class="ps-row"><span class="ps-label">Alternative:</span> <span>Messaging.</span></div>
      </div>

      <p>Reliable communication also requires handling failures:</p>

      <div class="pattern-summary">
        <h4>Circuit Breaker</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Stops calling a failing service after repeated failures. Prevents cascading failures across the system.</span></div>
        <div class="ps-row"><span class="ps-label">Why:</span> <span>Provides reliability for inter-service calls.</span></div>
      </div>

      <!-- Service Discovery -->
      <h4 class="subsubsection-title">Service discovery patterns</h4>
      <p>Services need to find each other on the network. A <strong>Service Registry</strong> is a database of service instance locations.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Pattern</th>
            <th>How it works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client-side Discovery</td>
            <td>The client queries the Service Registry and picks an instance to call.</td>
          </tr>
          <tr>
            <td>Server-side Discovery</td>
            <td>The client sends a request to a router/load balancer, which queries the registry.</td>
          </tr>
          <tr>
            <td>Self Registration</td>
            <td>Each service registers itself in the registry on startup.</td>
          </tr>
          <tr>
            <td>3rd-party Registration</td>
            <td>An external component (e.g., deployment platform) registers services in the registry.</td>
          </tr>
        </tbody>
      </table>

      <!-- External API -->
      <h4 class="subsubsection-title">External API patterns</h4>

      <div class="pattern-summary">
        <h4>API Gateway / Backend for Frontend (BFF)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A single entry point that routes external API requests to internal services.</span></div>
        <div class="ps-row"><span class="ps-label">BFF variant:</span> <span>A separate gateway per client type (web, mobile, third-party).</span></div>
      </div>

      <!-- Data Management -->
      <h4 class="subsubsection-title">Data management patterns</h4>
      <p>The Database per Service pattern creates challenges for consistency and querying.</p>

      <div class="pattern-summary">
        <h4>Saga</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A sequence of local transactions across services, with compensating transactions to undo work on failure.</span></div>
        <div class="ps-row"><span class="ps-label">Supports:</span> <span>Domain Event, Event Sourcing, Aggregate.</span></div>
      </div>

      <div class="pattern-summary">
        <h4>API Composition</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A query that calls multiple services and combines the results in memory.</span></div>
        <div class="ps-row"><span class="ps-label">Alternative:</span> <span>CQRS.</span></div>
      </div>

      <div class="pattern-summary">
        <h4>CQRS (Command Query Responsibility Segregation)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Maintain a separate read-optimized view that is updated by subscribing to domain events from multiple services.</span></div>
        <div class="ps-row"><span class="ps-label">Alternative:</span> <span>API Composition.</span></div>
      </div>

      <p>To reliably publish domain events from a service's database, you can use:</p>

      <div class="pattern-summary">
        <h4>Transactional Outbox</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>Store events in an outbox table as part of the database transaction, then publish them asynchronously.</span></div>
        <div class="ps-row"><span class="ps-label">Publishing:</span> <span>Polling Publisher (polls the outbox table) or Transaction Log Tailing (reads the database's transaction log).</span></div>
      </div>

      <!-- Deployment -->
      <h4 class="subsubsection-title">Deployment patterns</h4>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>Pattern</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single Service per Host</td>
            <td>Each service instance runs on its own host. Variants: Service-per-Container, Service-per-VM.</td>
          </tr>
          <tr>
            <td>Multiple Services per Host</td>
            <td>Several service instances share one host. Simpler but less isolated.</td>
          </tr>
          <tr>
            <td>Serverless Deployment</td>
            <td>Deploy service code as functions. The platform handles scaling and infrastructure.</td>
          </tr>
          <tr>
            <td>Service Deployment Platform</td>
            <td>An automated platform (e.g., Kubernetes) that manages all deployment patterns.</td>
          </tr>
        </tbody>
      </table>

      <!-- Observability -->
      <h4 class="subsubsection-title">Observability patterns</h4>
      <p>With many services running, you need visibility into the system. Observability patterns work together to give you that visibility.</p>
      <ul>
        <li><strong>Health Check API</strong> — each service exposes an endpoint that reports if it is healthy.</li>
        <li><strong>Log Aggregation</strong> — collect logs from all services into a central, searchable store.</li>
        <li><strong>Distributed Tracing</strong> — track a request as it flows through multiple services.</li>
        <li><strong>Exception Tracking</strong> — automatically capture and group exceptions across services.</li>
        <li><strong>Application Metrics</strong> — collect and monitor service-level metrics (latency, error rate, throughput).</li>
        <li><strong>Audit Logging</strong> — record user actions for compliance and debugging.</li>
      </ul>

      <!-- Testing -->
      <h4 class="subsubsection-title">Testing patterns</h4>
      <p>Testing microservices in isolation requires new approaches.</p>
      <ul>
        <li><strong>Consumer-driven Contract Test</strong> — the consumer defines the contract, and the provider verifies it passes.</li>
        <li><strong>Consumer-side Contract Test</strong> — tests that verify a consumer correctly uses a provider's API.</li>
        <li><strong>Service Component Test</strong> — tests a service in isolation using stubs for its dependencies.</li>
      </ul>

      <!-- Cross-cutting & Security -->
      <h4 class="subsubsection-title">Cross-cutting and security patterns</h4>

      <div class="pattern-summary">
        <h4>Microservice Chassis</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A framework or template that bundles common concerns so each service doesn't reinvent them.</span></div>
        <div class="ps-row"><span class="ps-label">Bundles:</span> <span>Externalized Configuration, Observability, Service Discovery.</span></div>
      </div>

      <div class="pattern-summary">
        <h4>Access Token (JWT)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>The API Gateway authenticates the user and passes a signed token (e.g., JWT) to internal services.</span></div>
        <div class="ps-row"><span class="ps-label">Why:</span> <span>Services can verify the user's identity and permissions without contacting the auth service again.</span></div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- 1.7 Beyond microservices: Process and organization -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s1-7">1.7 Beyond microservices: Process and organization</h2>

    <div class="content-section">
      <p>Technology alone is not enough. You also need the right team structure and development process to succeed with microservices.</p>

      <!-- 1.7.1 -->
      <h3 class="subsection-title" id="s1-7-1">Software development and delivery organization</h3>
      <p>The microservice architecture enables small, autonomous teams — often called <strong>two-pizza teams</strong> (small enough to be fed by two pizzas). Each team owns one or more services end-to-end: development, testing, deployment, and operations.</p>

      <div class="info-box key-point-box">
        <p><strong>Conway's Law:</strong> Organizations tend to produce systems whose structure mirrors their communication structure. If your teams are organized by technology layer (frontend team, backend team, DBA team), your services will likely be coupled in the same way.</p>
      </div>

      <div class="info-box note-box">
        <p><strong>Reverse Conway Maneuver:</strong> Instead of letting your organization shape the architecture, reorganize your teams to mirror the service architecture you want. Structure teams around business capabilities so that each team can own its service independently.</p>
      </div>

      <!-- 1.7.2 -->
      <h3 class="subsection-title" id="s1-7-2">Software development and delivery process</h3>
      <p>Autonomous two-pizza teams enable <strong>Continuous Delivery and Deployment</strong> (DevOps). Each team can push changes to production frequently and safely because they only deploy their own service, not the entire application.</p>

      <div class="info-box key-point-box">
        <p><strong>Key chain:</strong> Microservice Architecture enables autonomous Two-Pizza Teams, which in turn enable Continuous Delivery/Deployment.</p>
      </div>

      <!-- 1.7.3 -->
      <h3 class="subsection-title" id="s1-7-3">The human side of adopting microservices</h3>
      <p>Moving from a monolith to microservices is not just a technical change — it is also an emotional transition for people. Roles change, responsibilities shift, and familiar workflows disappear.</p>

      <div class="pattern-summary">
        <h4>Bridges' Transition Model</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A framework for managing the human emotions during organizational change.</span></div>
        <div class="ps-row"><span class="ps-label">Phases:</span> <span>Ending (letting go of the old), Neutral Zone (uncertainty), New Beginning (embracing the new way).</span></div>
        <div class="ps-row"><span class="ps-label">Why:</span> <span>Ignoring the emotional side of adoption leads to resistance and failure, even if the technology is right.</span></div>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- Concept Relationship Map -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="concept-map">Concept relationship map</h2>

    <div class="content-section">
      <p>The concepts in this chapter connect to each other in chains. Understanding these relationships helps you see how patterns depend on one another.</p>

      <div class="info-box note-box">
        <p><strong>Core chain:</strong> Monolithic Hell (problem) &rarr; motivates Microservice Architecture (solution) &rarr; requires Database per Service &rarr; creates need for Saga (consistency), API Composition / CQRS (querying).</p>
      </div>

      <div class="info-box note-box">
        <p><strong>Event chain:</strong> Domain Event + Event Sourcing + Aggregate support Saga execution. Transactional Outbox ensures reliable event publishing via Polling Publisher or Transaction Log Tailing.</p>
      </div>

      <div class="info-box note-box">
        <p><strong>Organization chain:</strong> Microservice Architecture &rarr; enables Two-Pizza Teams &rarr; enables Continuous Delivery/Deployment. Conway's Law + Reverse Conway Maneuver: your org structure should mirror your service architecture.</p>
      </div>
    </div>

    <!-- ============================================================ -->
    <!-- Key Takeaways -->
    <!-- ============================================================ -->
    <div class="takeaways">
      <h3>Key Takeaways — Chapter 1</h3>
      <ul>
        <li>A monolithic architecture works well for small applications but leads to <strong>monolithic hell</strong> as the codebase and team grow.</li>
        <li>The <strong>microservice architecture</strong> structures an app as a set of small, independently deployable services — each with its own database.</li>
        <li>The <strong>Scale Cube</strong> shows three scaling strategies: X-axis (cloning), Y-axis (functional decomposition = microservices), and Z-axis (data partitioning).</li>
        <li>Microservices bring benefits (autonomy, independent scaling, fault isolation) but also drawbacks (distributed complexity, data consistency challenges, risk of a distributed monolith).</li>
        <li>The <strong>pattern language</strong> organizes 42+ patterns into groups: decomposition, communication, discovery, data management, deployment, observability, testing, cross-cutting, and security.</li>
        <li>Key data patterns: Database per Service &rarr; Saga for consistency, API Composition / CQRS for querying, Transactional Outbox for reliable events.</li>
        <li>Startups should <strong>start monolithic</strong> and migrate to microservices when the pain of the monolith exceeds the cost of migration.</li>
        <li><strong>Conway's Law</strong> says org structure shapes system design. The <strong>Reverse Conway Maneuver</strong> reorganizes teams to match the desired architecture.</li>
        <li>Autonomous <strong>two-pizza teams</strong> own services end-to-end, enabling <strong>Continuous Delivery/Deployment</strong>.</li>
        <li>Use <strong>Bridges' Transition Model</strong> to manage the human side of change during microservice adoption.</li>
      </ul>
    </div>

    <!-- Chapter Navigation -->
    <div class="chapter-nav">
      <router-link to="/sa/microservices" class="prev">&larr; Home</router-link>
      <router-link to="/sa/microservices/ch2" class="next">Chapter 2 &rarr;</router-link>
    </div>

  </div>
  </div>
</template>

<script setup></script>
