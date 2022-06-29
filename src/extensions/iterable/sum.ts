import { identity } from '../../functions';

/**
 *
 * @param iterable
 * @param selector
 * @category Reducers
 */
export function sum(
  iterable: Iterable<number>,
  selector?: (item: number) => number
): number;
/**
 *
 * @param iterable
 * @param selector
 * @category Reducers
 */
export function sum<T>(
  iterable: Iterable<T>,
  selector: (item: T) => number
): number;
export function sum<T>(
  iterable: Iterable<T>,
  selector: (item: T) => number = identity as (item: T) => number
): number {
  let sum = 0;
  for (const item of iterable) {
    sum += selector(item);
  }
  return sum;
}
