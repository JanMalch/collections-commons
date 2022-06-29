/**
 * An object to keep track of an item with a certain value based on the given predicate.
 * @see MinimumTracker
 * @see MaximumTracker
 * @see minBy
 * @see maxBy
 * @example
 * ```typescript
 * export class MinimumTracker<T> extends ValueTracker<T, number> {
 *   constructor(getValue: (item: T) => number) {
 *     super(getValue, ([, current], [, candidate]) => candidate < current);
 *   }
 * }
 *
 * export function minBy<T>(
 *   iterable: Iterable<T>,
 *   selector: (item: T) => number
 * ): [item: T, value: number] | [] {
 *   const min = new MinimumTracker<T>(selector);
 *   for (const item of iterable) {
 *     min.consider(item);
 *   }
 *   return min.result;
 * }
 * ```
 */
export class ValueTracker<T, V> {
  private _result?: [item: T, value: V];
  get result(): [item: T, value: V] | [] {
    return (this._result?.slice(0) ?? []) as [item: T, value: V] | [];
  }

  constructor(
    protected readonly getValue: (item: T) => V,
    protected readonly predicate: (
      current: [item: T, value: V],
      candidate: [item: T, value: V]
    ) => boolean
  ) {}

  consider(item: T): boolean {
    const itemValue: V = this.getValue(item);
    const pair: [T, V] = [item, itemValue];
    // FIXME: == null is bad because it bypasses the predicate
    if (this._result == null || this.predicate(this._result, pair)) {
      this._result = pair;
      return true;
    }
    return false;
  }
}

/**
 * An object to keep track of an item considered to be a minimum, based on the given `getValue` selector.
 * @see {@link ValueTracker}
 * @see {@link MaximumTracker}
 * @see {@link minBy}
 * @see {@link maxBy}
 * @example
 * ```typescript
 * export function minBy<T>(
 *   iterable: Iterable<T>,
 *   selector: (item: T) => number
 * ): [item: T, value: number] | [] {
 *   const min = new MinimumTracker<T>(selector);
 *   for (const item of iterable) {
 *     min.consider(item);
 *   }
 *   return min.result;
 * }
 * ```
 */
export class MinimumTracker<T> extends ValueTracker<T, number> {
  constructor(getValue: (item: T) => number) {
    super(getValue, ([, current], [, candidate]) => candidate < current);
  }
}

/**
 * An object to keep track of an item considered to be a maximum, based on the given `getValue` selector.
 * @see MinimumTracker
 * @see MaximumTracker
 * @see minBy
 * @see maxBy
 * @example
 * ```typescript
 * export function maxBy<T>(
 *   iterable: Iterable<T>,
 *   selector: (item: T) => number
 * ): [item: T, value: number] | [] {
 *   const max = new MaximumTracker<T>(selector);
 *   for (const item of iterable) {
 *     max.consider(item);
 *   }
 *   return max.result;
 * }
 * ```
 */
export class MaximumTracker<T> extends ValueTracker<T, number> {
  constructor(getValue: (item: T) => number) {
    super(getValue, ([, current], [, candidate]) => candidate > current);
  }
}
