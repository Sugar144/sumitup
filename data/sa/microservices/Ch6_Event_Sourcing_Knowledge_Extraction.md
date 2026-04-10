# Chapter 6: Developing Business Logic with Event Sourcing
## Key Concept Extraction — Microservices Patterns (Richardson)

---

## Core Pattern

| Pattern | Definition |
|---------|------------|
| **Event Sourcing** | Persist an aggregate as a sequence of domain events that represent state changes. The current state is reconstructed by replaying all events. |

---

## 6.1 Traditional Persistence Problems

| Problem | Description |
|---------|-------------|
| Object-Relational impedance mismatch | Conceptual mismatch between relational tables and graph-structured domain models |
| Lack of aggregate history | Only current state is stored; previous states are lost |
| Audit logging is tedious | Manual audit code can diverge from business logic, creating bugs |
| Event publishing is bolted on | Developers must manually add event publishing; easy to forget |

---

## 6.1.2 Event Sourcing Mechanics

| Concept | Description |
|---------|-------------|
| Event store | Database that stores aggregates as sequences of events in an EVENTS table |
| Loading aggregate | 1. Load events from store → 2. Instantiate aggregate → 3. Replay events with apply() |
| process(Command) | Validates command, returns list of events WITHOUT modifying state. Throws exception if invalid. |
| apply(Event) | Updates aggregate state. Cannot fail — represents something that already happened. |
| Events are non-optional | Every state change must emit an event. Events must contain all data needed for the state transition. |

---

## 6.1.3–6.1.7 Additional Mechanics

| Concept | Description |
|---------|-------------|
| Optimistic locking | Event count used as version number. Prevents concurrent updates from overwriting each other. |
| Polling for event publishing | Poll EVENTS table for new rows. Use PUBLISHED column to avoid skipping events when transactions commit out of order. |
| Transaction log tailing | Read database binary log (binlog relay) — more reliable, zero skipping risk. |
| Snapshots | Periodic capture of aggregate state. Replay from snapshot instead of from the beginning. For long-lived aggregates. |
| Idempotent processing (RDBMS) | Store message ID in PROCESSED_MESSAGES table within same transaction. Detect and skip duplicates. |
| Idempotent processing (NoSQL) | Store message ID in the event itself. Or insert pseudo-event as no-op marker. |
| Upcasting | Transform old event formats to current schema on the fly during deserialization. No data migration needed. |

---

## 6.1.8–6.1.9 Benefits and Drawbacks

| Benefits | Drawbacks |
|----------|-----------|
| Reliable domain event publishing | Learning curve — different programming model |
| Complete aggregate history preserved | Querying is harder — requires CQRS (Ch7) |
| Temporal queries possible | Evolving events requires upcasting strategy |
| No ORM impedance mismatch | GDPR/deletion challenges (use crypto-shredding) |
| Direct business value (audit trail) | More complex infrastructure |

---

## 6.2 Eventuate Local Event Store

| Table | Purpose |
|-------|---------|
| events | event_id, event_type, entity_type, entity_id, event_data (JSON) |
| entities | One row per aggregate. Stores current version for optimistic locking. |
| snapshots | Aggregate state snapshots |

Publishing: binlog relay reads MySQL binary log → publishes to Kafka topics → consumers subscribe.

---

## 6.3 Sagas + Event Sourcing

| Scenario | Approach |
|----------|----------|
| Choreography-based sagas | Natural fit — events drive the saga. Aggregate emits events → other aggregates react. |
| Orchestration (RDBMS) | @Transactional — atomically update aggregate + create saga |
| Orchestration (NoSQL) | Event handler pattern — aggregate emits SagaOrchestratorRequested → handler creates saga |
| Saga as event-sourced aggregate | SagaOrchestratorCreated/Updated events. SagaCommandEvent per step. Idempotent reply handling. |
