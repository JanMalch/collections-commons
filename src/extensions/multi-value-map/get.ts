import { getOrDefault } from '../map';

export function getFirst<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K
): V | undefined {
  return map.get(key)?.[0];
}

export function getFirstOrElse<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K,
  producer: (key: K) => V
): V {
  const values = getOrDefault(map, key, []);
  if (values.length === 0) {
    return producer(key);
  }
  return values[0];
}

export function getFirstOrDefault<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K,
  defaultValue: V
): V {
  return getFirstOrElse(map, key, () => defaultValue);
}

export function getFirstOrThrow<K, V>(
  map: ReadonlyMap<K, V[]>,
  key: K,
  message = `No values for key ${key}.`
): V {
  return getFirstOrElse(map, key, () => {
    throw new Error(message);
  });
}
