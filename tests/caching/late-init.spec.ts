import { lateInit } from '../../src';

describe('lateInit', () => {
  describe('mutable', () => {
    it('should work', () => {
      const holder = lateInit<number>('mutable');
      expect(() => holder.value).toThrow();
      expect(holder.isInitialized).toBe(false);
      holder.value = 1;
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(1);
      holder.value = 2;
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(2);
    });

    it('should be the default behaviour', () => {
      const holder = lateInit<number>();
      expect(() => holder.value).toThrow();
      expect(holder.isInitialized).toBe(false);
      holder.value = 1;
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(1);
      holder.value = 2;
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(2);
    });
  });

  describe('immutable:strict', () => {
    it('should work', () => {
      const holder = lateInit<number>('immutable:strict');
      expect(() => holder.value).toThrow();
      expect(holder.isInitialized).toBe(false);
      holder.value = 1;
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(1);
      expect(() => {
        holder.value = 2;
      }).toThrow();
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(1);
    });
  });

  describe('immutable:ignore', () => {
    it('should work', () => {
      const holder = lateInit<number>('immutable:ignore');
      expect(() => holder.value).toThrow();
      expect(holder.isInitialized).toBe(false);
      holder.value = 1;
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(1);
      expect(() => {
        holder.value = 2;
      }).not.toThrow();
      expect(holder.isInitialized).toBe(true);
      expect(holder.value).toBe(1);
    });
  });

  describe('toJSON', () => {
    it('should return the value unboxed', () => {
      const holder = lateInit<number>('mutable');
      expect(() => holder.toJSON()).toThrow();
      holder.value = 1;
      expect(holder.toJSON()).toBe(1);
      holder.value = 2;
      expect(holder.toJSON()).toBe(2);
    });
  });
});
