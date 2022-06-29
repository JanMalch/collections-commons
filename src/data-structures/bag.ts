import { maxBy, minBy } from '../extensions';
import { JsonSerializable } from '../types';

/**
 * A bag is an object that aids with counting items.
 */
export class Bag<K>
  implements ReadonlyMap<K, number>, JsonSerializable<Record<string, number>>
{
  readonly [Symbol.toStringTag] = 'Bag';
  get size(): number {
    return this.map.size;
  }

  get isEmpty(): boolean {
    return this.map.size === 0;
  }

  constructor(protected readonly map: Map<K, number> = new Map()) {}

  get(key: K): number {
    return this.map.get(key) ?? 0;
  }

  add(key: K, amount = 1): this {
    this.map.set(key, (this.map.get(key) ?? 0) + amount);
    return this;
  }

  addAll(keys: K[], amount = 1): this {
    for (const key of keys) {
      this.add(key, amount);
    }
    return this;
  }

  delete(key: K, amount?: number): boolean {
    if (!this.has(key)) {
      return false;
    }
    if (amount == null) {
      this.map.delete(key);
    } else {
      const newCount = this.get(key) - amount;
      if (newCount <= 0) {
        this.map.delete(key);
      } else {
        this.map.set(key, newCount);
      }
    }
    return true;
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  max(): [key: K, value: number] | [] {
    const result = maxBy(this.map, (entry) => entry[1]);
    return result.length === 0 ? result : result[0];
  }

  min(): [key: K, value: number] | [] {
    const result = minBy(this.map, (entry) => entry[1]);
    return result.length === 0 ? result : result[0];
  }

  sum(): number {
    let sum = 0;
    for (const amount of this.map.values()) {
      sum += amount;
    }
    return sum;
  }

  clear() {
    this.map.clear();
  }

  [Symbol.iterator](): IterableIterator<[K, number]> {
    return this.map[Symbol.iterator]();
  }

  entries(): IterableIterator<[K, number]> {
    return this.map.entries();
  }

  forEach(
    callbackfn: (value: number, key: K, map: ReadonlyMap<K, number>) => void,
    thisArg?: any
  ): void {
    this.map.forEach((v, k) => callbackfn(v, k, this), thisArg);
  }

  keys(): IterableIterator<K> {
    return this.map.keys();
  }

  values(): IterableIterator<number> {
    return this.map.values();
  }

  toJSON(): Record<string, number> {
    return Object.fromEntries(this.map);
  }
}
