/* eslint-disable no-undef */

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "amd": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "eqeqeq": "warn",
    "indent": ["warn", 2, { "SwitchCase": 1 }],
    "multiline-ternary": ["warn", "always-multiline"]
  }
}