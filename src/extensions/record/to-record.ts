/**
 * @param entries
 * @category Record
 */
export function toRecord<K extends keyof any, V>(
  entries: Iterable<[K, V]>
): Record<K, V> {
  const result = {} as Record<K, V>;
  for (const [key, value] of entries) {
    const typeOfKey = typeof key;
    if (
      typeOfKey !== 'string' &&
      typeOfKey !== 'number' &&
      typeOfKey !== 'symbol'
    ) {
      throw new TypeError(
        `Key ${key.toString()} of type ${typeOfKey} cannot be used for records.`
      );
    }
    result[key] = value;
  }
  return result;
}
