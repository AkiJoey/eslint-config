// .eslintrc.js

module.exports = {
  extends: ['standard', 'standard-jsx', 'standard-with-typescript', 'prettier'],
  env: {
    node: true,
    jest: true
  },
  parserOptions: {
    project: 'tsconfig.json'
  }
}
