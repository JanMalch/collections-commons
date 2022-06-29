/**
 * Creates a function with a single parameter, that will call the given `fn` with the received argument
 * and an internal counter, that indicates how often this function was invoked.
 *
 * Not all iterables guarantee a consistent order or have the concept of an index.
 * That's why all callbacks for iterables extension functions accept only a single argument.
 * With the `withCounter` function you can include a counter/index in your callback.
 * **This means that you must not reuse the returned function, if you want the counter to match the index!
 * The internal counter cannot be reset.**
 * @param fn
 * @category Iterables: Iterator
 * @example ```typescript
 * const sumOfEvenIndices = sum(new Set([1,2,3,4]), withCounter((v, i) => (i % 2 === 0 ? v : 0)));
 * expect(sumOfEvenIndices).toBe(1 + 3);
 * ```
 */
export function withCounter<T, O>(
  fn: (value: T, counter: number) => O
): (value: T) => O {
  let counter = 0;
  return (value: T) => fn(value, counter++);
}
