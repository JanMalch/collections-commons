import LRUCache from 'lru-cache';

export class LeastRecentlyUsedMap<K, V>
  extends LRUCache<K, V>
  implements Map<K, V>
{
  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }
  get [Symbol.toStringTag](): string {
    return 'LeastRecentlyUsedMap';
  }

  static withMax<K, V>(max: number): LeastRecentlyUsedMap<K, V> {
    return new LeastRecentlyUsedMap<K, V>({ max });
  }
}
