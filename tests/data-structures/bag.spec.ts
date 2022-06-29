import { Bag } from '../../src';

describe('Bag', () => {
  it('should work', () => {
    const bag = new Bag<string>();
    expect(bag.isEmpty).toBe(true);
    bag.add('A');
    expect(bag.isEmpty).toBe(false);
    bag.add('A');
    bag.add('B', 2);
    bag.add('B', 1);
    bag.addAll(['B', 'C']);
    expect(bag.toJSON()).toEqual({
      A: 2,
      B: 4,
      C: 1,
    });
    expect(bag.size).toBe(3);
    expect(Array.from(bag.keys())).toEqual(['A', 'B', 'C']);
    expect(Array.from(bag.values())).toEqual([2, 4, 1]);
    expect(Array.from(bag)).toEqual([
      ['A', 2],
      ['B', 4],
      ['C', 1],
    ]);
    const fn = jest.fn();
    bag.forEach(fn);
    expect(fn).toHaveBeenCalledTimes(3);
    expect(Array.from(bag.entries())).toEqual([
      ['A', 2],
      ['B', 4],
      ['C', 1],
    ]);
    expect(bag.sum()).toBe(7);
    expect(bag.max()).toEqual(['B', 4]);
    expect(bag.min()).toEqual(['C', 1]);
    bag.delete('A');
    bag.delete('B', 3);
    bag.delete('C', 1);
    bag.delete('D', 10);
    expect(bag.toJSON()).toEqual({
      B: 1,
    });
    bag.clear();
    expect(bag.toJSON()).toEqual({});
    expect(bag.max()).toEqual([]);
    expect(bag.min()).toEqual([]);
    expect(bag.isEmpty).toBe(true);
  });
});
