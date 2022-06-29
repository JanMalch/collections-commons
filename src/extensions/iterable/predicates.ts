/**
 *
 * @param map
 * @param predicate
 * @category Predicates
 */
export function every<K, V, NewK extends K, NewV extends V>(
  map: Map<K, V>,
  predicate: (entry: [K, V]) => entry is [NewK, NewV]
): map is Map<NewK, NewV>;
/**
 *
 * @param map
 * @param predicate
 * @category Predicates
 */
export function every<K, V, NewK extends K, NewV extends V>(
  map: ReadonlyMap<K, V>,
  predicate: (entry: [K, V]) => entry is [NewK, NewV]
): map is ReadonlyMap<NewK, NewV>;
/**
 *
 * @param set
 * @param predicate
 * @category Predicates
 */
export function every<T, U extends T>(
  set: Set<T>,
  predicate: (value: T) => value is U
): set is Set<U>;
/**
 *
 * @param set
 * @param predicate
 * @category Predicates
 */
export function every<T, U extends T>(
  set: ReadonlySet<T>,
  predicate: (value: T) => value is U
): set is ReadonlySet<U>;
/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function every<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (item: T) => item is U
): iterable is Iterable<U>;
/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function every<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): boolean;
export function every<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): boolean {
  for (const entry of iterable) {
    if (!predicate(entry)) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function some<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): boolean {
  for (const item of iterable) {
    if (predicate(item)) {
      return true;
    }
  }
  return false;
}

/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function isEmptyOrSome<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): boolean {
  let isEmpty = true;
  for (const item of iterable) {
    isEmpty = false;
    if (predicate(item)) {
      return true;
    }
  }
  return isEmpty;
}

/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function none<T, U extends T>(
  iterable: Array<T>,
  predicate: (item: T) => item is U
): iterable is Array<Exclude<T, U>>;
/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function none<T, U extends T>(
  iterable: Set<T>,
  predicate: (item: T) => item is U
): iterable is Set<Exclude<T, U>>;
/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function none<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (item: T) => item is U
): iterable is Iterable<Exclude<T, U>>;
/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function none<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): boolean;
/**
 *
 * @param iterable
 * @param predicate
 * @category Predicates
 */
export function none<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): boolean {
  for (const item of iterable) {
    if (predicate(item)) {
      return false;
    }
  }
  return true;
}
