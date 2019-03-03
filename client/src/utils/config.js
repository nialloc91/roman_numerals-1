const { REACT_APP_ENV } = process.env;

const development = {
  env: REACT_APP_ENV,
  apiAddress: "http://localhost:3001"
};

const staging = {
  ...development
};

const production = {
  ...staging
};

const config = {
  staging,
  production
}[REACT_APP_ENV];

export default config || development;
