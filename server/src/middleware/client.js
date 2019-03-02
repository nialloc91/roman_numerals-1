const compression = require("compression");

/**
 * @description compression compresses response bodys before being sent to the client
 */
const client = [compression()];

module.exports = client;
