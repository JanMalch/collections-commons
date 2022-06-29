import { lazy } from '../../src';

describe('lazy', () => {
  it('should work', () => {
    const fn = jest.fn(() => '1907');
    const lazyFn = lazy(fn);
    expect(lazyFn()).toBe('1907'); // call #1
    expect(fn).toHaveBeenCalledTimes(1);
    expect(lazyFn()).toBe('1907'); // call #2
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
