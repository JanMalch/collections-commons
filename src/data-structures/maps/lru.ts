import LRUCache, { Options } from 'lru-cache';

export class LeastRecentlyUsedMap<K, V> implements Map<K, V> {
  protected readonly lru: LRUCache<K, V>;

  get [Symbol.toStringTag](): string {
    return 'LeastRecentlyUsedMap';
  }

  get size(): number {
    return this.itemCount;
  }

  get itemCount(): number {
    return this.lru.itemCount;
  }

  get length(): number {
    return this.lru.length;
  }

  get allowStale(): boolean {
    return this.lru.allowStale;
  }
  get max(): number {
    return this.lru.max;
  }
  get maxAge(): number {
    return this.lru.maxAge;
  }

  constructor(maxSize: number);
  constructor(options?: Options<K, V>);
  constructor(options?: any) {
    this.lru = new LRUCache(options);
  }

  get(key: K) {
    return this.lru.get(key);
  }

  set(key: K, value: V) {
    this.lru.set(key, value);
    return this;
  }

  has(key: K) {
    return this.lru.has(key);
  }

  delete(key: K) {
    const hasKey = this.has(key);
    this.lru.del(key);
    return hasKey;
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  entries(): IterableIterator<[K, V]> {
    const entries = this.lru.keys().map((key) => [key, this.lru.peek(key)!]);
    return entries[Symbol.iterator]() as IterableIterator<[K, V]>;
  }

  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void {
    this.lru.forEach((value, key) => callbackfn(value, key, this), thisArg);
  }

  rforEach(
    callbackfn: (value: V, key: K, map: LeastRecentlyUsedMap<K, V>) => void,
    thisArg?: any
  ): void {
    this.lru.rforEach((value, key) => callbackfn(value, key, this), thisArg);
  }

  keys(): IterableIterator<K> {
    return this.lru.keys()[Symbol.iterator]();
  }

  values(): IterableIterator<V> {
    return this.lru.values()[Symbol.iterator]();
  }

  clear() {
    this.reset();
  }

  peek(key: K) {
    return this.lru.peek(key);
  }

  reset() {
    this.lru.reset();
  }

  dump() {
    return this.lru.dump();
  }

  load(cacheEntries: ReadonlyArray<LRUCache.Entry<K, V>>): void {
    this.lru.load(cacheEntries);
  }

  prune() {
    this.lru.prune();
  }

  lengthCalculator(value: V): number {
    return this.lru.lengthCalculator(value);
  }
}
