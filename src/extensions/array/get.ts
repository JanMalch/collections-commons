/**
 * Gets the item at the given index of the given array.
 * Throws an error if the index is out of bounds.
 * @param array an array
 * @param index the queried index
 * @param message an optional error message
 * @see getOrThrow
 * @category Get from array
 */
export function getInBounds<T>(
  array: readonly T[],
  index: number,
  message = `Index out of bounds: ${index}`
): T {
  if (index < 0 || index >= array.length) {
    throw new Error(message);
  }
  return array[index];
}

/**
 * Replicates [`Array.prototype.at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
 * @param array
 * @param index
 * @category Get from array
 */
export function itemAt<T>(array: T[], index: number): T | undefined {
  if (index < 0) {
    index += array.length;
  }
  return array[index];
}

/**
 * Gets the item at the given index of the given array.
 * A negative index counts back from the last item in the array.
 * Can still throw an error if the index is out of bounds.
 *
 * Replicates [`Array.prototype.at()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
 * @param array an array
 * @param index the queried index
 * @param message an optional error message
 * @see getOrThrow
 * @category Get from array
 */
export function getInBoundsAt<T>(
  array: readonly T[],
  index: number,
  message?: string
): T {
  if (index < 0) {
    index += array.length;
  }
  return getInBounds(array, index, message);
}

/**
 * Returns a random value from the given array.
 * Throws an error if the array is empty.
 * @param array the array to return a random value from
 * @param generator a function that returns a random value between 0 (inclusive) and 1 (exclusive), `Math.random` by default
 * @category Get from array
 */
export function randomItem<T>(
  array: readonly T[],
  generator: () => number = Math.random
): T {
  if (array.length === 0) {
    throw new Error(`Array may not be empty.`);
  }
  if (array.length === 1) {
    return array[0];
  }
  return array[Math.floor(generator() * array.length)];
}

/**
 *
 * @param array
 * @category Get from array
 */
export function lastItem<T>(array: readonly T[]): T | undefined {
  return array[array.length - 1];
}
