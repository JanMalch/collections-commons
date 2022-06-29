import { WeakMapAdapter } from '../../../src';

describe('WeakMapAdapter', () => {
  it('should set and get', () => {
    const map = new WeakMapAdapter();
    const a = { id: 'a' };
    const b = { id: 'b' };
    map.set(a, 1);
    map.set(b, 2);
    expect(map.get(a)).toEqual(1);
    expect(map.get(b)).toEqual(2);
  });

  it('should delete properly', () => {
    const map = new WeakMapAdapter();
    const a = { id: 'a' };
    const b = { id: 'b' };
    map.set(a, 1);
    map.set(b, 2);
    expect(map.has(a)).toBe(true);
    expect(map.has(b)).toBe(true);
    map.delete(a);
    expect(map.has(a)).toBe(false);
    expect(map.has(b)).toBe(true);
  });

  it('should track the size', () => {
    const map = new WeakMapAdapter();
    const a = { id: 'a' };
    const b = { id: 'b' };
    map.set(a, 1);
    map.set(b, 2);
    expect(map.size).toBe(2);
    map.delete(a);
    expect(map.size).toBe(1);
  });

  it('should clear properly', () => {
    const map = new WeakMapAdapter();
    const a = { id: 'a' };
    const b = { id: 'b' };
    map.set(a, 1);
    map.set(b, 2);
    expect(map.has(a)).toBe(true);
    expect(map.has(b)).toBe(true);
    expect(map.size).toBe(2);
    map.clear();
    expect(map.has(a)).toBe(false);
    expect(map.has(b)).toBe(false);
    expect(map.size).toBe(0);
  });

  it('should throw when attempting to iterate over it', () => {
    const map = new WeakMapAdapter();
    expect(() => Array.from(map)).toThrow();
    expect(() => Array.from(map.values())).toThrow();
    expect(() => Array.from(map.entries())).toThrow();
    expect(() => Array.from(map.keys())).toThrow();
    expect(() => map.forEach()).toThrow();
  });
});
