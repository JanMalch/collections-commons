import { joinToKey, LeastRecentlyUsedMap, Memoize, memoize } from '../../src';

describe('memoize', () => {
  it('should call the function only once per unique arguments', () => {
    const fn = jest.fn((num: number) => num.toString());
    const memoFn = memoize(fn);
    expect(memoFn(0)).toEqual('0'); // call #1
    expect(memoFn(0)).toEqual('0');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(memoFn(1)).toEqual('1'); // call #2
    expect(memoFn(0)).toEqual('0');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should work with multiple arguments', () => {
    const fn = jest.fn((num: number, str: string) => num.toString() + str);
    const memoFn = memoize(fn);
    expect(memoFn(0, 'a')).toEqual('0a'); // call #1
    expect(memoFn(0, 'a')).toEqual('0a');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(memoFn(1, 'a')).toEqual('1a'); // call #2
    expect(memoFn(0, 'a')).toEqual('0a');
    expect(fn).toHaveBeenCalledTimes(2);
  });

  it('should work with objects as arguments', () => {
    const fn = jest.fn(
      (num: number, obj: { id: number; flag: boolean }) =>
        num.toString() + obj.id
    );
    const memoFn = memoize(fn);
    expect(memoFn(0, { id: 0, flag: true })).toEqual('00'); // call #1
    expect(memoFn(0, { id: 0, flag: false })).toEqual('00'); // call #2
    expect(memoFn(0, { id: 0, flag: false })).toEqual('00');
    expect(fn).toHaveBeenCalledTimes(2);
    expect(memoFn(0, { id: 1, flag: false })).toEqual('01'); // call #3
    expect(memoFn(0, { id: 0, flag: false })).toEqual('00');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should work with objects as arguments and custom keySelector', () => {
    const fn = jest.fn(
      (num: number, obj: { id: number; flag: boolean }) =>
        num.toString() + obj.id
    );
    const memoFn = memoize(fn, {
      keySelector: (num, obj) => joinToKey([num, obj.id]),
    });
    expect(memoFn(0, { id: 0, flag: true })).toEqual('00'); // call #1
    expect(memoFn(0, { id: 0, flag: false })).toEqual('00'); // no call because `flag` doesn't change key
    expect(memoFn(0, { id: 0, flag: false })).toEqual('00');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(memoFn(0, { id: 1, flag: false })).toEqual('01'); // call #2
    expect(memoFn(0, { id: 0, flag: true })).toEqual('00');
    expect(memoFn(1, { id: 0, flag: false })).toEqual('10'); // call #3
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('should work with a LRU cache', () => {
    const fn = jest.fn((num: number, str: string) => num.toString() + str);
    const memoFn = memoize(fn, {
      cache: new LeastRecentlyUsedMap(3),
    });
    expect(memoFn(0, 'a')).toEqual('0a'); // call #1
    expect(memoFn(0, 'a')).toEqual('0a');
    expect(memoFn(1, 'a')).toEqual('1a'); // call #2
    expect(memoFn(2, 'a')).toEqual('2a'); // call #3
    expect(fn).toHaveBeenCalledTimes(3);
    expect(memoFn(3, 'a')).toEqual('3a'); // call #4
    expect(memoFn(0, 'a')).toEqual('0a'); // call #5
    expect(memoFn(3, 'a')).toEqual('3a');
    expect(fn).toHaveBeenCalledTimes(5);
  });
});

describe('Memoize (decorator)', () => {
  class Demo {
    counter = 0;

    @Memoize()
    fun(num: number, str: string): string {
      if (!(this instanceof Demo)) {
        throw new Error('Wrong this.');
      }
      this.counter++;
      return `${num}${str}`;
    }
    @Memoize({ keySelector: (num: number, str: string) => `${num}${str}` })
    funWithKey(num: number, str: string): string {
      if (!(this instanceof Demo)) {
        throw new Error('Wrong this.');
      }
      this.counter++;
      return `${num}${str}`;
    }
  }

  it('should work with multiple arguments', () => {
    const demo = new Demo();
    expect(demo.fun(0, 'a')).toEqual('0a'); // call #1
    expect(demo.fun(0, 'a')).toEqual('0a');
    expect(demo.counter).toBe(1);
    expect(demo.fun(1, 'a')).toEqual('1a'); // call #2
    expect(demo.fun(0, 'a')).toEqual('0a');
    expect(demo.counter).toBe(2);
  });

  it('should work with custom keySelector', () => {
    const demo = new Demo();
    expect(demo.funWithKey(0, 'a')).toEqual('0a'); // call #1
    expect(demo.funWithKey(0, 'a')).toEqual('0a');
    expect(demo.counter).toBe(1);
    expect(demo.funWithKey(1, 'a')).toEqual('1a'); // call #2
    expect(demo.funWithKey(0, 'a')).toEqual('0a');
    expect(demo.counter).toBe(2);
  });

  describe('shared cache (default)', () => {
    class SharedDemo {
      counter = 0;

      @Memoize({ cacheFactory: () => new Map() })
      fun(num: number, str: string): string {
        if (!(this instanceof SharedDemo)) {
          throw new Error('Wrong this.');
        }
        this.counter++;
        return `${num}${str}`;
      }
    }

    it('should share the cache between instances by default', () => {
      const demo = new SharedDemo();
      const demo2 = new SharedDemo();
      expect(demo.fun(0, 'a')).toEqual('0a');
      expect(demo.fun(0, 'a')).toEqual('0a');
      expect(demo2.fun(0, 'a')).toEqual('0a');
      expect(demo2.fun(0, 'a')).toEqual('0a');
      expect(demo.counter).toBe(1);
      expect(demo2.counter).toBe(0);
    });
  });

  describe('cache per instance', () => {
    class PerInstanceDemo {
      counter = 0;

      @Memoize({ cacheFactory: () => new Map(), perInstance: true })
      fun(num: number, str: string): string {
        if (!(this instanceof PerInstanceDemo)) {
          throw new Error('Wrong this.');
        }
        this.counter++;
        return `${num}${str}`;
      }
    }

    it('should create new caches for each instance if so specified', () => {
      const demo = new PerInstanceDemo();
      const demo2 = new PerInstanceDemo();
      expect(demo.fun(0, 'a')).toEqual('0a');
      expect(demo.fun(0, 'a')).toEqual('0a');
      expect(demo2.fun(0, 'a')).toEqual('0a');
      expect(demo2.fun(0, 'a')).toEqual('0a');
      expect(demo.counter).toBe(1);
      expect(demo2.counter).toBe(1);
    });
  });
});
