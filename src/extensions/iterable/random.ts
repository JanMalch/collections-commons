/**
 * Returns a random value from the given iterable.
 * Throws an error if the iterable is empty.
 * @param iterable the iterable to return a random value from
 * @param generator a function that returns a random value between 0 (inclusive) and 1 (exclusive), `Math.random` by default
 * @category Find
 */
export function randomItem<T>(
  iterable: Iterable<T>,
  generator: () => number = Math.random
): T {
  const array = Array.isArray(iterable) ? iterable : Array.from(iterable);
  if (array.length === 0) {
    throw new Error(`Iterable may not be empty.`);
  }
  if (array.length === 1) {
    return array[0];
  }
  return array[Math.floor(generator() * array.length)];
}
