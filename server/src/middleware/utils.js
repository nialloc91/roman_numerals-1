const { log } = require("../utils/utils");

const logger = (req, res, next) => {
  const { path, body, query, method } = req;

  log("info", {
    path,
    body,
    query,
    method
  });

  next();
};

module.exports = [logger];
