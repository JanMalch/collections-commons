import {
  areItemsEqual,
  hasSameItems,
} from '../../../src/extensions/array/predicates';

describe('areItemsEqual', () => {
  it('should return true for empty arrays', () => {
    const result = areItemsEqual([], []);
    expect(result).toBe(true);
  });
  it('should return true for identical arrays', () => {
    const arr = [0, 1, 2];
    const result = areItemsEqual(arr, arr);
    expect(result).toBe(true);
  });
  it('should return false for arrays with different lengths', () => {
    const result = areItemsEqual([0], []);
    expect(result).toBe(false);
  });
  it('should return true for arrays with equal items', () => {
    const result = areItemsEqual([0, 1, 2], [0, 1, 2]);
    expect(result).toBe(true);
  });
  it('should return true for arrays with equal items based on custom predicate', () => {
    const result = areItemsEqual(['a', 'b'], ['A', 'B'], {
      predicate: (a, b) => a.length === b.length,
    });
    expect(result).toBe(true);
  });
  it('should return true for arrays with equal items based on custom selector', () => {
    const result = areItemsEqual(['a', 'b'], ['A', 'B'], {
      selector: (x) => x.toLowerCase(),
    });
    expect(result).toBe(true);
  });
});

describe('hasSameItems', () => {
  it('should return true for empty arrays', () => {
    const result = hasSameItems([], []);
    expect(result).toBe(true);
  });
  it('should return true for identical arrays', () => {
    const arr = [0, 1, 2];
    const result = hasSameItems(arr, arr);
    expect(result).toBe(true);
  });
  it('should return false for arrays with different lengths', () => {
    const result = hasSameItems([0], []);
    expect(result).toBe(false);
  });
  it('should return true for arrays with equal items', () => {
    const result = hasSameItems([0, 1, 2], [0, 1, 2]);
    expect(result).toBe(true);
  });
  it('should return true for arrays with equal items based on custom predicate', () => {
    const result = hasSameItems(['a', 'b'], ['A', 'B'], {
      predicate: (a, b) => a.length === b.length,
    });
    expect(result).toBe(true);
  });
  it('should return true for arrays with equal items based on custom selector', () => {
    const result = hasSameItems(['a', 'b'], ['A', 'B'], {
      selector: (x) => x.toLowerCase(),
    });
    expect(result).toBe(true);
  });
  it('should return true for arrays with equal items in any order', () => {
    const result = hasSameItems(['c', 'a', 'b'], ['b', 'a', 'c'], {
      selector: (x) => x.toLowerCase(),
    });
    expect(result).toBe(true);
  });
});
