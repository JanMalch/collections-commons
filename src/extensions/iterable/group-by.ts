/**
 * Groups all values in the iterable under the computed key, based on the `keySelector`.
 * @param values
 * @param keySelector
 * @param destination
 * @category Lookup
 * @example ```typescript
 * const map = groupBy([0, 1, 2, 10, 20, 100, 200], (num) =>
 *   num.toString().charAt(0)
 * );
 * // map → [
 * //   ['0', [0]],
 * //   ['1', [1, 10, 100]],
 * //   ['2', [2, 20, 200]],
 * // ]
 * ```
 */
export function groupBy<K, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K,
  destination = new Map<K, V[]>()
): Map<K, V[]> {
  for (const value of values) {
    const key = keySelector(value);
    const group = destination.get(key);
    if (group == null) {
      destination.set(key, [value]);
    } else {
      group.push(value);
    }
  }
  return destination;
}
