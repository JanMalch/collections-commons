export const strictEqual = <T>(a: T, b: T) => a === b;
export const strictEqualOrNullish = <T>(a: T, b: T) =>
  a == null && b == null ? true : a === b;
export const lenientEqual = <T>(a: T, b: T) => a == b;
export const jsonEqual = <T>(a: T, b: T) =>
  JSON.stringify(a) === JSON.stringify(b);

export function strictEqualBy<T, U>(
  selector: (value: T) => U
): (a: T, b: T) => boolean {
  return (a: T, b: T) => selector(a) === selector(b);
}

export function isIterable(value: any): value is Iterable<unknown> {
  return value != null && typeof value[Symbol.iterator] === 'function';
}
