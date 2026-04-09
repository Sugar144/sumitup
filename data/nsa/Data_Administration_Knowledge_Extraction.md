# Data Administration — Knowledge Extraction

**Source:** *Data administration* — FUOC/UOC NSA Module

---

## 1. Data vs Information

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 1 | Data | Definition | Raw, unprocessed facts without context. |
| 2 | Information | Definition | Data that has been processed, organised, and given context — making it useful for decision-making. |
| 3 | Data Interaction Chain | Framework | **User → Application → OS → Hardware → Storage**. Data flows through multiple layers before reaching physical storage. |

## 2. Data Location Challenges

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 4 | Data Dispersion Problem | Problem | Data is scattered across workstations, servers, cloud, and personal devices. Finding and managing it is a major challenge. |
| 5 | Application Chart | Solution | Mapping which applications store data where — enables data discovery and governance. |
| 6 | Network Drives | Solution | Centralised storage accessible over the network. Reduces dispersion. |
| 7 | User Training | Solution | Teaching users proper data storage habits and data management policies. |

## 3. Database Servers

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 8 | Relational Database | Technology | Structured data in tables with rows/columns. SQL for querying. Enforces ACID properties. |
| 9 | NoSQL: Key-Value | Technology | Simplest model. Data stored as key-value pairs. Fast lookups. Example: Redis, DynamoDB. |
| 10 | NoSQL: Document | Technology | Data stored as documents (JSON/BSON). Flexible schema. Example: MongoDB, CouchDB. |
| 11 | NoSQL: Graph | Technology | Data modelled as nodes and relationships. Ideal for highly connected data. Example: Neo4j. |
| 12 | ACID Properties | Principle | **Atomicity** (all or nothing), **Consistency** (valid state transitions), **Isolation** (concurrent transactions don't interfere), **Durability** (committed data survives failures). |

## 4. Big Data

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 13 | Big Data — 7 Properties | Framework | **Speed** (velocity), **Variety** (multiple formats), **Value** (business insight), **Variability** (inconsistency), **Volume** (massive scale), **Accuracy** (veracity), **Visualisation** (making data understandable). |
| 14 | MapReduce | Technology | Programming model for processing large datasets: **Map** (split and process in parallel), **Reduce** (aggregate results). |
| 15 | Hadoop | Technology | Open-source framework implementing MapReduce. Includes HDFS for distributed storage. |
| 16 | Spark | Technology | In-memory processing engine. Much faster than Hadoop for iterative algorithms. Supports SQL, streaming, ML. |
| 17 | ERP | Technology | Enterprise Resource Planning. Integrates all business processes (finance, HR, supply chain) into one system. Example: SAP, Oracle. |

## 5. Cloud Data Management

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 18 | Cloud Data Security | Concern | Data stored off-premises raises questions about who can access it, encryption in transit/at rest, and jurisdictional compliance. |
| 19 | Access Control in Cloud | Solution | Role-based access, MFA, encryption keys managed by the organisation. |
| 20 | Cloud Backups | Solution | Automated backups to geographically distributed data centres. |
| 21 | Data Governance | Principle | Policies defining data ownership, quality standards, lifecycle management, and compliance. |
| 22 | DLP (Data Loss Prevention) | Technology | Tools that monitor and prevent unauthorised data exfiltration. |

## 6. Information Protection

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 23 | Network Security | Solution | Firewalls, IDS/IPS, VPNs, network segmentation. First line of defence. |
| 24 | Backup: Complete | Strategy | Full copy of all data. Longest time, most space, simplest recovery. |
| 25 | Backup: Incremental | Strategy | Copies only data changed since last backup (any type). Fast backups, slower recovery (needs chain). |
| 26 | Backup: Differential | Strategy | Copies data changed since last **complete** backup. Balance between speed and recovery simplicity. |
| 27 | Encryption | Technology | Transforms readable data into ciphertext. Protects data at rest and in transit. |

## 7. Database Security

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 28 | Confidentiality | Principle | Only authorised users can access specific data. |
| 29 | Accessibility | Principle | Data is available when needed by authorised users. |
| 30 | Integrity | Principle | Data remains accurate and unaltered by unauthorised changes. |
