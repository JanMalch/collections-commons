import { PickMap } from '../../types';

export function getOrElse<V>(
  array: ReadonlyArray<V>,
  index: number,
  producer: (index: number) => V,
  useCountBack?: boolean
): V;
/**
 * Returns the value associated with the given key.
 * Returns the result of the `producer` function if the key is not present in the map.
 * The map won't be updated with the computed value, see {@link computeIfAbsent} instead.
 * @param map a map
 * @param key the queried key
 * @param producer the function to produce a fallback value
 * @see {@link computeIfAbsent}
 * @see {@link getOrDefault}
 * @see {@link getOrThrow}
 * @category Get
 */
export function getOrElse<K, V>(
  map: PickMap<K, V, 'has' | 'get'>,
  key: K,
  producer: (key: K) => V
): V;
export function getOrElse<K extends keyof any, V>(
  record: Readonly<Record<any, V>>,
  key: K,
  producer: (key: K) => V
): V;
export function getOrElse<K, V>(
  collection:
    | PickMap<K, V, 'has' | 'get'>
    | ReadonlyArray<V>
    | Readonly<Record<any, V>>,
  key: K | number,
  producer: (key: K | number) => V,
  useCountBack?: boolean
): V {
  if (collection instanceof Map) {
    return collection.has(key) ? collection.get(key)! : producer(key);
  }
  if (Array.isArray(collection)) {
    let index = key as number;
    // useCountBack as true by default
    if (index < 0 && useCountBack !== false) {
      index += collection.length;
    }
    if (index < 0 || index >= collection.length) {
      return producer(key);
    }
    return collection[index];
  }
  if (collection != null && typeof collection === 'object') {
    return collection.hasOwnProperty(key as keyof any)
      ? (collection[key]! as V)
      : producer(key);
  }
  throw new Error(
    `Cannot get key ${key} from collection of type ${typeof collection}`
  );
}

/**
 * Returns the value associated with the given key.
 * Returns the `defaultValue` if the key is not present in the map.
 * The map won't be updated with the `defaultValue`, see {@link computeIfAbsent} instead.
 * @param map a map
 * @param key the queried key
 * @param defaultValue the default value if the queried key is not present
 * @see {@link computeIfAbsent}
 * @see {@link getOrElse}
 * @see {@link getOrThrow}
 * @category Get
 */
export function getOrDefault<K, V>(
  map: PickMap<K, V, 'has' | 'get'>,
  key: K,
  defaultValue: V
): V {
  return getOrElse(map, key, () => defaultValue);
}

/**
 * Returns the value associated with the given key.
 * Throws an error if the key is not present in the map.
 * @param map a map
 * @param key the queried key
 * @param message an optional error message
 * @see {@link getOrElse}
 * @see {@link getOrDefault}
 * @category Get
 */
export function getOrThrow<K, V>(
  map: PickMap<K, V, 'has' | 'get'>,
  key: K,
  message = `No value associated with the key ${key}.`
): V {
  return getOrElse(map, key, () => {
    throw new Error(message);
  });
}
