import { chunkArray } from '../../../src/extensions/array/chunk';

describe('chunkArray', () => {
  it('should throw an error if chunk size is 0 or less', () => {
    expect(() => chunkArray([], 0)).toThrow();
    expect(() => chunkArray([], -1)).toThrow();
  });
  it('should return an empty array for empty array as input', () => {
    expect(chunkArray([], 3)).toEqual([]);
  });

  it('should create chunks that have the given size', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
  it('should create chunks that have the given size or less if not enough items for the last', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
    ]);
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
  });
});
