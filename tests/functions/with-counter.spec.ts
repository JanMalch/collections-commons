import { sum, withCounter } from '../../src';

describe('withCounter', () => {
  it('should work', () => {
    const sumOfEvenIndices = sum(
      new Set([1, 2, 3, 4]),
      withCounter((v, i) => (i % 2 === 0 ? v : 0))
    );
    expect(sumOfEvenIndices).toBe(1 + 3);
  });
});
