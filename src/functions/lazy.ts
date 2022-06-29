/**
 * Creates a function that will invoke the given producer once
 * and cache the value for future invocations.
 * @param producer a function to produce a value
 * @category Lazy
 */
export function lazy<T>(producer: () => T) {
  let value: T;
  let computed = false;
  return (): T => {
    if (!computed) {
      value = producer();
      computed = true;
    }
    return value;
  };
}
