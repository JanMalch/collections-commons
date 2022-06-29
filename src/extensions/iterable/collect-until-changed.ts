/**
 * @category Lookup
 */
export function groupByUntilChanged<T, K>(
  iterable: Iterable<T>,
  selector: (item: T) => K,
  includeKey: true
): Array<{ key: K; items: T[] }>;
/**
 * @category Lookup
 */
export function groupByUntilChanged<T, K>(
  iterable: Iterable<T>,
  selector: (item: T) => K,
  includeKey?: false
): Array<T[]>;
export function groupByUntilChanged<T, K>(
  iterable: Iterable<T>,
  selector: (item: T) => K,
  includeKey = false
): Array<{ key: K; items: T[] }> | Array<T[]> {
  const result: any[] = [];
  let previous: K | undefined = undefined;
  for (const item of iterable) {
    const key = selector(item);
    if (result.length === 0) {
      // initial item
      if (includeKey) {
        result.push({ key, items: [item] });
      } else {
        result.push([item]);
      }
    } else if (previous === key) {
      // still same group
      const currentGroup = result[result.length - 1];
      if (includeKey) {
        currentGroup.items.push(item);
      } else {
        currentGroup.push(item);
      }
    } else {
      // new group
      if (includeKey) {
        result.push({ key, items: [item] });
      } else {
        result.push([item]);
      }
    }
    previous = key;
  }
  return result;
}
