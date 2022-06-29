/**
 * @category Get
 */
export function getFirst<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K
): V | undefined {
  return map.get(key)?.[0];
}

/**
 * @category Get
 */
export function getFirstOrElse<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K,
  producer: (key: K) => V
): V {
  const values = map.get(key);
  if (values == null || values.length === 0) {
    return producer(key);
  }
  return values[0];
}

/**
 * @category Get
 */
export function getFirstOrDefault<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K,
  defaultValue: V
): V {
  return getFirstOrElse(map, key, () => defaultValue);
}

/**
 * @category Get
 */
export function getFirstOrThrow<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K,
  message = `No values for key ${key}.`
): V {
  return getFirstOrElse(map, key, () => {
    throw new Error(message);
  });
}
