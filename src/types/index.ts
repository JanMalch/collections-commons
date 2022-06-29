export interface MapLike<K, V> extends Map<K, V> {
  set(key: K, value: V): any;
  delete(key: K): any;
}

export type PartialReadonlyMap<K, V, M extends keyof ReadonlyMap<K, V>> = Pick<
  ReadonlyMap<K, V>,
  M
>;

export type PartialMap<K, V, M extends keyof Map<K, V>> = Pick<Map<K, V>, M>;

export type NonEmptyArray<T> = [T, ...T[]];

/**
 * An interface that marks implementing classes and objects as serializable with `JSON.stringify`.
 *
 * @typeParam T the type of the value to serialize via `JSON.stringify`.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior
 */
export interface JsonSerializable<T> {
  /**
   * Returns a value that represents this object and is also serializable with `JSON.stringify`.
   * @returns the value to serialize
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior
   * @example
   * ```typescript
   * export class Queue<T> implements JsonSerializable<T[]> {
   *   private readonly items: T[];
   *   toJSON(): T[] {
   *     return this.items.slice(0);
   *   }
   * }
   * ```
   */
  toJSON(): T;
}

export type Head<T> = T extends [infer U, ...any[]] ? U : never;
export type Tail<T> = T extends [any, ...infer U] ? U : never;
