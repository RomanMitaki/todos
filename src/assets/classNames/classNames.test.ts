import { classNames } from './classNames'

describe('classNames', () => {
  test('should be with cls parameter only', () => {
    expect(classNames('testClass')).toBe('testClass')
  })

  test('should be with cls & additional parameters', () => {
    const expected = 'testClass one two'
    expect(classNames(
      'testClass',
      {},
      ['one', 'two']
    )).toBe(expected)
  })

  test('should be with cls mods additional (all are true) parameters', () => {
    const expected = 'testClass one two hovered scrollable'
    expect(classNames(
      'testClass',
      { hovered: true, scrollable: true },
      ['one', 'two']
    )).toBe(expected)
  })

  test('should be with cls mods additional (some false) parameters', () => {
    const expected = 'testClass one two hovered'
    expect(classNames(
      'testClass',
      { hovered: true, scrollable: false },
      ['one', 'two']
    )).toBe(expected)
  })
})
