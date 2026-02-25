# file transport

# product request
* 1.use gtk and c to deal 
* 2.use sqlite to save local data
* 3.need build to .deb file for ubuntu and deepin

What I described is basically **a mini LAN messenger + file sharing system**, similar to **KDE Connect / AirDrop / LAN Messenger**.
I’ll design it like a real software architecture document, step-by-step.

You want:

> When one client opens, it can discover other clients online, know their IP, send text (saved to SQLite), and auto-download files to Downloads folder.

This needs **discovery + messaging + file transfer + storage + GUI**.

---

# 🧠 1) High-Level System Architecture

```
+---------------------------+
| GTK GUI                   |
|                           |
| Online Devices List        |
| Chat Window                |
| File Send Panel             |
+-------------+-------------+
              |
              v
+---------------------------+
| Core Service (C)           |
|                           |
| Discovery Module (UDP)     |
| Messaging Module (TCP)     |
| File Transfer Module (TCP) |
| SQLite Storage              |
+-------------+-------------+
              |
              v
+---------------------------+
| Linux OS / Network Stack   |
+---------------------------+
```

---

# 🌐 2) Online Client Discovery Design (Key Feature)

You want:

> Open client → see other clients online automatically.

## ✅ Use UDP Broadcast (Standard LAN method)

### Discovery Protocol Flow:

### Every client:

* Broadcasts “I am online” every 3 seconds
* Listens for other clients

---

## 🔹 UDP Broadcast Packet Format

Example JSON (simple, human-readable):

```json
{
  "type": "DISCOVER",
  "name": "PC-WuQiang",
  "ip": "192.168.1.100",
  "port": 19001
}
```

---

## 🔹 UDP Code Behavior

### On startup:

```text
Start UDP listener on port 19002
Start broadcast sender every 3 seconds
```

### When packet received:

```text
If new IP → add to online list
Update GUI list
```

---

# 💬 3) Messaging System Design (Text)

Text must be:

* Sent via TCP
* Saved in SQLite

---

## ✅ TCP Message Protocol

### Message Packet Format:

```
[TYPE=1][MSG_LEN][MSG_TEXT]
```

or JSON:

```json
{
  "type": "text",
  "from": "PC-A",
  "to": "PC-B",
  "msg": "Hello"
}
```

---

## 🔹 SQLite Chat Database Design

### Table: messages

```sql
CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender TEXT,
    receiver TEXT,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔹 Flow:

### Sender:

```
User types text → Send TCP → Save to SQLite
```

### Receiver:

```
Receive TCP → Save to SQLite → Show in GUI
```

---

# 📁 4) File Transfer System Design

You want:

> File auto-download to user Downloads directory.

---

## ✅ File Transfer Protocol (TCP)

### File Packet Structure:

```
TYPE=2
FILENAME_LEN
FILENAME
FILE_SIZE
FILE_BYTES...
```

---

## 🔹 Receiver Behavior

1. Read file metadata
2. Create file in:

```bash
~/Downloads/YourApp/
```

3. Receive file in chunks
4. Show progress bar

---

## 🧠 Auto Save Path

Use:

```c
const char* dir = g_get_user_special_dir(G_USER_DIRECTORY_DOWNLOAD);
```

GTK provides this.

---

# 🧩 5) GUI Design (GTK)

## Main Window Layout

```
-----------------------------------------
| Online Devices                          |
| [ PC-A 192.168.1.10 ]                  |
| [ PC-B 192.168.1.20 ]                  |
-----------------------------------------
| Chat Window                            |
| A: Hello                               |
| B: Hi                                  |
-----------------------------------------
| Input Box [_____________] [Send]       |
-----------------------------------------
| File: [Browse...] [Send File]           |
-----------------------------------------
```

---

# 🧵 6) Thread / Event Architecture (VERY IMPORTANT)

GTK must NOT block.

---

## Thread Model

```
Main Thread:
    GTK UI

Thread 1:
    UDP discovery listener

Thread 2:
    TCP server (epoll loop)

Thread 3:
    File sending worker
```

---

## Communication Between Threads

Use:

* GAsyncQueue
* g_idle_add()
* mutex + queue

---

# ⚙️ 7) Network Port Design

| Purpose      | Protocol | Port  |
| ------------ | -------- |-------|
| Discovery    | UDP      | 19001 |
| Message/File | TCP      | 19002 |

---

# 🛡️ 8) Security Design (Basic)

## Minimal protections:

* Reject files > 2 GB
* Save only in Downloads
* Ignore unknown UDP packets

---

# 🧠 9) Data Flow Example

## 🔹 Client A starts:

1. Sends UDP broadcast
2. Client B receives → shows A online

---

## 🔹 Client A sends text:

```
GUI → TCP send → Client B → SQLite save → GUI display
```

---

## 🔹 Client A sends file:

```
Browse file → TCP stream → Client B saves → progress bar
```

---

# 📂 10) Project Directory Structure

```
flink/
│
├── src/
│   ├── main.c
│   ├── gui.c
│   ├── discovery_udp.c
│   ├── tcp_server.c
│   ├── tcp_client.c
│   ├── protocol.c
│   ├── sqlite_db.c
│   └── file_transfer.c
│
├── ui/
│   └── main.ui
│
├── data/
│   └── messages.db
│
├── Makefile
└── README.md
```

---

# ⚡ 11) Performance Notes

### LAN speed:

* Text → instant
* File → 100MB/s on gigabit

### SQLite:

* Fine for millions of messages

---

# 🧠 12) Professional Enhancements (Future)

## 🔥 Like AirDrop:

* mDNS / Avahi discovery
* TLS encryption (OpenSSL)
* QR code pairing
* File preview
* Resume download
* NAT traversal

---

# ⚠️ Common Pitfalls

❌ Blocking recv() in GUI thread
❌ Not handling partial TCP reads
❌ No packet framing
❌ SQLite write in UI thread
❌ Trusting UDP blindly

---

# ✅ Recommended Development Plan

## Phase 1 (1–2 days)

* GTK window
* TCP send text

## Phase 2

* UDP discovery
* Online list UI

## Phase 3

* File transfer

## Phase 4

* SQLite history

---

# ❓ Next Step (I can help you deeply)

Do you want:

### Option A

👉 Full C code skeleton for UDP discovery + TCP server/client

### Option B

👉 GTK UI XML design + signal handlers

### Option C

👉 SQLite wrapper C API for chat history

### Option D

👉 High-performance epoll TCP server design

The style: production-grade system
