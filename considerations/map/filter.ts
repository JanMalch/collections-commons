/**
 * @category Factory
 */
export function filterMap<K, V, NewK extends K, NewV extends V>(
  map: Iterable<[K, V]>,
  predicate: (entry: [key: K, value: V]) => entry is [key: NewK, value: NewV],
  into?: Map<K, V>
): Map<NewK, NewV>;
/**
 * @category Factory
 */
export function filterMap<K, V>(
  map: Iterable<[K, V]>,
  predicate: (entry: [key: K, value: V]) => boolean,
  into?: Map<K, V>
): Map<K, V>;
export function filterMap<K, V>(
  map: Iterable<[K, V]>,
  predicate: (entry: [key: K, value: V]) => boolean,
  into: Map<K, V> = new Map()
): Map<K, V> {
  for (const entry of map) {
    if (predicate(entry)) {
      into.set(entry[0], entry[1]);
    }
  }
  return into;
}
