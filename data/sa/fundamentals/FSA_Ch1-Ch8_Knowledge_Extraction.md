# Fundamentals of Software Architecture — Ch1–Ch8
## Key Concept Extraction — Richards & Ford (2nd Edition)

---

## Chapter 1: Introduction

### 4 Dimensions of Software Architecture
| Dimension | Description |
|-----------|-------------|
| Architecture Style | Named topology (microservices, layered, event-driven...) |
| Architecture Characteristics ("-ilities") | System capabilities: scalability, availability, security... |
| Logical Components | Domains, entities, workflows — the system's behavior |
| Architecture Decisions | Rules and constraints for building the system |

### 3 Laws of Software Architecture
| Law | Statement |
|-----|-----------|
| First | Everything in software architecture is a trade-off. |
| Second | Why is more important than how. |
| Third | Most decisions exist on a spectrum, not as binary choices. |

### 8 Expectations of an Architect
Make architecture decisions | Continually analyze | Keep current | Ensure compliance | Understand diverse tech | Know the business domain | Interpersonal skills | Navigate politics

---

## Chapter 2: Architectural Thinking

### Architecture vs Design Spectrum
| More Architectural | More Design |
|-------------------|-------------|
| Strategic, long-term | Tactical, short-term |
| Hard to change, significant effort | Easy to change, minimal effort |
| Significant trade-offs | Minor trade-offs |

### Knowledge Pyramid
| Level | Description |
|-------|-------------|
| Stuff you know | Deep expertise. Technical depth. Must be maintained. |
| Stuff you know you don't know | Awareness without expertise. Expand this for breadth. |
| Stuff you don't know you don't know | Largest area. Move things into middle via 20-min rule. |

### Key Concepts
- **20-Minute Rule**: 20 min/day in the morning before email, building technical breadth
- **Personal Radar**: Hold / Assess / Trial / Adopt rings for technology investment
- **Frozen Caveman Antipattern**: Applying outdated fears/experiences to current decisions
- **Trade-off Analysis**: No right/wrong answers — only trade-offs. "It depends."

---

## Chapter 3: Modularity

### Cohesion Types (best → worst)
Functional → Sequential → Communicational → Procedural → Temporal → Logical → Coincidental

### Coupling Metrics
| Metric | Direction | Notes |
|--------|-----------|-------|
| Afferent (Ca) | Incoming | How many depend on this module |
| Efferent (Ce) | Outgoing | How many this module depends on |

### Derived Metrics (Robert C. Martin)
| Metric | Formula | Zones |
|--------|---------|-------|
| Abstractness (A) | abstract / (concrete + abstract) | 0=all concrete, 1=all abstract |
| Instability (I) | Ce / (Ce + Ca) | 0=stable, 1=volatile |
| Distance from Main Sequence | \|A + I - 1\| | Zone of Uselessness (top-right), Zone of Pain (bottom-left) |

### Connascence Types
**Static**: Name > Type > Meaning > Position > Algorithm
**Dynamic**: Execution > Timing > Values > Identity

Rule: Prefer weaker forms. Minimize strong connascence across module boundaries.

---

## Chapter 4: Architectural Characteristics

### 3-Criteria Definition
1. Specifies a nondomain design consideration
2. Influences some structural aspect of the design
3. Critical or important to application success

### Categories
| Category | Examples |
|----------|---------|
| Operational | Availability, Performance, Scalability, Reliability, Recoverability |
| Structural | Maintainability, Extensibility, Configurability, Portability |
| Cloud | On-demand scalability, Elasticity, Zone availability, Data residency |
| Cross-cutting | Security, Accessibility, Legal (GDPR), Privacy, Supportability |

### Key Principle
"Never strive for the best architecture; aim for the least worst architecture."

---

## Chapter 5: Identifying Characteristics

### Composite Characteristics
| Composite | Components |
|-----------|-----------|
| Agility | Modularity + Deployability + Testability |
| Reliability | Availability + Fault tolerance + Recoverability |

### Process
1. Extract from domain requirements (ask "what capabilities are needed?")
2. Identify implicit characteristics (availability, security — always needed)
3. Limit to ~7 driving characteristics
4. Collaboratively select top 3 with stakeholders

**Vasa antipattern**: Overspecifying characteristics → top-heavy, unstable architecture that sinks.

---

## Chapter 6: Measuring & Governing

### Cyclomatic Complexity
Formula: CC = E − N + 2 | CC < 10 acceptable | CC > 10 complex | CC > 20 refactor

### Fitness Functions
Automated architectural compliance tests. Run in CI. Types:
- ArchUnit (Java): layer access rules, dependency direction
- NetArchTest (.NET): same for C#
- JDepend: Distance from Main Sequence thresholds
- Netflix Simian Army: production chaos testing

---

## Chapter 7: Architecture Quantum

### Definition
Smallest independently deployable unit with: independent deployment + high functional cohesion + low external static coupling + synchronous communication within

### Coupling Types
| Type | Controllable? |
|------|--------------|
| Semantic (domain) | No |
| Implementation (architectural choices) | Yes |
| Static (service wiring) | Yes |
| Dynamic (runtime communication) | Partially |

**DDD Bounded Context**: Each context defines its own entities. No universal "Customer" class. Corresponds directly to architecture quantum.

---

## Chapter 8: Component-Based Thinking

### Logical vs Physical Architecture
- **Logical**: what the system does, how functionality is organized. No databases or services.
- **Physical**: services, databases, deployment units. Maps to an architectural style.

Always design logical first!

### Component Identification Strategies
- Actor/Action approach (use cases)
- Event storming (DDD — domain events first)
- Workflow approach (business processes)

### Entity Trap Antipattern
Mapping database entities directly to components → anemic architecture with no behavior.

### Law of Demeter (Principle of Least Knowledge)
A component should have limited knowledge of other components. More knowledge = tighter coupling. Redistribute knowledge to minimize coupling breadth.

### Coupling Types
- **Static**: compile/deploy-time dependencies (afferent/efferent). Measurable with tools.
- **Temporal**: order-of-execution dependencies. Hard to detect — look in design docs and failure conditions.
