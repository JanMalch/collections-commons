import { identity } from '../../functions';

/**
 * @category Duplicates
 */
export function distinct<T>(
  iterable: Iterable<T>,
  selector: (item: T) => any = identity
): T[] {
  return Array.from(yieldUniques(iterable, selector));
}

/**
 * @category Duplicates
 */
export function* yieldUniques<T>(
  iterable: Iterable<T>,
  selector: (item: T) => any = identity
) {
  const set = new Set<any>();
  for (const item of iterable) {
    const key = selector(item);
    if (set.has(key)) {
      continue;
    }
    set.add(key);
    yield item;
  }
}
