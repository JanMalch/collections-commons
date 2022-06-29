/**
 *
 * @param keys
 * @param valueSelector
 * @param destination
 * @category Lookup
 */
export function associateWith<K, V>(
  keys: Iterable<K>,
  valueSelector: (item: K) => V,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of keys) {
    destination.set(item, valueSelector(item));
  }
  return destination;
}

/**
 *
 * @param keys
 * @param valueSelector
 * @param destination
 * @category Lookup
 */
export function associateWithNotNullish<K, V>(
  keys: Iterable<K>,
  valueSelector: (item: K) => V | undefined,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of keys) {
    const value = valueSelector(item);
    if (value != null) {
      destination.set(item, value);
    }
  }
  return destination;
}
