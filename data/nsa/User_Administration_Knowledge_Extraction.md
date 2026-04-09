# User Administration — Knowledge Extraction

**Source:** *User administration* — FUOC/UOC NSA Module

---

## 1. User Environment Design

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 1 | User-Centred Design | Principle | The IT system exists to serve users. Design decisions should prioritise user productivity and ease of use. |
| 2 | User Profiles | Framework | Categorise users by needs (power users, standard users, guests, administrators). Different profiles get different permissions and software. |
| 3 | User Onboarding | Process | Creating accounts, assigning permissions, configuring workstations, providing training. Should be standardised and documented. |

## 2. Access Control

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 4 | AAA Model | Framework | **Authentication** (who are you?), **Authorisation** (what can you do?), **Accounting** (what did you do?). Foundation of access control. |
| 5 | Authentication | Definition | Verifying a user's identity. Methods: passwords, biometrics, smart cards, MFA (multi-factor authentication). |
| 6 | Authorisation | Definition | Determining what resources an authenticated user can access and what actions they can perform. |
| 7 | Accounting | Definition | Tracking and logging user activities for auditing, billing, and security monitoring. |
| 8 | ACL (Access Control List) | Technology | A list of permissions attached to a resource, specifying which users/groups have what access (read, write, execute). |
| 9 | Access Matrix | Model | A table mapping users (rows) to resources (columns) with permitted operations in each cell. Theoretical model; ACLs and capabilities are implementations. |
| 10 | SSO (Single Sign-On) | Technology | Users authenticate once and gain access to multiple systems without re-entering credentials. Reduces password fatigue. Examples: LDAP, OAuth, SAML. |
| 11 | Principle of Least Privilege | Principle | Users should receive only the minimum permissions necessary to perform their job. Limits damage from accidental or malicious actions. |

## 3. IT System Design Patterns

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 12 | Centralised Management | Pattern | All configuration and policies managed from a central server (e.g., Active Directory, LDAP). Ensures consistency. |
| 13 | Group Policies | Technology | Rules applied to groups of users/computers. Define desktop settings, security policies, software installation. |
| 14 | Naming Conventions | Best Practice | Standardised rules for naming user accounts, machines, shared resources. Enables predictability and automation. |

## 4. Application Distribution

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 15 | Local Installation | Pattern | Software installed directly on each workstation. Full performance but hard to maintain and update at scale. |
| 16 | Remote/Centralised Installation | Pattern | Software served from a central server or deployed remotely. Easier management, consistent versions. |
| 17 | Thin Client | Pattern | Workstation with minimal software — most processing and applications run on the server. Low maintenance, dependent on network. |

## 5. Server & Workstation Design

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 18 | Server Design Considerations | Framework | Disk partitions (system, data, apps), identifying bottlenecks (CPU, RAM, I/O, network), capacity planning. |
| 19 | Base Image / Disk Imaging | Technology | A pre-configured workstation template. Clone it to deploy identical configurations quickly. Tools: Clonezilla, MDT, SCCM. |
| 20 | Standard Workstation Configuration | Best Practice | Define a baseline: OS, office suite, communications, security tools. All workstations start from this standard. |

## 6. Maintenance

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 21 | Preventive Maintenance | Strategy | Regular scheduled tasks: updates, patches, disk cleanup, hardware checks. Prevents problems before they occur. |
| 22 | Corrective Maintenance | Strategy | Fixing problems after they happen: replacing failed hardware, resolving software errors, restoring from backup. |
| 23 | Update Management | Process | Systematic testing and deployment of OS/software patches. Balance security (patch fast) vs stability (test first). |

## 7. User Training & Help Desk

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 24 | User Training | Process | Teaching users to use IT tools effectively and follow security policies. Reduces support tickets and security incidents. |
| 25 | Help Desk / Service Desk | Service | Centralised point of contact for user issues. Ticketing system tracks requests. Tiered support: L1 (basic), L2 (technical), L3 (specialist). |
| 26 | Knowledge Base | Tool | Documented solutions to common problems. Empowers users for self-service. Reduces repetitive support requests. |
