const http = require("http");
const app = require("./app");
const { log } = require("./utils/utils");
const config = require("./utils/config");

const { port } = config;

const server = http.Server(app);

// Create an http listener for our express app.
server.listen(port, () => {
  log(
    "info",
    `process ${process.pid} listening on port ${port}, Press Ctrl-C to stop.`
  );
});
