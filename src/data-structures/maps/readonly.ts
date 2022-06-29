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

/**
 * Creates a new `ReadonlyMap`, that operates on the given map.
 *
 * Thus, the content of the returned `ReadonlyMap` will change, when the content of the given `delegate` changes.
 * @param delegate the map that is used internally
 * @see readonlyMapOf
 */
export function toReadonlyMap<K, V>(delegate: Map<K, V>): ReadonlyMap<K, V> {
  return new ReadonlyMapByDelegation(delegate);
}

/**
 * Creates a new `ReadonlyMap` that holds the given values.
 *
 * If a `Map` is passed, all its values will be copied into a new `Map`.
 * @param values the values for the `ReadonlyMap`
 * @see toReadonlyMap
 */
export function readonlyMapOf<K, V>(
  values: Iterable<[K, V]>
): ReadonlyMap<K, V> {
  return toReadonlyMap(new Map(values));
}
