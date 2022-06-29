import { NonEmptyArray } from '../../types';

/**
 * Returns `true` if and only if the given array is empty.
 * @param array
 * @see {@link hasItems}
 * @category Predicates
 */
export function isEmpty<T>(array: T[]): array is [];

/**
 * Returns `true` if and only if the given iterable is empty.
 * @param iterable
 * @see {@link hasItems}
 * @category Predicates
 */
export function isEmpty<T>(iterable: Iterable<T>): boolean;
export function isEmpty<T>(iterable: Iterable<T>): boolean {
  return iterable[Symbol.iterator]().next().done === true;
}

/**
 * Returns `true` if and only if the given array is not `null` or `undefined` and has at least one item.
 * @param array
 * @see {@link assertHasItems}
 * @see {@link isEmpty}
 * @category Predicates
 */
export function hasItems<T>(
  array: T[] | null | undefined
): array is NonEmptyArray<T>;

/**
 * Returns `true` if and only if the given iterable is not `null` or `undefined` and has at least one item.
 * @param iterable
 * @see {@link assertHasItems}
 * @see {@link isEmpty}
 * @category Predicates
 */
export function hasItems<T>(
  iterable: Iterable<T> | null | undefined
): iterable is Iterable<T>;
export function hasItems<T>(
  iterable: Iterable<T> | null | undefined
): iterable is Iterable<T> {
  return iterable != null && !isEmpty(iterable);
}

/**
 * Throws an error if and only if the given array is `null`, `undefined` or has no items.
 * @param array
 * @see {@link hasItems}
 * @category Predicates
 */
export function assertHasItems<T>(
  array: T[] | null | undefined
): asserts array is NonEmptyArray<T>;

/**
 * Throws an error if and only if the given iterable is `null`, `undefined` or has no items.
 * @param iterable
 * @see {@link hasItems}
 * @category Predicates
 */
export function assertHasItems<T>(
  iterable: Iterable<T> | null | undefined
): asserts iterable is Iterable<T>;
export function assertHasItems<T>(
  iterable: Iterable<T> | null | undefined
): asserts iterable is Iterable<T> {
  if (!hasItems(iterable)) {
    throw new Error(`Iterable is empty or not defined.`);
  }
}
