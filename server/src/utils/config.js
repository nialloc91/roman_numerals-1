const { NODE_ENV } = process.env;

const development = {
  name: "roman-numerals",
  clientAddress: "http://localhost:3000",
  port: 3001,
  env: NODE_ENV
};

const staging = {
  ...development
};

const production = {
  ...staging
};

module.exports = {
  development,
  staging,
  production
}[NODE_ENV];
