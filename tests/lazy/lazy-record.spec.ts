import { lazyRecord } from '../../src';

describe('lazyRecord', () => {
  it('should work', () => {
    let i = 0;
    const fn = jest.fn(() => ++i);
    const record1 = lazyRecord({
      a: 'A',
      b: fn,
    });
    expect(i).toBe(0);
    expect(record1.a).toBe('A');
    expect(record1.b).toBe(1);
    expect(i).toBe(1);
    expect(record1.b).toBe(1);
    expect(i).toBe(1);
    expect(fn).toHaveBeenCalledTimes(1);

    const record2 = lazyRecord({
      a: 'AA',
      b: fn,
    });
    expect(record2).toEqual({
      a: 'AA',
      b: 2,
    });
    expect(record2).toEqual({
      a: 'AA',
      b: 2,
    });
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
