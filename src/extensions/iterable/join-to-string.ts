import { toStringSafe } from '../../strings';

/**
 * An object with options for the `joinToString` function.
 * @see joinToString
 */
export interface JoinToStringOptions<T> {
  /**
   * The separator between items and before a possible `truncate` suffix.
   */
  separator: string;
  /**
   * The string at the front of the result. Will always be added.
   */
  prefix: string;
  /**
   * The string at the end of the result. Will always be added.
   */
  suffix: string;
  /**
   * The maximum amount of items, before iteration is stopped and the `truncated` suffix is added.
   */
  limit: number;
  /**
   * The indicator string that the result was truncated, e.g. `'...'`.
   * The separator will be inserted before the truncated substring.
   */
  truncated: string;
  /**
   * A transform function to transform the items of the iterable to a string.
   * @param item an item from the iterable
   * @param index the current iteration index
   */
  transform: (item: T, index: number) => string;
}

/**
 * The default options for `joinToString`.
 * @see JoinToStringOptions
 */
export const JOIN_TO_STRING_DEFAULT_OPTIONS = Object.freeze({
  separator: ',',
  transform: toStringSafe,
  truncated: '...',
  prefix: '',
  suffix: '',
  limit: Number.MAX_VALUE,
} as const);

/**
 * Joins the items of the given iterable to a string, based on the given options.
 * The default separator is a single comma without trailing whitespace: `','`.
 *
 * By default, no options are required and the default `transform` function
 * will safely convert `null` and `undefined` via `` `${v}` `` and everything else with `v.toString()`.
 * @param iterable the iterable to join to a string
 * @param options the options for joining
 * @see JOIN_TO_STRING_DEFAULT_OPTIONS the immutable default options
 */
export function joinToString<T>(
  iterable: Iterable<T>,
  options?: Partial<JoinToStringOptions<T>>
): string {
  const { prefix, limit, separator, transform, suffix, truncated } = {
    ...JOIN_TO_STRING_DEFAULT_OPTIONS,
    ...options,
  };
  let result = prefix;
  let isTruncated = false;
  let i = 0;
  const iterator = iterable[Symbol.iterator]();
  let item = iterator.next();
  while (!item.done) {
    result += transform(item.value, i);
    item = iterator.next();
    i++;
    if (item.done) {
      break;
    }
    result += separator;
    if (i === limit) {
      isTruncated = true;
      break;
    }
  }
  if (isTruncated) {
    result += truncated;
  }
  result += suffix;
  (result as any) | 0; // flatstr
  return result;
}
