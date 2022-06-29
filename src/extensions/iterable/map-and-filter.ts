/**
 * Maps the given `iterable` to a new array with the given `transform` function.
 * The result of the `transform` function will only be included in the returned array,
 * if and only if the result was strictly not equal to `undefined`.
 *
 * Thus, the returned array can never include `undefined`.
 * However, it could include `null`.
 *
 * Use this if you want to `map` and `filter` simultaneously; avoiding unnecessary loops.
 * @param iterable an iterable to transform
 * @param transform the transform function
 * @typeParam T the type of the items in the iterable
 * @typeParam U the type of the items in the returned array
 * @see {@link mapNotNullish}
 * @category Filter
 * @example ```typescript
 * const accounts = [{ id: 0, name: 'A' }, { id: 1 }];
 * const names: string[] = mapNotUndefined(accounts, account => account.name);
 * ```
 */
export function mapNotUndefined<T, U>(
  iterable: Iterable<T>,
  transform: (value: T) => U | undefined
): U[] {
  const result: U[] = [];
  for (const item of iterable) {
    const out = transform(item);
    if (out !== undefined) {
      result.push(out);
    }
  }
  return result;
}

/**
 * Maps the given `iterable` to a new array with the given `transform` function.
 * The result of the `transform` function will only be included in the returned array,
 * if and only if the result was strictly not equal to `undefined` or `null`.
 *
 * Thus, the returned array can never include `undefined` or `null`.
 *
 * Use this if you want to `map` and `filter` simultaneously; avoiding unnecessary loops.
 * @param iterable an iterable to transform
 * @param transform the transform function
 * @typeParam T the type of the items in the iterable
 * @typeParam U the type of the items in the returned array
 * @see {@link mapNotUndefined}
 * @category Filter
 * @example ```typescript
 * const accounts = [{ id: 0, name: 'A' }, { id: 1, name: null }];
 * const names: string[] = mapDefined(accounts, account => account.name);
 * ```
 */
export function mapNotNullish<T, U>(
  iterable: Iterable<T>,
  transform: (value: T) => U | undefined | null
): U[] {
  const result: U[] = [];
  for (const item of iterable) {
    const out = transform(item);
    if (out != null) {
      result.push(out);
    }
  }
  return result;
}

/**
 * @category Filter
 */
export function mapAndDistinct<T, U>(
  iterable: Iterable<T>,
  transform: (value: T) => U
): U[] {
  const result = new Set<U>();
  for (const item of iterable) {
    result.add(transform(item));
  }
  return Array.from(result);
}

/**
 * @category Filter
 */
export function filterAndMap<T, U extends T, V>(
  iterable: Iterable<T>,
  predicate: (item: T) => item is U,
  transform: (item: U) => V
): V[];
/**
 * @category Filter
 */
export function filterAndMap<T, U>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean,
  transform: (item: T) => U
): U[];
export function filterAndMap<T, U extends T, V>(
  iterable: Iterable<T>,
  predicate: ((item: T) => item is U) | ((item: T) => boolean),
  transform: (item: U) => V
): V[] {
  const result: V[] = [];
  for (const item of iterable) {
    if (predicate(item)) {
      result.push(transform(item));
    }
  }
  return result;
}
