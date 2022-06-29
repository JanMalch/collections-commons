/**
 *
 * @param values
 * @param keySelector
 * @param propSet
 * @category Lookup
 * @example ```typescript
 * const { num1, num2, num3 } = groupByProp(
 *   [1, 2, 100, 200],
 *   (num) => `num` + num.toString().length,
 *   ['num1', 'num2', 'num3']
 * );
 * // num1 → [1, 2]
 * // num2 → []
 * // num3 → [100, 200]
 * ```
 */
export function groupByProp<K extends keyof any, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K,
  propSet: Iterable<K>
): Record<K, V[]>;
/**
 *
 * @param values
 * @param keySelector
 * @category Lookup
 * @example ```typescript
 * const { num1, num2, num3 } = groupByProp(
 *   [1, 2, 100, 200],
 *   (num) => `num` + num.toString().length
 * );
 * // num1 → [1, 2]
 * // num2 → undefined
 * // num3 → [100, 200]
 * ```
 */
export function groupByProp<K extends keyof any, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K
): Partial<Record<K, V[]>>;
export function groupByProp<K extends keyof any, V>(
  values: Iterable<V>,
  keySelector: (item: V) => K,
  propSet?: Iterable<K>
): Partial<Record<K, V[]>> | Record<K, V[]> {
  const result: Partial<Record<K, V[]>> = {};
  if (propSet != null) {
    for (const key of propSet) {
      result[key] = [];
    }
  }
  for (const item of values) {
    const key = keySelector(item);
    const group = result[key];
    if (group != null) {
      group.push(item);
    } else {
      result[key] = [item];
    }
  }
  return result;
}
