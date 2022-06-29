import { PickMap } from '../types';
import { computeIfAbsent } from '../extensions';

/**
 * Returns a new function, that returns and caches the results of the given function,
 * solely based on the single argument.
 *
 * Think of it as a slimmed down version of `memoize`, by only supporting functions with
 * a single argument and comparing by reference.
 * This increases performance but reduces possible applications.
 * @param producer a function to produce the value for the given key
 * @param cache a map to act as the cache
 * @see {@link extensions/iterable!eagerLookup}
 * @category Lazy
 */
export function lazyLookup<K, V>(
  producer: (key: K) => V,
  cache: PickMap<K, V, 'has' | 'set' | 'get'> = new Map()
): (key: K) => V {
  return (key: K): V => computeIfAbsent(cache, key, producer);
}
