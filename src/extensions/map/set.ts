import { PartialMap } from '../../types';

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
 *   cache: PartialMap<K, V, 'has' | 'set' | 'get'> = new Map()
 * ) {
 *   return (key: K): V => computeIfAbsent(cache, key, producer);
 * }
 * ```
 */
export function computeIfAbsent<K, V>(
  map: PartialMap<K, V, 'has' | 'set' | 'get'>,
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
 * Sets or updates the given key in the given map.
 *
 * The producer can be a function, that will only receive a value, if it's present.
 * This means that `arguments.length` will be `0`, if the key doesn't exist yet.
 * You may pass in a function, if you can easily handle `undefined` in an unambiguous way,
 * e.g. `setOrUpdate(map, key, (count) => (count ?? 0) + 1)` .
 *
 * The producer may also be an object with `onSet` and `onUpdate` functions,
 * which provide stronger typings than the single function for both cases.
 *
 * Returns `true` if and only if the key was present in the map,
 * implying that its associated value was updated rather than set.
 * @param map the map to work with
 * @param key the queried key
 * @param producer a function or object to set or update a value in the map
 * @see updateIfPresent
 */
export function setOrUpdate<K, V>(
  map: PartialMap<K, V, 'has' | 'set' | 'get'>,
  key: K,
  producer:
    | ((existingValue?: V) => V)
    | { onSet: () => V; onUpdate: (existingValue: V) => V }
): boolean {
  const onSet = (producer as any).onSet ?? producer;
  const onUpdate = (producer as any).onUpdate ?? producer;
  const hasKey = map.has(key);
  if (hasKey) {
    map.set(key, onUpdate(map.get(key)!));
  } else {
    map.set(key, onSet());
  }
  return hasKey;
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
  map: PartialMap<K, V, 'has' | 'set' | 'get'>,
  key: K,
  producer: (existingValue: V) => V
): boolean {
  const hasKey = map.has(key);
  if (hasKey) {
    map.set(key, producer(map.get(key)!));
  }
  return hasKey;
}

export function setAll<K, V, M extends PartialMap<K, V, 'set'>>(
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
 * @see replace
 */
export function setIfAbsent<K, V, M extends PartialMap<K, V, 'set' | 'has'>>(
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
  M extends PartialMap<K, V, 'set' | 'has'> & Iterable<[K, V]>
>(map: M, entries: Iterable<[K, V]>): M {
  for (const entry of entries) {
    setIfAbsent(map, entry);
  }
  return map;
}

export function deleteIf<
  K,
  V,
  M extends PartialMap<K, V, 'delete'> & Iterable<[K, V]>
>(map: M, predicate: (entry: [K, V]) => boolean): M {
  for (const entry of map) {
    if (predicate(entry)) {
      map.delete(entry[0]);
    }
  }
  return map;
}

export function replace<
  K,
  V,
  M extends PartialMap<K, V, 'has' | 'set' | 'get'>
>(map: M, key: K, oldValue: V, newValue: V): M;
export function replace<K, V, M extends PartialMap<K, V, 'has' | 'set'>>(
  map: M,
  key: K,
  value: V
): M;
export function replace<
  K,
  V,
  M extends PartialMap<K, V, 'has' | 'set' | 'get'>
>(map: M, key: K, oldOrNewValue: V, newValue?: V): M {
  if (newValue != null) {
    // replace only if map has key and associated value equals given `oldValue`
    if (map.has(key) && map.get(key) === oldOrNewValue) {
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
 * @see mapMapValues
 */
export function replaceAll<
  K,
  V,
  M extends PartialMap<K, V, 'set'> & Iterable<[K, V]>
>(map: M, replacer: (entry: [K, V]) => V): M {
  for (const entry of map) {
    map.set(entry[0], replacer(entry));
  }
  return map;
}
