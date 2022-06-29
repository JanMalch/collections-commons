import { PartialReadonlyMap } from '../../types';

/**
 * Returns the value associated with the given key.
 * Returns the result of the `producer` function if the key is not present in the map.
 * The map won't be updated with the computed value, see `computeIfAbsent` instead.
 * @param map a map
 * @param key the queried key
 * @param producer the function to produce a fallback value
 * @see computeIfAbsent
 * @see getOrDefault
 * @see getOrThrow
 */
export function getOrElse<K, V>(
  map: PartialReadonlyMap<K, V, 'has' | 'get'>,
  key: K,
  producer: (key: K) => V
): V {
  return map.has(key) ? map.get(key)! : producer(key);
}

/**
 * Returns the value associated with the given key.
 * Returns the `defaultValue` if the key is not present in the map.
 * The map won't be updated with the `defaultValue`, see `computeIfAbsent` instead.
 * @param map a map
 * @param key the queried key
 * @param defaultValue the default value if the queried key is not present
 * @see getOrElse
 * @see getOrThrow
 */
export function getOrDefault<K, V>(
  map: PartialReadonlyMap<K, V, 'has' | 'get'>,
  key: K,
  defaultValue: V
): V {
  return map.has(key) ? map.get(key)! : defaultValue;
}

/**
 * Returns the value associated with the given key.
 * Throws an error if the key is not present in the map.
 * @param map a map
 * @param key the queried key
 * @param message an optional error message
 * @see getOrElse
 * @see getInBounds
 */
export function getOrThrow<K, V>(
  map: PartialReadonlyMap<K, V, 'has' | 'get'>,
  key: K,
  message = `No value associated with the key ${key}.`
): V {
  if (map.has(key)) {
    return map.get(key)!;
  } else {
    throw new Error(message);
  }
}
