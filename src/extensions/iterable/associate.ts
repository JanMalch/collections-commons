/**
 *
 * @param iterable
 * @param transform
 * @param destination
 * @category Lookup
 */
export function associate<T, K, V>(
  iterable: Iterable<T>,
  transform: (item: T) => [K, V],
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of iterable) {
    const [key, value] = transform(item);
    destination.set(key, value);
  }
  return destination;
}
