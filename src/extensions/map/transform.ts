import { PartialReadonlyMap } from '../../types';

export function partitionByKeyPresence<K>(
  map: PartialReadonlyMap<K, any, 'has'>,
  queriedKeys: Iterable<K>
): [present: Set<K>, absent: Set<K>] {
  const present = new Set<K>();
  const absent = new Set<K>();
  for (const key of queriedKeys) {
    if (map.has(key)) {
      present.add(key);
    } else {
      absent.add(key);
    }
  }
  return [present, absent];
}
