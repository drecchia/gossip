# Gossip

**Gossip** is a hyper-parametrizable, lightweight, and independent JavaScript library for client-side event logging, auditing, and remote log delivery. It is designed to be easily integrated into any web application, providing robust mechanisms for capturing, storing, and publishing logs from the browser to a remote server.

---

## Features

- **Vanilla JS**: No dependencies, works in any modern browser.
- **Event Queueing**: Stores up to 2000 log events in localStorage with FIFO management.
- **Session & Browser Tracking**: Automatically tags logs with unique browser and tab IDs.
- **Safe Storage**: Handles localStorage/sessionStorage access errors gracefully.
- **Remote Publishing**: Batch-publishes logs to a remote endpoint with retry and locking logic.
- **Auto-Publish**: Schedule automatic log delivery at configurable intervals.
- **Customizable**: Easily extend or adapt for your own audit/logging needs.

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/drecchia/gossip.git
cd gossip
npm install
```

Build the library:

```bash
npm run build
```

The minified output will be in `dist/js/gossip-min.js`.

---

## Usage

1. **Include the script** in your HTML:

```html
<script src="dist/js/gossip-min.js"></script>
```

2. **Log an event:**

```js
Gossip.whisper({
  event: 'user_login',
  userId: 123,
  timestamp: Date.now()
});
```

3. **Auto-publish logs to your server:**

```js
Gossip.autoPublish('https://your-server.com/logs', 'POST', { Authorization: 'Bearer TOKEN' }, 30000);
```

---

## API

### `Gossip.whisper(jsonObj)`
Appends a log object to the local queue. Automatically tags with browser and tab IDs.

### `Gossip.autoPublish(url, method = 'POST', headers = {}, interval = 30000)`
Schedules automatic publishing of logs to a remote endpoint at the specified interval (ms).

### `Gossip.publish(url, method = 'POST', headers = {})`
Immediately attempts to deliver all queued logs to the remote endpoint.

---

## Development

- **Build**: `npm run build` (uses Gulp, Babel, and minification)
- **Source**: `src/js/gossip.js`
- **Gulp Tasks**: See `gulpfile.js` for available tasks (`gulp`, `gulp js`, `gulp watch`)

---

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

---

## Author

**Danilo T. Recchia**  
[danilo.recchia@vortus.solutions](mailto:danilo.recchia@vortus.solutions)

---

## Repository

[https://github.com/drecchia/gossip](https://github.com/drecchia/gossip)
