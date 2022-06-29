import { lazyLookup } from '../../src';

describe('lazyLookup', () => {
  it('should work', () => {
    const fn = jest.fn((num: number) => num.toString());
    const memoFn = lazyLookup(fn);
    expect(memoFn(0)).toEqual('0'); // call #1
    expect(memoFn(0)).toEqual('0');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(memoFn(1)).toEqual('1'); // call #2
    expect(memoFn(0)).toEqual('0');
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
