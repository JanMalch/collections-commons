/**
 * @category Factory
 */
export function mapMapValues<K, V, NewV>(
  map: Iterable<[K, V]>,
  transform: (entry: [key: K, value: V]) => NewV,
  into: Map<K, NewV> = new Map()
): Map<K, NewV> {
  for (const entry of map) {
    into.set(entry[0], transform(entry));
  }
  return into;
}

/**
 * @category Factory
 */
export function mapMapKeys<K, V, NewK>(
  map: Iterable<[K, V]>,
  transform: (entry: [key: K, value: V]) => NewK,
  into: Map<NewK, V> = new Map()
): Map<NewK, V> {
  for (const entry of map) {
    into.set(transform(entry), entry[1]);
  }
  return into;
}

/**
 * @category Factory
 */
export function mapMap<K, V, NewK, NewV>(
  map: Iterable<[K, V]>,
  transform: (entry: [key: K, value: V]) => [key: NewK, value: NewV],
  into: Map<NewK, NewV> = new Map()
): Map<NewK, NewV> {
  for (const entry of map) {
    const newEntry = transform(entry);
    into.set(newEntry[0], newEntry[1]);
  }
  return into;
}
