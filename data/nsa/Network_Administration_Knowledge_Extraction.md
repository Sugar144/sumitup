# Network Administration — Knowledge Extraction

**Source:** *Network administration* — FUOC/UOC NSA Module

---

## 1. Network Fundamentals

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 1 | Network Benefits | Principle | Resource sharing, communication, centralised management, cost reduction, improved collaboration. |
| 2 | LAN (Local Area Network) | Definition | Network covering a small area (building/campus). High speed, low latency. |
| 3 | MAN (Metropolitan Area Network) | Definition | Spans a city or metropolitan area. Connects multiple LANs. |
| 4 | WAN (Wide Area Network) | Definition | Spans large geographic areas (countries/continents). Lower speed than LAN. Internet is the largest WAN. |

## 2. Physical Components — Cabling

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 5 | Twisted Pair | Technology | Copper cable with paired wires. Categories: Cat5e (1 Gbps), Cat6 (10 Gbps), Cat6a (10 Gbps at 100m). Most common in LANs. |
| 6 | Coaxial Cable | Technology | Central conductor with insulating layer and shield. Used in older networks and cable TV. Higher interference resistance than twisted pair. |
| 7 | Fibre Optic | Technology | Transmits data as light pulses. Very high bandwidth, long distances, immune to electromagnetic interference. Types: single-mode (long distance) and multi-mode (short distance). |

## 3. Physical Components — Connection & Interconnection Devices

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 8 | NIC (Network Interface Card) | Component | Hardware allowing a device to connect to a network. Each NIC has a unique MAC address. |
| 9 | Hub | Component | Layer 1 device. Broadcasts all incoming data to every port. No intelligence — causes collisions. Largely obsolete. |
| 10 | Switch | Component | Layer 2 device. Reads MAC addresses and sends data only to the destination port. Reduces collisions. Foundation of modern LANs. |
| 11 | Repeater | Component | Layer 1 device. Amplifies and regenerates signals to extend cable distance. |
| 12 | Bridge | Component | Layer 2 device. Connects two network segments. Filters traffic by MAC address. Predecessor to switches. |
| 13 | Router | Component | Layer 3 device. Routes packets between different networks using IP addresses. Connects LANs to WANs (internet). |
| 14 | Gateway | Component | Connects networks with different protocols. Translates between incompatible systems. Operates at higher layers. |
| 15 | Firewall | Component | Security device filtering traffic based on rules. Can operate at multiple layers. Protects internal networks from external threats. |

## 4. Network Topologies

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 16 | Bus Topology | Topology | All devices share a single cable. Simple but prone to collisions. A break in the cable disrupts the entire network. |
| 17 | Ring Topology | Topology | Devices connected in a circle. Data travels in one direction. A single device failure can break the ring (unless dual ring). |
| 18 | Star Topology | Topology | All devices connect to a central switch/hub. Most common today. Easy to add/remove devices. Central point is a single point of failure. |

## 5. IEEE 802.x Standards

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 19 | IEEE 802.3 (Ethernet) | Standard | Dominant wired LAN standard. CSMA/CD access method. Speeds: 10 Mbps → 400 Gbps. |
| 20 | IEEE 802.11 (WLAN/Wi-Fi) | Standard | Wireless LAN standard. Versions: a/b/g/n/ac/ax (Wi-Fi 6)/be (Wi-Fi 7). Frequencies: 2.4 GHz, 5 GHz, 6 GHz. |
| 21 | IEEE 802.15 (Bluetooth/WPAN) | Standard | Short-range wireless. Bluetooth versions 1.0–5.x. Used for peripherals, IoT, audio. |
| 22 | IEEE 802.16 (WiMAX) | Standard | Metropolitan area wireless broadband. Range up to 50 km. Alternative to DSL/cable in some regions. |
| 23 | Wi-Fi Security: WEP | Technology | Wired Equivalent Privacy. First Wi-Fi encryption. Severely broken — easily cracked. Never use. |
| 24 | Wi-Fi Security: WPA/WPA2/WPA3 | Technology | Wi-Fi Protected Access. WPA2 uses AES. WPA3 adds SAE handshake, stronger encryption, forward secrecy. Always use WPA3 when available. |

## 6. Communication Protocols (TCP/IP)

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 25 | TCP/IP Stack | Framework | Four layers: **Application** (HTTP, FTP, DNS), **Transport** (TCP, UDP), **Internet** (IP), **Network Access** (Ethernet, Wi-Fi). |
| 26 | TCP | Protocol | Transmission Control Protocol. Connection-oriented, reliable, ordered delivery. Uses three-way handshake. Higher overhead. |
| 27 | UDP | Protocol | User Datagram Protocol. Connectionless, unreliable, no ordering guarantee. Lower overhead. Used for streaming, DNS, gaming. |

## 7. IPv6

| # | Concept | Type | Description |
|---|---------|------|-------------|
| 28 | IPv6 Addressing | Technology | 128-bit addresses (vs IPv4's 32-bit). Written as 8 groups of 4 hex digits. Vastly larger address space (3.4 × 10³⁸). |
| 29 | IPSec in IPv6 | Technology | Built-in security. IPSec is mandatory in IPv6 (optional in IPv4). Provides encryption and authentication at the network layer. |
| 30 | IPv6 Mobility | Feature | Native support for mobile devices changing networks without losing connections. |
| 31 | IPv6 Self-configuration | Feature | Stateless Address Autoconfiguration (SLAAC). Devices can generate their own addresses without DHCP. |
| 32 | IPv6 Address Types | Framework | **Unicast** (one-to-one), **Multicast** (one-to-many), **Anycast** (one-to-nearest). No broadcast in IPv6. |
