/**
 *
 * @param iterable
 * @param predicate
 * @category Reducers
 */
export function count<T>(
  iterable: Iterable<T>,
  predicate?: (item: T) => boolean
): number {
  let count = 0;
  const hasPredicate = predicate != null;
  for (const item of iterable) {
    count += hasPredicate ? (predicate(item) ? 1 : 0) : 1;
  }
  return count;
}
