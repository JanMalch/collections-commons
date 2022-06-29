import { Bag, toRecord } from '../../../src';

describe('toRecord', () => {
  it('should create an record from a map', () => {
    const input = new Map([
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
    ]);
    expect(toRecord(input)).toEqual({
      0: 'a',
      1: 'b',
      2: 'c',
    });
  });
  it('should create an record from an array', () => {
    const input: Array<[number, string]> = [
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
    ];
    expect(toRecord(input)).toEqual({
      0: 'a',
      1: 'b',
      2: 'c',
    });
  });
  it('should create an record based on any given iterable', () => {
    const input = new Bag<string>();
    input.add('a').add('b', 2).add('c', 3);
    expect(toRecord(input)).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
  it('should throw when passing an iterable with illegal key types', () => {
    const input = new Map([[new Date(), 'a']]);
    expect(() => toRecord(input as any)).toThrow();
  });
});
