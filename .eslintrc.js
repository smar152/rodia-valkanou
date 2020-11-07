// based on https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46
module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "no-unused-vars": 0,
    "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc.js file as source
  },
};
