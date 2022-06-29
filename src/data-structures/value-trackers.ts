/**
 * An object to keep track of an item with a certain numeric value based on the given predicate.
 *
 * Items with a non-finite numeric value (e.g. `NEGATIVE_INFINITY`,`POSITIVE_INFINITY`, `NaN`, `null`, `undefined`),
 * determined by the given `getValue` function, are ignored.
 * @see {@link MinimumTracker}
 * @see {@link MaximumTracker}
 * @see {@link extensions/iterable!minBy}
 * @see {@link extensions/iterable!maxBy}
 * @example ```typescript
 * export class MinimumTracker<T> extends ValueTracker<T> {
 *   constructor(getValue: (item: T) => number) {
 *     super(getValue, (current, candidate) => candidate < current);
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
export abstract class ValueTracker<T> {
  protected _result?: [item: T, value: number];
  get result(): [item: T, value: number] | [] {
    return (this._result?.slice(0) ?? []) as [item: T, value: number] | [];
  }

  protected constructor(
    protected readonly getValue: (item: T) => number | null | undefined,
    protected readonly predicate: (
      current: number,
      candidate: number
    ) => boolean
  ) {}

  consider(item: T): boolean {
    const value = this.getValue(item);
    if (
      Number.isFinite(value) &&
      (this._result == null || this.predicate(this._result[1], value!))
    ) {
      this._result = [item, value!];
      return true;
    }
    return false;
  }
}

/**
 * An object to keep track of an item considered to be a minimum, based on the given `getValue` selector.
 *
 * Items with a non-finite numeric value (e.g. `NEGATIVE_INFINITY`,`POSITIVE_INFINITY`, `NaN`, `null`, `undefined`) are ignored.
 * @see {@link ValueTracker}
 * @see {@link MaximumTracker}
 * @see {@link extensions/iterable!minBy}
 * @see {@link extensions/iterable!maxBy}
 * @example ```typescript
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
export class MinimumTracker<T> extends ValueTracker<T> {
  constructor(getValue: (item: T) => number | null | undefined) {
    super(getValue, (current, candidate) => candidate < current);
  }
}

/**
 * An object to keep track of an item considered to be a maximum, based on the given `getValue` selector.
 *
 * Items with a non-finite numeric value (e.g. `NEGATIVE_INFINITY`,`POSITIVE_INFINITY`, `NaN`, `null`, `undefined`) are ignored.
 * @see MinimumTracker
 * @see MaximumTracker
 * @see {@link extensions/iterable!minBy}
 * @see {@link extensions/iterable!maxBy}
 * @example ```typescript
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
export class MaximumTracker<T> extends ValueTracker<T> {
  constructor(getValue: (item: T) => number | null | undefined) {
    super(getValue, (current, candidate) => candidate > current);
  }
}
