# Server Administration — Knowledge Extraction

**Source:** *Server administration* — FUOC/UOC NSA Module

---

## 1. Server Fundamentals

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 1 | Server Definition | Definition | A physical or virtual system that makes its own resources available to other client computers. Operates 24/7/365, designed for continuous uptime, concurrent requests, and data security. |
| 2 | Server Configurations | Framework | **1:1** (one server, one operation), **1:N** (one server, multiple operations via virtualisation), **N:1** (multiple servers, one operation for HA), **N:N** (heterogeneous enterprise systems). |

## 2. Functional Server Types

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 3 | Domain Server | Component | Defines the IT infrastructure domain. Enables user/permission structuring, management and security policies. |
| 4 | File Server | Component | Shares files among users/groups. Provides personal storage space. Facilitates mobility and backup. |
| 5 | Application Server | Component | Shares applications among users. Typically three-tier: front end (browser), middle tier (app server), back end (database). |
| 6 | Database Server | Component | Hosts relational DBMSs or NoSQL databases. |
| 7 | Backup Server | Component | Manages all backup operations, policies, rotations, and reports. |
| 8 | Mail Server | Component | Sends and receives messages. |
| 9 | Security Server | Component | Vulnerability analysis, SIEM, firewalls, proxies — guarantees IT infrastructure security. |
| 10 | ML/DL Server | Component | Trains artificial intelligence models. Modern addition requiring GPU/FPGA acceleration. |

## 3. Physical Server Hardware

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 11 | RAM | Component | Large amounts needed, especially for virtualisation and DBMSs. Faster RAM = better performance. |
| 12 | CPU | Component | Multiple sockets with multiple cores. Total processing units = Sockets × Cores. |
| 13 | GPU | Component | No longer just for graphics — now used for AI/ML training and blockchain. Connected via PCIe (256 Gb/s) or NVLink 5.0 (1,800 Gb/s). |
| 14 | FPGA | Component | Field-programmable gate arrays for specialised, fast processing. CAPI 2.0 provides direct RAM access without CPU. |
| 15 | Motherboard | Component | Must be high quality for fast transmission. Internal bus uses PCIe channels (currently G6). Multiple sockets and built-in interfaces. |
| 16 | I/O Cards | Component | Communication with peripherals, storage, and network. Ethernet (1–100 GbE), Fibre Channel (8–128 Gbps). |
| 17 | Blade Systems | Design | Each server is a blade in a shared enclosure (blade centre) providing power, cooling, and network access. |

## 4. Virtual Servers

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 18 | Virtualisation | Technology | One physical computer runs multiple OS/services independently and securely via a hypervisor. |
| 19 | Type 1 Hypervisor (Bare-metal) | Technology | Virtualiser interacts directly with hardware. No host OS needed. Examples: VMware ESXi, Hyper-V (standalone). |
| 20 | Type 2 Hypervisor (Application-based) | Technology | Shares resources through a host OS. Examples: VirtualBox, VMware Workstation. |
| 21 | Virtualisation Benefits | Advantage | Fewer physical servers, less space, lower energy, resource sharing, centralised management. |

## 5. Containers

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 22 | Container | Technology | Standard unit packaging code and dependencies. Shares OS kernel with host but has own filesystem, CPU, RAM allocation. Lighter than VMs. |
| 23 | POD | Structure | One or more containers sharing storage with a unique address. Smallest deployable unit in Kubernetes. |
| 24 | Deployment | Structure | Manages POD replicas for high availability and scaling. |
| 25 | CSI (Container Storage Interface) | Technology | Specialised container for disk access management. |
| 26 | Docker | Technology | Container orchestrator for lifecycle management (build, ship, run). |
| 27 | Kubernetes | Technology | Container automation manager for deployment, scaling, and management of containerised applications. |

