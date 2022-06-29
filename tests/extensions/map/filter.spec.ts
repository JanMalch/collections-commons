import { filterMap } from '../../../src';

describe('filterMap', () => {
  it('should work with new map', () => {
    const input = new Map([
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
    ]);
    const result = filterMap(input, ([key]) => key > 1);
    expect(Array.from(result)).toEqual([[2, 'c']]);
  });

  it('should work with existing map', () => {
    const input = new Map([
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
    ]);
    const into = new Map([[0, 'aa']]);
    const result = filterMap(input, ([key]) => key > 1, into);
    expect(Array.from(result)).toEqual([
      [0, 'aa'],
      [2, 'c'],
    ]);
  });
});
