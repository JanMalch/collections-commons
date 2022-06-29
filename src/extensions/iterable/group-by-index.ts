/**
 *
 * @param values
 * @param indexSelector
 * @category Lookup
 * @example ```typescript
 * const [first, second, third, fourth] = groupByIndex(
 *   [1, 2, 100, 200],
 *   (num) => num.toString().length - 1
 * );
 * // first → [1, 2]
 * // second → []
 * // third → [100, 200]
 * // fourth → undefined
 * ```
 */
export function groupByIndex<T>(
  values: Iterable<T>,
  indexSelector: (item: T) => number
): T[][] {
  const result: T[][] = [];
  for (const item of values) {
    const index = indexSelector(item);
    if (result[index] == null) {
      result[index] = [item];
    } else {
      result[index].push(item);
    }
  }
  // ensure that every index in bounds has at least an empty array
  return Array.from(result, (group) => group ?? []);
}
