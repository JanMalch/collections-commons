import { computeIfAbsent } from '../map';

export function setOne<K, V>(map: Map<K, V[]>, key: K, value: V) {
  map.set(key, [value]);
}

export function addAll<K, V>(map: Map<K, V[]>, key: K, value: Iterable<V>) {
  computeIfAbsent(map, key, () => []).push(...value);
}

export function addOne<K, V>(map: Map<K, V[]>, key: K, value: V) {
  computeIfAbsent(map, key, () => []).push(value);
}

export function addAllIfAbsent<K, V>(
  map: Map<K, V[]>,
  key: K,
  value: Iterable<V>
) {
  if (!map.has(key)) {
    addAll(map, key, value);
  }
}

export function addOneIfAbsent<K, V>(map: Map<K, V[]>, key: K, value: V) {
  if (!map.has(key)) {
    addOne(map, key, value);
  }
}

export function addAllByGrouping<K, V>(
  map: Map<K, V[]>,
  iterable: Iterable<V>,
  keySelector: (value: V) => K
) {
  for (const value of iterable) {
    addOne(map, keySelector(value), value);
  }
}

export function addAllFromMap<K, V>(
  destination: Map<K, V[]>,
  source: Map<K, V[]>
) {
  for (const key of source.keys()) {
    computeIfAbsent(destination, key, () => []).push(...source.get(key)!);
  }
}

export function addOneFromMap<K, V>(
  destination: Map<K, V[]>,
  source: Map<K, V>
) {
  for (const key of source.keys()) {
    computeIfAbsent(destination, key, () => []).push(source.get(key)!);
  }
}
