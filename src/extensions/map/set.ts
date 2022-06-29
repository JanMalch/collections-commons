import { strictEqual } from '../../functions';
import { PickMap } from '../../types';

/**
 * Queries the map for the given key and returns its associated value, if it is present.
 *
 * If the key is absent, then the `producer` will be invoked. The computed value will be associated with the given key
 * and returned.
 * @param map the map to work with
 * @param key the queried key
 * @param producer a function to create a value if the key is not present
 * @example ```typescript
 * export function lazyLookup<K, V>(
 *   producer: (key: K) => V,
 *   cache: PickMap<K, V, 'has' | 'set' | 'get'> = new Map()
 * ) {
 *   return (key: K): V => computeIfAbsent(cache, key, producer);
 * }
 * ```
 */
export function computeIfAbsent<K, V>(
  map: PickMap<K, V, 'has' | 'set' | 'get'>,
  key: K,
  producer: (key: K) => V
): V {
  if (!map.has(key)) {
    const value = producer(key);
    map.set(key, value);
    return value;
  }
  return map.get(key)!;
}

/**
 * Queries the map with the given key and updates its associated value
 * with the given producer, but only if the key is present in the map.
 * The map and its entries are unchanged, if the key is not present.
 *
 * Returns `true` if and only if the key is present in the map,
 * implying that its associated value was updated.
 * @param map the map to work with
 * @param key the queried key
 * @param producer a function to update a value, only if it's present
 */
export function updateIfPresent<K, V>(
  map: PickMap<K, V, 'has' | 'set' | 'get'>,
  key: K,
  producer: (existingValue: V) => V
): boolean {
  const hasKey = map.has(key);
  if (hasKey) {
    map.set(key, producer(map.get(key)!));
  }
  return hasKey;
}

export function setAll<K, V, M extends PickMap<K, V, 'set'>>(
  map: M,
  entries: Iterable<[K, V]>
): M {
  for (const entry of entries) {
    map.set(entry[0], entry[1]);
  }
  return map;
}

/**
 *
 * @param map
 * @param entry
 * @see {@link replace}
 */
export function setIfAbsent<K, V, M extends PickMap<K, V, 'set' | 'has'>>(
  map: M,
  entry: [K, V]
): M {
  if (!map.has(entry[0])) {
    map.set(entry[0], entry[1]);
  }
  return map;
}

export function setAllIfAbsent<
  K,
  V,
  M extends PickMap<K, V, 'set' | 'has'> & Iterable<[K, V]>
>(map: M, entries: Iterable<[K, V]>): M {
  for (const entry of entries) {
    setIfAbsent(map, entry);
  }
  return map;
}

export function replace<K, V, M extends PickMap<K, V, 'has' | 'set' | 'get'>>(
  map: M,
  key: K,
  oldValue: V,
  newValue: V,
  predicate?: (oldValue: V, newValue: V) => boolean
): M;

export function replace<K, V, M extends PickMap<K, V, 'has' | 'set'>>(
  map: M,
  key: K,
  value: V
): M;
export function replace<K, V, M extends PickMap<K, V, 'has' | 'set' | 'get'>>(
  map: M,
  key: K,
  oldOrNewValue: V,
  newValue?: V,
  predicate?: (oldValue: V, newValue: V) => boolean
): M {
  if (newValue != null) {
    const _predicate = predicate ?? strictEqual;
    // replace only if map has key and associated value equals given `oldValue`
    if (map.has(key) && _predicate(map.get(key)!, oldOrNewValue)) {
      map.set(key, newValue);
    }
  } else {
    // replace with given value if it exists
    if (map.has(key)) {
      map.set(key, oldOrNewValue);
    }
  }
  return map;
}

/**
 *
 * @param map
 * @param replacer
 * @see {@link extensions/map!mapMapValues}
 */
export function replaceAll<
  K,
  V,
  M extends PickMap<K, V, 'set'> & Iterable<[K, V]>
>(map: M, replacer: (entry: [K, V]) => V): M {
  for (const entry of map) {
    map.set(entry[0], replacer(entry));
  }
  return map;
}
