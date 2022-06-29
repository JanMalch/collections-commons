import { PickMap } from '../src';

/**
 * Sets or updates the given key in the given map.
 *
 * The producer can be a function, that will only receive a value, if it's present.
 * This means that `arguments.length` will be `0`, if the key doesn't exist yet.
 * You may pass in a function, if you can easily handle `undefined` in an unambiguous way,
 * e.g. `setOrUpdate(map, key, (count) => (count ?? 0) + 1)` .
 *
 * The producer may also be an object with `onSet` and `onUpdate` functions,
 * which provide stronger typings than the single function for both cases.
 *
 * Returns `true` if and only if the key was present in the map,
 * implying that its associated value was updated rather than set.
 * @param map the map to work with
 * @param key the queried key
 * @param producer a function or object to set or update a value in the map
 * @see updateIfPresent
 * @category Mutating
 */
export function setOrUpdate<K, V>(
  map: PickMap<K, V, 'has' | 'set' | 'get'>,
  key: K,
  producer:
    | ((existingValue?: V) => V)
    | { onSet: () => V; onUpdate: (existingValue: V) => V }
): boolean {
  const onSet = (producer as any).onSet ?? producer;
  const onUpdate = (producer as any).onUpdate ?? producer;
  const hasKey = map.has(key);
  if (hasKey) {
    map.set(key, onUpdate(map.get(key)!));
  } else {
    map.set(key, onSet());
  }
  return hasKey;
}