## 6. Cloud Servers

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 28 | IaaS (Infrastructure as a Service) | Service Model | Physical infrastructure / bare metal. You manage everything from OS upward. |
| 29 | PaaS (Platform as a Service) | Service Model | Configurable platform. You manage applications; provider manages infrastructure. |
| 30 | SaaS (Software as a Service) | Service Model | Ready-to-use software. Provider manages everything. Examples: Gmail, Office 365, Salesforce. |
| 31 | BaaS (Backup as a Service) | Service Model | Cloud-based backup management. |
| 32 | SECaaS (Security as a Service) | Service Model | Cloud-based security services. |

## 7. Server Aggregation

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 33 | Load Balancing | Pattern | Divides total workload between two or more systems. Hardware, software, or combination. Supports asymmetric distribution. |
| 34 | Cluster | Pattern | Group of interconnected computers working as a single system. Cost-effective, scalable, high availability. |
| 35 | HPC Cluster (High Performance) | Cluster Type | Tasks requiring massive processing power. Examples: supercomputers (El Capitan, MareNostrum). |
| 36 | HA Cluster (High Availability) | Cluster Type | Maximise uptime through failure detection and recovery. |
| 37 | HT Cluster (High Throughput) | Cluster Type | Execute maximum number of tasks in shortest time. Batch processing. |
| 38 | Grid Computing | Pattern | Combines resources from many distributed computers (not co-located) into a single supercomputer via internet. Example: SETI Project. |
| 39 | Cloud Management Platforms | Technology | OpenStack, AWS, Azure, GCP. Manage storage, communications, physical/virtual servers, and containers. |

## 8. Storage

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 40 | NTFS | File System | Windows. Small sector/cluster size, FS security, compression, encryption. Highly robust. |
| 41 | ext4 | File System | Most common Linux FS. Volumes up to 1 EB, journaling, backward compatibility. |
| 42 | XFS | File System | High-performance 64-bit Linux journaling FS. Good for large files and parallel I/O. |
| 43 | ZFS | File System | Cross-platform. Combined volume manager + FS. Built-in integrity checking, compression, snapshots. |
| 44 | RAID 0 (Striping) | Storage | Data split across disks for speed. No redundancy. One failure loses all data. Min 2 disks. |
| 45 | RAID 1 (Mirroring) | Storage | Data duplicated on two disks. 50% storage efficiency. Survives 1 failure. Min 2 disks. |
| 46 | RAID 5 (Parity) | Storage | Data + parity distributed across disks. Survives 1 failure. Good read performance. Min 3 disks. |
| 47 | RAID 6 (Double Parity) | Storage | Like RAID 5 with two parity blocks. Survives 2 simultaneous failures. Min 4 disks. |
| 48 | RAID 10 (1+0) | Storage | Mirrored sets that are striped. Best performance + redundancy. Survives 1 failure per mirrored pair. Min 4 disks. |
| 49 | SAN (Storage Area Network) | Storage System | Dedicated high-speed network for servers↔storage. Fibre Channel or iSCSI. Block-level access. Best for databases. |
| 50 | NAS (Network-Attached Storage) | Storage System | Dedicated file server on the regular network. NFS, SMB/CIFS. File-level access. Best for file sharing. |
| 51 | Hyperconvergence | Storage System | Integrates compute, storage, networking into a single appliance with software-defined management. |

## 9. Backup & Security

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 52 | Backup Policy | Framework | Defines **what** to copy, **how often**, **where** to store, **how long** to retain. |
| 53 | Physical Security | Dimension | Secure server room: climate control, access control, fire suppression, UPS (Uninterruptible Power Supply). |
| 54 | Software Security | Dimension | OS hardening, regular patching, firewall configuration, intrusion detection, anti-malware. |
| 55 | High Availability | Dimension | "Five nines" (99.999%) = max ~5 minutes downtime per year. |
| 56 | Fault-tolerant System | Design | Hardware redundancy within a single server — duplicate components. Failure is transparent to users. |
| 57 | HA Cluster | Design | Multiple servers where one takes over if another fails. Brief switchover time. |
