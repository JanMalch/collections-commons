import { PickMap } from '../../types';
import { KeysOfNestedMaps, ValueOfNestedMaps } from './types';

export function getNestedOrElse<K, V>(
  map: PickMap<K, V, 'get' | 'has'>,
  keys: KeysOfNestedMaps<K, V>,
  producer: (key: KeysOfNestedMaps<K, V>) => ValueOfNestedMaps<V>
): ValueOfNestedMaps<V> {
  let current: PickMap<any, any, 'get' | 'has'> = map;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i + 1 === keys.length) {
      return current.has(key) ? current.get(key)! : producer(keys);
    }
    current = current.get(key);
    if (current == null) {
      break;
    }
  }
  return producer(keys);
}

export function getNested<K, V>(
  map: PickMap<K, V, 'get' | 'has'>,
  keys: KeysOfNestedMaps<K, V>
): ValueOfNestedMaps<V> | undefined {
  return getNestedOrElse(map, keys, () => undefined as ValueOfNestedMaps<V>);
}

export function getNestedOrDefault<K, V>(
  map: PickMap<K, V, 'get' | 'has'>,
  keys: KeysOfNestedMaps<K, V>,
  defaultValue: ValueOfNestedMaps<V>
): ValueOfNestedMaps<V> {
  return getNestedOrElse(map, keys, () => defaultValue);
}

export function getNestedOrThrow<K, V>(
  map: PickMap<K, V, 'get' | 'has'>,
  keys: KeysOfNestedMaps<K, V>,
  message = `No value associated with the keys ${keys}.`
): ValueOfNestedMaps<V> {
  return getNestedOrElse(map, keys, () => {
    throw new Error(message);
  });
}
