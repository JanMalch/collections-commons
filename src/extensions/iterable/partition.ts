/**
 * @category Lookup
 */
export function partition<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean
): [trueValues: T[], falseValues: T[]] {
  const trueValues: T[] = [];
  const falseValues: T[] = [];
  for (const item of iterable) {
    const result = predicate(item);
    if (result) {
      trueValues.push(item);
    } else {
      falseValues.push(item);
    }
  }
  return [trueValues, falseValues];
}
