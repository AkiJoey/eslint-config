const config = require('../.eslintrc')

describe('eslint-config', () => {
  it('correct export', () => {
    const index = require('..')
    expect(index).toEqual(config)
  })
})
