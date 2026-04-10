# Chapter 8: External API Patterns
## Key Concept Extraction — Microservices Patterns (Richardson)

---

## Core Patterns

| Pattern | Definition |
|---------|------------|
| **API Gateway** | A service that is the single entry point for all external API requests. Handles routing, composition, protocol translation. |
| **Backends for Frontends (BFF)** | A separate API gateway per client type, each owned by its client team. |

---

## 8.1 Direct Service Access Drawbacks

| Problem | Description |
|---------|-------------|
| Chatty API | Multiple round trips over high-latency internet/mobile networks. Poor UX, battery drain. |
| Lack of encapsulation | Clients know about internal service structure. Hard to evolve services without breaking clients. |
| Client-unfriendly protocols | Services may use gRPC or AMQP — not firewall-friendly or mobile-compatible. |
| Third-party API instability | Cannot force third-party developers to upgrade. Must maintain old APIs indefinitely. |

---

## 8.2 API Gateway Responsibilities

| Responsibility | Description |
|----------------|-------------|
| **Request Routing** | Routing map (HTTP method + path → service URL). Like a reverse proxy (NGINX). |
| **API Composition** | Calls multiple services, aggregates results into single response. Reduces round trips. |
| **Protocol Translation** | REST external API → gRPC/AMQP internal services. |
| **Client-Specific API** | Different API modules per client type (mobile, browser, third-party). |

---

## 8.2 Edge Functions

| Function | Description |
|----------|-------------|
| Authentication | Verify identity before requests reach services |
| Authorization | Verify permission for specific operations |
| Rate limiting | Limit requests per second per client |
| Caching | Reduce backend load for repeated queries |
| Metrics collection | Billing and analytics |
| Request logging | Debugging and auditing |

---

## 8.2 API Gateway Architecture

| Layer | Components |
|-------|------------|
| API Layer | Mobile API module, Browser API module, Public API module — one per client type |
| Common Layer | Authentication, rate limiting, metrics — shared by all API modules |

**Ownership model:** Each client team owns their API module. API gateway team owns Common layer + operations. Enables autonomous teams without centralized bottleneck.

---

## 8.2.3 Backends for Frontends (BFF)

| Aspect | Description |
|--------|-------------|
| Definition | Each API module becomes its own standalone, independently deployed gateway |
| Ownership | Each client team owns AND operates their own gateway |
| Origin | Pioneered by Phil Calçado at SoundCloud |
| Benefit | Clear ownership, independent deployability, team autonomy |
| Drawback | More services to operate |

---

## 8.2.4 Design Issues

| Issue | Recommendation |
|-------|---------------|
| Performance | Non-blocking I/O. Horizontal scalability. |
| Reactive composition | Make concurrent backend calls using RxJava/Project Reactor. Total time = max(individual times). |
| Partial failure | Circuit Breaker — fail fast, return partial data or sensible defaults. |
| Service discovery | Client-side or server-side discovery for routing. |

---

## 8.3 Implementation Options

| Option | Examples | Best for |
|--------|----------|----------|
| Off-the-shelf | AWS API Gateway, Kong, Traefik, Netflix Zuul | Standard routing, edge functions, minimal custom logic |
| Custom framework | Spring Cloud Gateway (reactive, non-blocking) | Complex API composition with custom aggregation logic |
| GraphQL gateway | Apollo Server + resolvers | Clients with varying data needs; flexible field-level querying |

---

## REST vs GraphQL Gateway

| Aspect | REST | GraphQL |
|--------|------|---------|
| Query flexibility | Fixed fields per endpoint | Client specifies exact fields needed |
| Schema | Implicit (per endpoint) | Explicit typed SDL — self-documenting |
| Composition | Custom code per operation | Resolver per field — runtime selects needed resolvers |
| Over/under-fetching | Common problem | Eliminated by design |
| Tooling | Swagger/OpenAPI | GraphiQL, Apollo Studio |
