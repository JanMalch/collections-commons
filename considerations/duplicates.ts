import { groupBy, identity } from '../src';
import { filterMap } from './map/filter';

/**
 * @category Duplicates
 */
export function getDuplicates<T, K = T>(
  iterable: Iterable<T>,
  selector: (item: T) => K = identity as (item: T) => K
): Map<K, [T, T, ...T[]]> {
  return filterMap(
    groupBy(iterable, selector),
    (entry): entry is [K, [T, T, ...T[]]] => entry[1].length > 1
  );
}

/**
 * @category Duplicates
 */
export function hasDuplicates<T, K = T>(
  iterable: Iterable<T>,
  selector: (item: T) => K = identity as (item: T) => K
): boolean {
  const seen = new Set<K>();
  for (const item of iterable) {
    const key = selector(item);
    if (seen.has(key)) {
      return true;
    }
    seen.add(key);
  }
  return false;
}
