import { associateBy } from './associate-by';

/**
 * @category Lookup
 * @see {@link functions!lazyLookup}
 */
export function eagerLookup<K, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K
): (key: K) => V | undefined {
  const map = associateBy(values, keySelector);
  return (key: K) => map.get(key);
}
