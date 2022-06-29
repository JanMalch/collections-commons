import { PickMap } from '../../types';

export function deleteIf<
  K,
  V,
  M extends PickMap<K, V, 'delete'> & Iterable<[K, V]>
>(map: M, predicate: (entry: [K, V]) => boolean): M {
  for (const entry of map) {
    if (predicate(entry)) {
      map.delete(entry[0]);
    }
  }
  return map;
}
