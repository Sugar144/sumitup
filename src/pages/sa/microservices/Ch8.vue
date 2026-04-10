<template>
  <div>
  <header class="chapter-header">
    <div class="breadcrumb">
      <router-link to="/">Study Guide</router-link> &rsaquo;
      <router-link to="/sa">SA</router-link> &rsaquo;
      <router-link to="/sa/microservices">Microservices</router-link> &rsaquo;
      Chapter 8
    </div>
    <h1>Chapter 8: External API Patterns</h1>
    <p class="chapter-desc">How to design APIs for a diverse set of external clients — the API Gateway and Backends for Frontends (BFF) patterns, reactive composition, and GraphQL.</p>
    <div class="stats-bar">
      <span class="stat-badge">3 Client Types Analysed</span>
      <span class="stat-badge">2 Core Patterns</span>
      <span class="stat-badge">6 Edge Functions</span>
      <span class="stat-badge">3 Gateway Responsibilities</span>
    </div>
  </header>

  <div class="page-container">

    <div class="toc">
      <h2>Table of Contents</h2>
      <ol>
        <li class="toc-section">
          <a href="#s8-1">8.1 External API Design Issues</a>
          <ol>
            <li><a href="#s8-1-1">8.1.1 API design issues for the FTGO mobile client</a></li>
            <li><a href="#s8-1-2">8.1.2 API design issues for other clients</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s8-2">8.2 The API Gateway Pattern</a>
          <ol>
            <li><a href="#s8-2-1">8.2.1 Overview: what an API gateway does</a></li>
            <li><a href="#s8-2-2">8.2.2 Benefits and drawbacks</a></li>
            <li><a href="#s8-2-3">8.2.3 Backends for Frontends (BFF) pattern</a></li>
            <li><a href="#s8-2-4">8.2.4 Design issues</a></li>
          </ol>
        </li>
        <li class="toc-section">
          <a href="#s8-3">8.3 Implementing an API Gateway</a>
          <ol>
            <li><a href="#s8-3-1">8.3.1 Off-the-shelf products</a></li>
            <li><a href="#s8-3-2">8.3.2 Building a custom gateway</a></li>
            <li><a href="#s8-3-3">8.3.3 GraphQL-based gateway</a></li>
          </ol>
        </li>
        <li class="toc-section"><a href="#takeaways">Key Takeaways</a></li>
      </ol>
    </div>

    <!-- ============================================================ -->
    <!-- 8.1 External API Design Issues -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s8-1">8.1 External API Design Issues</h2>

    <div class="content-section">
      <p>When an application uses a microservice architecture, there is no longer a single API — each service has its own. This creates a fundamental question: should external clients (mobile apps, browsers, third-party apps) call services directly?</p>

      <div class="info-box warning-box">
        <p><strong>Direct service access is almost always the wrong choice</strong> for clients outside the firewall. It forces clients to make multiple requests, leaks internal architecture, and may use protocols unsuitable for external use.</p>
      </div>

      <h3 class="subsection-title" id="s8-1-1">8.1.1 API design issues for the FTGO mobile client</h3>
      <p>Consider the FTGO mobile app's "View Order" screen. In a monolith, one API call returns everything. In microservices, the same information is spread across four services:</p>

      <table class="comparison-table">
        <thead><tr><th>Service</th><th>Data it provides for "View Order"</th></tr></thead>
        <tbody>
          <tr><td><strong>Order Service</strong></td><td>Basic order information and status</td></tr>
          <tr><td><strong>Kitchen Service</strong></td><td>Status from the restaurant's perspective, estimated pickup time</td></tr>
          <tr><td><strong>Delivery Service</strong></td><td>Delivery status, current location, ETA</td></tr>
          <tr><td><strong>Accounting Service</strong></td><td>Payment status</td></tr>
        </tbody>
      </table>

      <p>If the mobile app calls all four services directly, it becomes a <em>chatty API</em>, with three critical problems:</p>
      <ul>
        <li><strong>Poor UX:</strong> Multiple round trips over a high-latency mobile network (100x worse than LAN). Battery drains faster. Users wait longer.</li>
        <li><strong>Lack of encapsulation:</strong> Mobile apps are slow to update (App Store approval). Any change to a service API requires a mobile app update — possibly breaking older versions still in use.</li>
        <li><strong>Client-unfriendly protocols:</strong> Services may use gRPC, AMQP, or other protocols that are either not firewall-friendly or not natively supported by mobile SDKs.</li>
      </ul>

      <div class="info-box analogy-box">
        <p><strong>Analogy:</strong> Ordering at a restaurant by calling the kitchen, the waiter station, the bar, and the cashier separately — each as a different phone call over a slow connection. A much better experience is to call one number (the maître d') who coordinates everything and gives you a single answer.</p>
      </div>

      <h3 class="subsection-title" id="s8-1-2">8.1.2 API design issues for other clients</h3>

      <table class="comparison-table">
        <thead><tr><th>Client type</th><th>Network</th><th>Direct access feasible?</th><th>Main concern</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Server-side web app</strong></td>
            <td>Internal LAN (fast)</td>
            <td>Yes — inside the firewall</td>
            <td>Close collaboration with backend teams; easy to keep in sync</td>
          </tr>
          <tr>
            <td><strong>Browser JavaScript (SPA)</strong></td>
            <td>Internet</td>
            <td>Problematic</td>
            <td>Desktop UIs compose more services than mobile; same latency issues</td>
          </tr>
          <tr>
            <td><strong>Third-party applications</strong></td>
            <td>Internet</td>
            <td>No</td>
            <td>Cannot force API upgrades. Must maintain older versions indefinitely. Exposing internal service APIs to third parties is untenable.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ============================================================ -->
    <!-- 8.2 The API Gateway Pattern -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s8-2">8.2 The API Gateway Pattern</h2>

    <div class="content-section">

      <div class="pattern-summary">
        <h4>Pattern: API Gateway</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A service that is the single entry point for all API requests from external clients into the application.</span></div>
        <div class="ps-row"><span class="ps-label">Like:</span> <span>A Facade pattern in object-oriented design — encapsulates the internal architecture and provides a unified external API.</span></div>
        <div class="ps-row"><span class="ps-label">Responsible for:</span> <span>Request routing, API composition, protocol translation, and optionally edge functions (auth, rate limiting, caching).</span></div>
      </div>

      <h3 class="subsection-title" id="s8-2-1">8.2.1 Overview: what an API gateway does</h3>

      <table class="comparison-table">
        <thead><tr><th>Responsibility</th><th>Description</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Request Routing</strong></td>
            <td>Consults a routing map (HTTP method + path → service URL) and reverse-proxies requests to the correct service. Similar to NGINX reverse proxy.</td>
          </tr>
          <tr>
            <td><strong>API Composition</strong></td>
            <td>For complex operations, invokes multiple services and aggregates results into a single response. The mobile client makes one <code>getOrderDetails()</code> call — the gateway calls Order, Kitchen, Delivery, and Accounting in parallel and combines the results.</td>
          </tr>
          <tr>
            <td><strong>Protocol Translation</strong></td>
            <td>Exposes a RESTful API externally while internally routing to services that use gRPC, AMQP, or other protocols.</td>
          </tr>
          <tr>
            <td><strong>Client-Specific API</strong></td>
            <td>Different clients need different data. The gateway can provide a tailor-made API for each client type (mobile, web, third-party).</td>
          </tr>
        </tbody>
      </table>

      <h4 class="subsubsection-title">Edge functions</h4>
      <p>The API gateway can also implement <strong>edge functions</strong> — request-processing functions at the application's perimeter:</p>
      <ul>
        <li><strong>Authentication</strong> — verifies identity before requests reach services</li>
        <li><strong>Authorization</strong> — verifies permission to perform an operation</li>
        <li><strong>Rate limiting</strong> — limits requests per second per client</li>
        <li><strong>Caching</strong> — reduces backend load for repeated queries</li>
        <li><strong>Metrics collection</strong> — for billing and analytics</li>
        <li><strong>Request logging</strong> — for debugging and auditing</li>
      </ul>

      <div class="info-box note-box">
        <p><strong>Architecture:</strong> The API gateway has a <strong>layered modular architecture</strong>. An <em>API layer</em> contains independent API modules (one per client type: Mobile API, Browser API, Public API). A <em>Common layer</em> implements shared functionality like authentication.</p>
      </div>

      <h4 class="subsubsection-title">Ownership model</h4>
      <p>Rather than a centralized "API gateway team" (an SOA ESB anti-pattern), Netflix pioneered a better model: <strong>each client team owns their API module</strong>. The API gateway team only owns the Common layer and operational infrastructure. This preserves microservice autonomy.</p>

      <h3 class="subsection-title" id="s8-2-2">8.2.2 Benefits and drawbacks</h3>

      <table class="comparison-table">
        <thead><tr><th>Benefits</th><th>Drawbacks</th></tr></thead>
        <tbody>
          <tr>
            <td>Encapsulates internal architecture — clients don't know which services exist</td>
            <td>Risk of becoming a development bottleneck if poorly governed</td>
          </tr>
          <tr>
            <td>Reduces round trips — single request per client operation</td>
            <td>Adds an extra network hop, increasing latency slightly</td>
          </tr>
          <tr>
            <td>Client-specific APIs — each client type gets the data it needs</td>
            <td>Must be highly available — it's a single point of failure for external API access</td>
          </tr>
          <tr>
            <td>Simplifies client code — no API composition logic in the client</td>
            <td>Requires careful design to avoid resembling a monolithic "God Gateway"</td>
          </tr>
        </tbody>
      </table>

      <h3 class="subsection-title" id="s8-2-3">8.2.3 Backends for Frontends (BFF) pattern</h3>

      <div class="pattern-summary">
        <h4>Pattern: Backends for Frontends (BFF)</h4>
        <div class="ps-row"><span class="ps-label">What:</span> <span>A separate API gateway for each type of client — each API module becomes its own standalone gateway.</span></div>
        <div class="ps-row"><span class="ps-label">Who:</span> <span>Each BFF is developed and operated by the client team. "If you build it, you own it."</span></div>
        <div class="ps-row"><span class="ps-label">Example:</span> <span>Separate gateways for: Mobile Consumer, Mobile Courier, Browser, and Public API.</span></div>
        <div class="ps-row"><span class="ps-label">Pioneered by:</span> <span>Phil Calçado and colleagues at SoundCloud.</span></div>
      </div>

      <p>BFF takes the ownership model to its logical conclusion. Instead of multiple modules within one gateway, each client has its own independently deployed service. Benefits: clear ownership, independent deployability, no shared risk between client teams. Drawback: more services to operate.</p>

      <h3 class="subsection-title" id="s8-2-4">8.2.4 Design issues</h3>
      <p>Key challenges when designing an API gateway:</p>
      <ul>
        <li><strong>Performance and scalability:</strong> The gateway handles all external traffic. It must be horizontally scalable and use non-blocking I/O for reactive composition.</li>
        <li><strong>Reactive programming for API composition:</strong> When composing multiple services, make calls concurrently using reactive patterns (RxJava, Project Reactor). This minimizes total latency.</li>
        <li><strong>Partial failure:</strong> What happens if one service in a composition call fails? Use Circuit Breaker to fail fast and return partial data or a default value.</li>
        <li><strong>Service discovery:</strong> The gateway must know where each service instance is. Integrates with client-side or server-side service discovery.</li>
      </ul>
    </div>

    <!-- ============================================================ -->
    <!-- 8.3 Implementing an API Gateway -->
    <!-- ============================================================ -->
    <h2 class="section-title" id="s8-3">8.3 Implementing an API Gateway</h2>

    <div class="content-section">
      <h3 class="subsection-title" id="s8-3-1">8.3.1 Off-the-shelf products and services</h3>
      <p>Many teams use an existing API gateway product rather than building one from scratch:</p>

      <table class="comparison-table">
        <thead><tr><th>Product/Service</th><th>Type</th><th>Key strength</th></tr></thead>
        <tbody>
          <tr><td><strong>AWS API Gateway</strong></td><td>Cloud (managed)</td><td>Deep AWS integration, serverless support, minimal ops overhead</td></tr>
          <tr><td><strong>Kong</strong></td><td>Open-source / SaaS</td><td>Plugin ecosystem, Lua extensions, high performance (built on NGINX)</td></tr>
          <tr><td><strong>Traefik</strong></td><td>Open-source</td><td>Kubernetes-native, automatic service discovery, simple configuration</td></tr>
          <tr><td><strong>Netflix Zuul 1/2</strong></td><td>Open-source</td><td>Battle-tested at Netflix scale. Zuul 2 uses non-blocking I/O.</td></tr>
        </tbody>
      </table>

      <div class="info-box note-box">
        <p><strong>Off-the-shelf limitation:</strong> Pre-built gateways are excellent for request routing and standard edge functions, but often provide limited support for custom API composition logic. When you need complex aggregation, a custom gateway component is necessary.</p>
      </div>

      <h3 class="subsection-title" id="s8-3-2">8.3.2 Building a custom gateway</h3>
      <p>For complex API composition, you build your own gateway using a framework like <strong>Spring Cloud Gateway</strong> (non-blocking, reactive, built on Spring WebFlux + Project Reactor).</p>

      <p>A custom gateway handler follows this pattern:</p>
      <ol>
        <li>Authenticate the request (via JWT or session token)</li>
        <li>Dispatch concurrent calls to multiple backend services</li>
        <li>Aggregate responses using reactive combinators (<code>Mono.zip()</code>, <code>Flux.merge()</code>)</li>
        <li>Transform the combined result into the client-specific response shape</li>
        <li>Handle partial failures with Circuit Breaker — return sensible defaults if a service is down</li>
      </ol>

      <h3 class="subsection-title" id="s8-3-3">8.3.3 GraphQL-based gateway</h3>
      <p><strong>GraphQL</strong> is an alternative to REST for implementing an API gateway. Instead of REST endpoints, it exposes a <em>typed schema</em> that clients can query flexibly.</p>

      <table class="comparison-table">
        <thead><tr><th>Aspect</th><th>REST Gateway</th><th>GraphQL Gateway</th></tr></thead>
        <tbody>
          <tr>
            <td><strong>Query flexibility</strong></td>
            <td>Client receives fixed fields per endpoint</td>
            <td>Client specifies exactly which fields to return — reduces over-fetching and under-fetching</td>
          </tr>
          <tr>
            <td><strong>Schema</strong></td>
            <td>Implicit (defined by each endpoint)</td>
            <td>Explicit typed schema (SDL). Self-documenting.</td>
          </tr>
          <tr>
            <td><strong>Composition</strong></td>
            <td>Gateway code aggregates manually</td>
            <td>Resolvers per field — GraphQL runtime calls only the resolvers needed for the query</td>
          </tr>
          <tr>
            <td><strong>Tooling</strong></td>
            <td>Swagger/OpenAPI</td>
            <td>GraphiQL, Apollo Studio — rich introspection and playground</td>
          </tr>
          <tr>
            <td><strong>Best for</strong></td>
            <td>Simple, well-defined client requirements</td>
            <td>Many clients with varying data needs (mobile vs desktop vs third-party)</td>
          </tr>
        </tbody>
      </table>

      <p>In the FTGO example, a GraphQL gateway implements a <code>Query.order(orderId)</code> field with <strong>resolvers</strong> that call Order Service, Kitchen Service, Delivery Service, and Accounting Service. The client's query specifies exactly which fields it needs, and the resolver framework only fetches what's requested.</p>

      <div class="info-box analogy-box">
        <p><strong>Analogy — REST vs GraphQL gateway:</strong> A REST API gateway is like a fixed-price menu — you get the set meal. A GraphQL gateway is like ordering à la carte — you specify exactly what you want and the kitchen only prepares those dishes. Neither is universally better; it depends on your clients' needs.</p>
      </div>
    </div>

    <!-- Key Takeaways -->
    <div class="takeaways" id="takeaways">
      <h3>Key Takeaways — Chapter 8</h3>
      <ul>
        <li>In a microservice architecture, clients should <strong>not call services directly</strong> (especially from outside the firewall) — it causes chatty APIs, leaks internal architecture, and creates protocol incompatibilities.</li>
        <li>The <strong>API Gateway</strong> is the single entry point for all external API calls. It handles request routing, API composition, and protocol translation.</li>
        <li>An API gateway can also implement <strong>edge functions</strong>: authentication, authorization, rate limiting, caching, metrics, and logging.</li>
        <li>The gateway has a <strong>layered modular architecture</strong>: an API layer with per-client modules, and a Common layer for shared concerns.</li>
        <li>Benefits: encapsulation, fewer round trips, client-specific APIs. Drawbacks: single point of failure, potential bottleneck if poorly governed.</li>
        <li>The <strong>Backends for Frontends (BFF)</strong> pattern takes it further — a separate, independently deployed gateway per client type, each owned by its client team.</li>
        <li>Performance: the gateway must use <strong>reactive/non-blocking I/O</strong> for API composition to make concurrent backend calls efficiently.</li>
        <li>Options: off-the-shelf (AWS API Gateway, Kong, Traefik) for routing and edge functions; custom framework (Spring Cloud Gateway) for complex composition logic.</li>
        <li><strong>GraphQL</strong> is a powerful alternative for flexible, client-driven queries with rich schema introspection, especially when different clients need different subsets of data.</li>
      </ul>
    </div>

    <div class="chapter-nav">
      <router-link to="/sa/microservices/ch7" class="prev">&larr; Chapter 7</router-link>
      <router-link to="/sa/microservices" class="next">Book Index &rarr;</router-link>
    </div>

  </div>
  </div>
</template>

<script setup></script>
