/**
 * Sets or updates the given key in the given array.
 *
 * The producer can be a function, that will only receive a value, if it's present.
 * This means that `arguments.length` will be `0`, if the key doesn't exist yet.
 * You may pass in a function, if you can easily handle `undefined` in an unambiguous way,
 * e.g. `setOrUpdate(array, key, (count) => (count ?? 0) + 1)` .
 *
 * The producer may also be an object with `onSet` and `onUpdate`,
 * which provide stronger typings than the single function for both cases.
 * @param array the array to work with
 * @param index the queried index
 * @param producer a function or object to set or update a value in the array
 * @category Mutating
 */
export function setOrUpdateInArray<T>(
  array: T[],
  index: number,
  producer:
    | ((existingValue?: T) => T)
    | { onSet: () => T; onUpdate: (existingValue: T) => T }
) {
  const onSet = (producer as any).onSet ?? producer;
  const onUpdate = (producer as any).onUpdate ?? producer;
  const item = array[index];
  if (item != null) {
    array[index] = onUpdate(item);
  } else {
    array[index] = onSet();
  }
}
