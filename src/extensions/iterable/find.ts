import { strictEqual } from '../../functions';

/**
 * @category Find
 */
export function findOrElse<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is U,
  producer: () => U
): U;
/**
 * @category Find
 */
export function findOrElse<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  producer: () => T
): T;
export function findOrElse<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  producer: () => T
): T {
  for (const item of iterable) {
    if (predicate(item)) {
      return item;
    }
  }
  return producer();
}

/**
 * @category Find
 */
export function findOrDefault<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is U,
  defaultValue: U
): U;
/**
 * @category Find
 */
export function findOrDefault<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  defaultValue: T
): T;
export function findOrDefault<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  defaultValue: T
): T {
  return findOrElse(iterable, predicate, () => defaultValue);
}

/**
 * @category Find
 */
export function findOrThrow<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is U,
  message?: string
): U;
/**
 * @category Find
 */
export function findOrThrow<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  message?: string
): T;
export function findOrThrow<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  message = 'No such element.'
): T {
  return findOrElse(iterable, predicate, () => {
    throw new Error(message);
  });
}

/**
 * @category Find
 */
export function findIndex<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean
): number {
  let i = 0;
  for (const item of iterable) {
    if (predicate(item)) {
      return i;
    }
    i++;
  }
  return -1;
}

/**
 * @category Find
 */
export function indexOf<T>(
  iterable: Iterable<T>,
  searchElement: T,
  predicate: (a: T, b: T) => boolean = strictEqual
): number {
  let i = 0;
  for (const item of iterable) {
    if (predicate(item, searchElement)) {
      return i;
    }
    i++;
  }
  return -1;
}
