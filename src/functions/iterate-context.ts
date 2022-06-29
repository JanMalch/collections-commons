/**
 *
 * @param iterable
 * @category Iterables: Iterator
 * @example ```typescript
 * const someIterable = new Set([1,2,3,4]);
 * for (const { value, isLast } of withContext(someIterable)) {
 *   console.log(value, isLast);
 *   // [LOG]: 1, false
 *   // [LOG]: 2, false
 *   // [LOG]: 3, false
 *   // [LOG]: 4, true
 * }
 * ```
 */
export function* withContext<T>(
  iterable: Iterable<T>
): Generator<{ value: T; isFirst: boolean; isLast: boolean; index: number }> {
  const iterator = iterable[Symbol.iterator]();
  let item = iterator.next();
  if (item.done) {
    return;
  }
  let next = iterator.next();
  let isFirst = true;
  let index = 0;
  while (!item.done) {
    yield {
      value: item.value,
      index,
      isFirst,
      isLast: next.done === true,
    };
    item = next;
    next = iterator.next();
    index++;
    isFirst = false;
  }
}
