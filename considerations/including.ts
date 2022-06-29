import { strictEqual } from '../src';

/**
 * @category Predicates
 */
export function includes<T>(
  iterable: Iterable<T>,
  searchElement: T,
  predicate: (a: T, b: T) => boolean = strictEqual
): boolean {
  for (const item of iterable) {
    if (predicate(item, searchElement)) {
      return true;
    }
  }
  return false;
}

/**
 * Curried variant of {@link includes}.
 * @param iterable the iterable to search through
 * @param predicate the predicate to compare items by. Defaults to `strictEqual`.
 * @category Predicates
 */
export function includedBy<T>(
  iterable: Iterable<T>,
  predicate: (a: T, b: T) => boolean = strictEqual
): (item: T) => boolean {
  return (item: T) => includes(iterable, item, predicate);
}

/**
 *
 * @param iterable
 * @param itemsToContain
 * @param predicate
 * @category Predicates
 */
export function containsAll<T>(
  iterable: Iterable<T>,
  itemsToContain: T[],
  predicate: (a: T, b: T) => boolean = strictEqual
): boolean {
  for (const item of iterable) {
    const doesContain = itemsToContain.some((other) => predicate(other, item));
    if (!doesContain) {
      return false;
    }
  }
  return true;
}
