/**
 * Interface for any object that resembles a `Map`.
 *
 * Specifically it makes the return types of `set` and `delete` irrelevant.
 */
export interface MapLike<K, V> extends Map<K, V> {
  set(key: K, value: V): any;
  delete(key: K): any;
}

/**
 * Utility type to only pick certain methods from a {@link MapLike} interface.
 */
export type PickMap<K, V, M extends keyof Map<K, V>> = Pick<MapLike<K, V>, M>;
