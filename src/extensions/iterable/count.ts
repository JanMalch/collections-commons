/**
 *
 * @param iterable
 * @param predicate
 * @category Reducer
 */
export function count<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): number {
  let count = 0;
  for (const item of iterable) {
    count += predicate(item) ? 1 : 0;
  }
  return count;
}
