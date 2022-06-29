/**
 * Clones the given array and shuffles it.
 * @param array the array to shuffle
 * @param generator a function that returns a random value between 0 (inclusive) and 1 (exclusive), `Math.random` by default
 * @category Factory
 */
export function shuffle<T>(
  array: readonly T[],
  generator: () => number = Math.random
): T[] {
  const clone = array.slice(0);
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(generator() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}
