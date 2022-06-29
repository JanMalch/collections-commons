import { PartialMap } from '../types';
import { computeIfAbsent } from '../extensions';

/**
 * Returns a new function, that returns and caches the results of the given function,
 * solely based on the single argument.
 *
 * This is a slimmed down version of {@link memoize `memoize`}, by only supporting functions with
 * a single argument and comparing by reference.
 * This increases performance but reduces possible applications.
 * @param producer a function to produce the value for the given key
 * @param cache a map to act as the cache
 * @see computeIfAbsent
 * @see memoize
 */
export function lazyLookup<K, V>(
  producer: (key: K) => V,
  cache: PartialMap<K, V, 'has' | 'set' | 'get'> = new Map()
): (key: K) => V {
  return (key: K): V => computeIfAbsent(cache, key, producer);
}
