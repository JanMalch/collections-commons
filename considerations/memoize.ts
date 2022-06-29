import { computeIfAbsent, PickMap, WeakMapAdapter } from '../src';
import { joinToKey } from './join-to-key';

/**
 *
 * @param fn
 * @param options
 * @see Memoize
 * @see lazyLookup
 */
export function memoize<T extends (...args: any[]) => any, K = any>(
  fn: T,
  options?:
    | {
        cache?: PickMap<string, ReturnType<T>, 'has' | 'set' | 'get'>;
        keySelector?: undefined;
      }
    | {
        cache?: PickMap<K, ReturnType<T>, 'has' | 'set' | 'get'>;
        keySelector?: (...args: Parameters<T>) => K;
      }
): T {
  const cache = options?.cache ?? new Map();
  const keySelector =
    options?.keySelector ?? ((...args: Parameters<T>) => joinToKey(args));
  return ((...args: Parameters<T>): ReturnType<T> =>
    computeIfAbsent(cache, keySelector(...args), () => fn(...args))) as T;
}

/**
 *
 * @param options
 * @see memoize
 * @see lazyLookup
 */
export function Memoize<T extends (...args: any[]) => any, K = any>(options?: {
  cacheFactory?: () => Map<K, ReturnType<T>>;
  keySelector?: (...args: Parameters<T>) => K;
  perInstance?: boolean;
}): MethodDecorator {
  const cacheFactory = options?.cacheFactory ?? (() => new Map());
  const keySelector =
    options?.keySelector ?? ((...args: Parameters<T>) => joinToKey(args));
  const perInstance = options?.perInstance ?? false;
  return function MemoizeDecorator(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): TypedPropertyDescriptor<any> | void {
    const method: T = descriptor.value;
    let getCache: (instance: any) => Parameters<typeof computeIfAbsent>[0];
    if (perInstance) {
      const cacheByInstance = new WeakMapAdapter<any, Map<any, any>>();
      getCache = (instance) =>
        computeIfAbsent(cacheByInstance, instance, cacheFactory);
    } else {
      const cache = cacheFactory();
      getCache = () => cache;
    }
    descriptor.value = function (...args: Parameters<T>): ReturnType<T> {
      const cache = getCache(this);
      return computeIfAbsent(cache, keySelector(...args), () =>
        method.apply(this, args)
      );
    };
  };
}
