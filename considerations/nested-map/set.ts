import { PickMap } from '../../types';
import { computeIfAbsent } from '../map';
import { KeysOfNestedMaps, ValueOfNestedMaps } from './types';

export function setNested<K, V>(
  map: PickMap<K, V, 'has' | 'set' | 'get'>,
  keys: KeysOfNestedMaps<K, V>,
  value: ValueOfNestedMaps<V>
): void {
  let current: PickMap<any, any, 'has' | 'set' | 'get'> = map;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i + 1 === keys.length) {
      current.set(key, value);
      return;
    }
    current = computeIfAbsent(current, key, () => new Map());
  }
}

// FIXME: clearNested, deleteNested, etc.
