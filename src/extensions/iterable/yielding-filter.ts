function* yieldingFilterForArray<T>(
  array: T[],
  predicate: (item: T) => boolean,
  {
    inputLimit,
    outputLimit,
    startIndex,
  }: {
    inputLimit: number;
    outputLimit: number;
    startIndex: number;
  }
): Generator<T, void> {
  let outputCount = 0;
  const limit = Math.min(inputLimit, array.length);
  for (let i = startIndex; i < limit; i++) {
    const item = array[i];
    if (predicate(item)) {
      yield item;
      outputCount++;
      if (outputCount >= outputLimit) {
        return;
      }
    }
  }
}

function* yieldingFilterForIterable<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean,
  {
    inputLimit,
    outputLimit,
    startIndex,
  }: {
    inputLimit: number;
    outputLimit: number;
    startIndex: number;
  }
): Generator<T, void> {
  let inputCount = 0 - startIndex;
  let outputCount = 0;
  for (const item of iterable) {
    inputCount++;
    if (inputCount <= 0) {
      continue;
    }
    if (predicate(item)) {
      yield item;
      outputCount++;
      if (outputCount >= outputLimit) {
        return;
      }
    }
    if (inputCount >= inputLimit) {
      return;
    }
  }
}

/**
 *
 *
 * Use this if you want to avoid a new array when using `Array#filter`, e.g. when the input array is very large.
 * Very much depending on the inputs and the hardware,
 * this function will be more efficient than `Array#filter` at 10,000+ items.
 * @param iterable
 * @param predicate
 * @param options
 * @category Filter
 */
export function yieldingFilter<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (item: T) => item is U,
  options?: {
    inputLimit?: number;
    outputLimit?: number;
    startIndex?: number;
  }
): Generator<U, void>;
/**
 *
 *
 * Use this if you want to avoid a new array when using `Array#filter`, e.g. when the input array is very large.
 * Very much depending on the inputs and the hardware,
 * this function will be more efficient than `Array#filter` at 10,000+ items.
 * @param iterable
 * @param predicate
 * @param options
 * @category Filter
 */
export function yieldingFilter<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean,
  options?: {
    inputLimit?: number;
    outputLimit?: number;
    startIndex?: number;
  }
): Generator<T, void>;
export function* yieldingFilter<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean,
  {
    inputLimit = Number.POSITIVE_INFINITY,
    outputLimit = Number.POSITIVE_INFINITY,
    startIndex = 0,
  }: {
    inputLimit?: number;
    outputLimit?: number;
    startIndex?: number;
  } = {}
): Generator<T, void> {
  const options = {
    inputLimit,
    outputLimit,
    startIndex,
  };
  return Array.isArray(iterable)
    ? yield* yieldingFilterForArray(iterable, predicate, options)
    : yield* yieldingFilterForIterable(iterable, predicate, options);
}
