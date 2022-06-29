/**
 * @category Predicates
 */
export const strictEqual = <T>(a: T, b: T) => a === b;
/**
 * @category Predicates
 */
export const strictEqualOrNullish = <T>(a: T, b: T) =>
  a == null && b == null ? true : a === b;
/**
 * @category Predicates
 */
export const lenientEqual = <T>(a: T, b: T) => a == b;
/**
 * @category Predicates
 */
export const jsonEqual = <T>(a: T, b: T) =>
  JSON.stringify(a) === JSON.stringify(b);

/**
 * A function that always returns `true`.
 * @category Predicates
 */
export const alwaysTrue: (..._: any[]) => true = () => true;

/**
 * @category Predicates
 */
export function strictEqualBy<T, U>(
  selector: (value: T) => U
): (a: T, b: T) => boolean {
  return (a: T, b: T) => selector(a) === selector(b);
}

/**
 * @category Predicates
 */
export function isIterable(value: any): value is Iterable<unknown> {
  return value != null && typeof value[Symbol.iterator] === 'function';
}
