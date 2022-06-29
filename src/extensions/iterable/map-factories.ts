import { setOrUpdateInArray } from '../array';
import { addAllByGrouping } from '../multi-value-map';

/**
 * Groups all values in the iterable under the computed key, based on the `keySelector`.
 * @param values
 * @param keySelector
 * @see addAllByGrouping
 * @category Map Factory
 */
export function groupBy<K, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K
): Map<K, V[]> {
  const destination: Map<K, V[]> = new Map();
  addAllByGrouping(destination, values, keySelector);
  return destination;
}

/**
 *
 * @param iterable
 * @param transform
 * @param destination
 * @category Map Factory
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

/**
 *
 * @param values
 * @param keySelector
 * @param destination
 * @category Map Factory
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
 * @category Map Factory
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
 * @category Map Factory
 */
export function associateByNotUndefined<K, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K | undefined,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of values) {
    const key = keySelector(item);
    if (key !== undefined) {
      destination.set(key, item);
    }
  }
  return destination;
}

/**
 *
 * @param keys
 * @param valueSelector
 * @param destination
 * @category Map Factory
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
 * @category Map Factory
 */
export function associateWithNotUndefined<K, V>(
  keys: Iterable<K>,
  valueSelector: (item: K) => V | undefined,
  destination: Map<K, V> = new Map()
): Map<K, V> {
  for (const item of keys) {
    const value = valueSelector(item);
    if (value !== undefined) {
      destination.set(item, value);
    }
  }
  return destination;
}

/**
 *
 * @param values
 * @param indexSelector
 * @category Map Factory
 */
export function groupByIndex<T>(
  values: Iterable<T>,
  indexSelector: (item: T) => number
): T[][] {
  const result: T[][] = [];
  for (const item of values) {
    const index = indexSelector(item);
    setOrUpdateInArray(result, index, {
      onUpdate: (v) => {
        v.push(item);
        return v;
      },
      onSet: () => [item],
    });
  }
  // ensure that every index in bounds has at least an empty array
  return Array.from(result, (group) => group ?? []);
}

/**
 *
 * @param values
 * @param keySelector
 * @param propSet
 * @category Map Factory
 */
export function groupByProp<K extends keyof any, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K,
  propSet: Iterable<K>
): Record<K, V[]>;
/**
 *
 * @param values
 * @param keySelector
 * @param propSet
 * @category Map Factory
 */
export function groupByProp<K extends keyof any, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K
): Partial<Record<K, V[]>>;
export function groupByProp<K extends keyof any, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K,
  propSet?: Iterable<K>
): Partial<Record<K, V[]>> | Record<K, V[]> {
  const result: Partial<Record<K, V[]>> = {};
  if (propSet != null) {
    for (const key of propSet) {
      result[key] = [];
    }
  }
  for (const item of values) {
    const key = keySelector(item);
    const group = result[key];
    if (group != null) {
      group.push(item);
    } else {
      result[key] = [item];
    }
  }
  return result;
}
