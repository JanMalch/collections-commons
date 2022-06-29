import { joinToKey } from '../../../src';

describe('joinToKey', () => {
  const sep = String.fromCharCode(31);

  it('should work for simple inputs', () => {
    const actual = joinToKey([0, '1', true]);
    expect(actual).toBe(`0${sep}1${sep}true`);
  });
  it('should work for null and undefined', () => {
    const actual = joinToKey([0, null, true, undefined]);
    expect(actual).toBe(`0${sep}null${sep}true${sep}undefined`);
  });
  it('should work for symbols', () => {
    const actual = joinToKey([0, Symbol('A'), Symbol('B'), undefined]);
    expect(actual).toBe(`0${sep}Symbol(A)${sep}Symbol(B)${sep}undefined`);
  });
  it('should expect collision for symbols', () => {
    const firstSymbol = Symbol('B');
    const secondSymbol = Symbol('B');
    expect(firstSymbol).not.toBe(secondSymbol);
    const actualWithFirstTwice = joinToKey([
      0,
      firstSymbol,
      firstSymbol,
      undefined,
    ]);
    expect(actualWithFirstTwice).toBe(
      `0${sep}Symbol(B)${sep}Symbol(B)${sep}undefined`
    );
    const actualWithMixed = joinToKey([
      0,
      firstSymbol,
      secondSymbol,
      undefined,
    ]);
    expect(actualWithFirstTwice).toBe(actualWithMixed); // collision even though the arguments were different
  });
  it('should work for empty strings', () => {
    const actual = joinToKey([0, '', true]);
    expect(actual).toBe(`0${sep}${sep}true`);
  });
  it('should prevent collisions of empty strings and empty arrays', () => {
    const actual = joinToKey(['', []]);
    expect(actual).toBe(`${sep}[]`);
  });
  it('should work with arrays', () => {
    const actual = joinToKey([0, ['1', '2'], true]);
    expect(actual).toBe(`0${sep}[1${sep}2]${sep}true`);
  });
  it('should work with deeply nested arrays', () => {
    const actual = joinToKey([0, ['1', '2', ['3', '4']], true]);
    expect(actual).toBe(`0${sep}[1${sep}2${sep}[3${sep}4]]${sep}true`);
  });
  it('should work with any iterable', () => {
    const actual = joinToKey([
      0,
      new Map([
        [1, '2'],
        [3, '4'],
      ]),
      true,
    ]);
    expect(actual).toBe(`0${sep}[[1${sep}2]${sep}[3${sep}4]]${sep}true`);
  });
  it('should fall back to JSON.stringify for objects which have no proper string representations', () => {
    const actual = joinToKey([0, { a: 0, b: 1 }, true]);
    expect(actual).toBe(`0${sep}{"a":0,"b":1}${sep}true`);
  });
  it('should work with dates', () => {
    const actual = joinToKey([0, new Date(0), true]);
    expect(actual).toBe(`0${sep}1970-01-01T00:00:00.000Z${sep}true`);
  });
});
