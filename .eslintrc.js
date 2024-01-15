// .eslintrc.js

const extend = config =>
  ['standard', 'standard-jsx', config, 'prettier'].flat().filter(Boolean)

module.exports = {
  extends: extend(),
  env: {
    node: true,
    jest: true
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: extend('standard-with-typescript')
    }
  ]
}
