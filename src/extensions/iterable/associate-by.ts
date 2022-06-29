/**
 *
 * @param values
 * @param keySelector
 * @param destination
 * @category Lookup
 */
export function associateBy<K, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of values) {
    destination.set(keySelector(item), item);
  }
  return destination;
}

/**
 *
 * @param values
 * @param keysSelector
 * @param destination
 * @category Lookup
 */
export function associateByMultiple<K, V>(
  values: Iterable<V>,
  keysSelector: (item: V) => Iterable<K>,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of values) {
    const keys = keysSelector(item);
    for (const key of keys) {
      destination.set(key, item);
    }
  }
  return destination;
}

/**
 *
 * @param values
 * @param keySelector
 * @param destination
 * @category Lookup
 */
export function associateByNotNullish<K, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K | undefined,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of values) {
    const key = keySelector(item);
    if (key != null) {
      destination.set(key, item);
    }
  }
  return destination;
}
