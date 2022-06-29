/**
 * @see {@link extensions/iterable!readonlyMapOf}
 */
export class ReadonlyMapByDelegation<K, V> implements ReadonlyMap<K, V> {
  readonly [Symbol.toStringTag] = 'ReadonlyMapByDelegation';

  readonly #map: Map<K, V>;

  constructor(map: Map<K, V>) {
    this.#map = map;
  }

  get size(): number {
    return this.#map.size;
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.#map[Symbol.iterator]();
  }

  entries(): IterableIterator<[K, V]> {
    return this.#map.entries();
  }

  forEach(
    callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void,
    thisArg?: any
  ): void {
    this.#map.forEach((v, k) => callbackfn(v, k, this), thisArg);
  }

  get(key: K): V | undefined {
    return this.#map.get(key);
  }

  has(key: K): boolean {
    return this.#map.has(key);
  }

  keys(): IterableIterator<K> {
    return this.#map.keys();
  }

  values(): IterableIterator<V> {
    return this.#map.values();
  }
}
