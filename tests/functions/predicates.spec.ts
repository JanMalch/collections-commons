import {
  strictEqual,
  strictEqualOrNullish,
  lenientEqual,
  jsonEqual,
  isIterable,
} from '../../src';

describe('strictEqual', () => {
  it('should work', () => {
    expect(strictEqual(0, 0)).toBe(true);
    expect(strictEqual(null, null)).toBe(true);
    expect(strictEqual(null, undefined)).toBe(false);
    expect(strictEqual(Number.NaN, Number.NaN)).toBe(false);
    expect(strictEqual<any>(0, '0')).toBe(false);
    expect(strictEqual<any>(0, '')).toBe(false);
    expect(strictEqual<any>(1, 0)).toBe(false);
  });
});

describe('strictEqualOrNullish', () => {
  it('should work', () => {
    expect(strictEqualOrNullish(0, 0)).toBe(true);
    expect(strictEqualOrNullish(null, null)).toBe(true);
    expect(strictEqualOrNullish(null, undefined)).toBe(true);
    expect(strictEqualOrNullish(Number.NaN, Number.NaN)).toBe(false);
    expect(strictEqualOrNullish<any>(0, '0')).toBe(false);
    expect(strictEqualOrNullish<any>(0, '')).toBe(false);
    expect(strictEqualOrNullish<any>(1, 0)).toBe(false);
  });
});

describe('lenientEqual', () => {
  it('should work', () => {
    expect(lenientEqual(0, 0)).toBe(true);
    expect(lenientEqual(null, null)).toBe(true);
    expect(lenientEqual(null, undefined)).toBe(true);
    expect(lenientEqual(Number.NaN, Number.NaN)).toBe(false);
    expect(lenientEqual<any>(0, '0')).toBe(true);
    expect(lenientEqual<any>(0, '')).toBe(true);
    expect(lenientEqual<any>(1, 0)).toBe(false);
  });
});

describe('jsonEqual', () => {
  it('should work', () => {
    expect(jsonEqual({ a: 0 }, { a: 0 })).toBe(true);
    expect(jsonEqual({ a: 0 }, { A: 0 })).toBe(false);
  });
});

describe('isIterable', () => {
  it('should return for iterables', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable('Hello')).toBe(true);
  });
  it('should return false for non-iterables', () => {
    expect(isIterable({ a: 0 })).toBe(false);
    expect(isIterable(false)).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable(5)).toBe(false);
    expect(isIterable(new Date())).toBe(false);
  });
});
