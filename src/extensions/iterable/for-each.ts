/**
 * Invokes the given callback for each item in the given iterable.
 * @param iterable any iterable
 * @param callback the callback to invoke per item
 * @category For-each
 * @example ```typescript
 * declare const map: Map<string, MyObject>;
 * Array.from(map.values()).forEach(obj => obj.doSomething()); // creates a new array unnecessarily
 * forEach(map.values(), obj => obj.doSomething()); // one-liner but no new array
 * forEach(map.values(), withCounter((obj, i) => obj.doSomething(i)); // use withCounter for a kind of index
 * ```
 */
export function forEach<T>(
  iterable: Iterable<T>,
  callback: (item: T) => void
): void {
  for (const item of iterable) {
    callback(item);
  }
}

/**
 * @category For-each
 */
export function forEachUnique<T, K>(
  iterable: Iterable<T>,
  selector: (item: T) => K,
  callback: (item: T) => void
): void {
  const seen = new Set<K>();
  for (const item of iterable) {
    const key = selector(item);
    if (!seen.has(key)) {
      callback(item);
      seen.add(key);
    }
  }
}
