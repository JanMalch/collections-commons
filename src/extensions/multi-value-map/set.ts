import { computeIfAbsent } from '../map';

/**
 * @category Mutating
 */
export function setOne<K, V>(map: Map<K, V[]>, key: K, value: V) {
  map.set(key, [value]);
}

/**
 * @category Mutating
 */
export function addAll<K, V>(map: Map<K, V[]>, key: K, value: Iterable<V>) {
  computeIfAbsent(map, key, () => []).push(...value);
}

/**
 * @category Mutating
 */
export function addOne<K, V>(map: Map<K, V[]>, key: K, value: V) {
  computeIfAbsent(map, key, () => []).push(value);
}

/**
 * @category Mutating
 */
export function addAllByGrouping<K, V>(
  map: Map<K, V[]>,
  iterable: Iterable<V>,
  keySelector: (value: V) => K
) {
  for (const value of iterable) {
    addOne(map, keySelector(value), value);
  }
}

/**
 * @category Mutating
 */
export function addAllFromEntries<K, V>(
  destination: Map<K, V[]>,
  source: Iterable<[K, V[]]>
) {
  for (const [key, values] of source) {
    computeIfAbsent(destination, key, () => []).push(...values);
  }
}

/**
 * @category Mutating
 */
export function addOneFromEntries<K, V>(
  destination: Map<K, V[]>,
  source: Iterable<[K, V]>
) {
  for (const [key, value] of source) {
    computeIfAbsent(destination, key, () => []).push(value);
  }
}
