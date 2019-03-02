const express = require("express");
const middleware = require("./middleware");
const config = require("./utils/config");
const { handleRomanNumeral } = require("./api/v1/manipulate");

const { clientAddress } = config;

const app = express();

app.use(...middleware);

// Do not return information on technologies used to potential hackers.
app.disable("x-powered-by");

// Add headers
app.use((req, res, next) => {
  // only allow requests from this origin
  res.setHeader("Access-Control-Allow-Origin", clientAddress);
  // Only allow this request header
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Pass to next layer of middleware
  next();
});

// RPC
app.get("/v1/manipulate/roman-numeral/:value", handleRomanNumeral);
app.get("/status", (req, res) => res.status(200).send({ isOkay: true }));

module.exports = app;
