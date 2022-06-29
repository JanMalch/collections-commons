import { ReadonlyMapByDelegation } from '../../data-structures';

/**
 * Creates a new `ReadonlyMap` that holds the given values.
 *
 * If a `Map` is passed, all its values will be copied into a new `Map`.
 * @param values the values for the `ReadonlyMap`
 * @see {@link data-structures/maps!ReadonlyMapByDelegation}
 * @category Lookup
 */
export function readonlyMapOf<K, V>(
  values: Iterable<[K, V]>
): ReadonlyMap<K, V> {
  return new ReadonlyMapByDelegation(new Map(values));
}
