import { maxBy, minBy, identity } from '../../../src';

describe('minBy', () => {
  it('should work for numbers', () => {
    expect(minBy([0, 1, 2], identity)).toEqual([0, 0]);
  });
  it('should work for anythings', () => {
    expect(minBy(['AAA', 'BB', 'C'], (str) => str.length)).toEqual(['C', 1]);
  });
  it('should return empty pair for empty iterable', () => {
    expect(minBy<string>([], (str) => str.length)).toEqual([]);
  });
});

describe('maxBy', () => {
  it('should work for numbers', () => {
    expect(maxBy([0, 1, 2], identity)).toEqual([2, 2]);
  });
  it('should work for anythings', () => {
    expect(maxBy(['AAA', 'BB', 'C'], (str) => str.length)).toEqual(['AAA', 3]);
  });
  it('should return empty pair for empty iterable', () => {
    expect(maxBy<string>([], (str) => str.length)).toEqual([]);
  });
});
