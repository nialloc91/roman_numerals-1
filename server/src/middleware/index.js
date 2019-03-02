const client = require("./client");
const security = require("./security");

module.exports = [...client, ...security];
