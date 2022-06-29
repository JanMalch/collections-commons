import { MaximumTracker, MinimumTracker } from '../../data-structures';

/**
 * @category Reducers
 */
export function minBy<T>(
  iterable: Iterable<T>,
  selector: (item: T) => number
): [item: T, value: number] | [] {
  const min = new MinimumTracker<T>(selector);
  for (const item of iterable) {
    min.consider(item);
  }
  return min.result;
}

/**
 * @category Reducers
 */
export function maxBy<T>(
  iterable: Iterable<T>,
  selector: (item: T) => number
): [item: T, value: number] | [] {
  const max = new MaximumTracker<T>(selector);
  for (const item of iterable) {
    max.consider(item);
  }
  return max.result;
}
