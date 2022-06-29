const unsupportedErrorMessage =
  'Unsupported method. Inherently cannot iterate over a WeakMap.';

/**
 * An adapter around a [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
 * to fulfill the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) interface.
 *
 * **Note that this class does not change the inherent behaviour of a `WeakMap`.
 * All methods that iterate over keys or values will throw an error, and references are still weak.**
 *
 * However, the adapter does enable the use of the `clear` method and keeps track of the `size`, by updating a counter
 * when using the appropriate `set`, `delete`, and `clear` methods.
 */
export class WeakMapAdapter<K extends object, V> implements Map<K, V> {
  readonly [Symbol.toStringTag] = 'WeakMapAdapter';

  // not passed in via constructor, because we swap the instance in `clear()`.
  #weakMap = new WeakMap<K, V>();

  #size = 0;
  get size(): number {
    return this.#size;
  }

  /**
   * Throws an error, because iterating is not supported in WeakMaps.
   */
  [Symbol.iterator](): never {
    throw new Error(unsupportedErrorMessage);
  }

  get(key: K): V | undefined {
    return this.#weakMap.get(key);
  }

  has(key: K): boolean {
    return this.#weakMap.has(key);
  }

  set(key: K, value: V): this {
    this.#weakMap.set(key, value);
    this.#size++;
    return this;
  }

  delete(key: K): boolean {
    const deleted = this.#weakMap.delete(key);
    if (deleted) {
      this.#size--;
    }
    return deleted;
  }

  clear(): void {
    this.#weakMap = new WeakMap<K, V>();
    this.#size = 0;
  }

  /**
   * Throws an error, because iterating is not supported in WeakMaps.
   */
  keys(): never {
    throw new Error(unsupportedErrorMessage);
  }

  /**
   * Throws an error, because iterating is not supported in WeakMaps.
   */
  values(): never {
    throw new Error(unsupportedErrorMessage);
  }

  /**
   * Throws an error, because iterating is not supported in WeakMaps.
   */
  entries(): never {
    throw new Error(unsupportedErrorMessage);
  }

  /* eslint-disable @typescript-eslint/no-unused-vars*/
  /**
   * Throws an error, because iterating is not supported in WeakMaps.
   * @param callbackfn callback function, never used
   * @param thisArg thisArg, never used
   */
  forEach(
    callbackfn?: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): never {
    throw new Error(unsupportedErrorMessage);
  }
  /* eslint-enable @typescript-eslint/no-unused-vars */
}
