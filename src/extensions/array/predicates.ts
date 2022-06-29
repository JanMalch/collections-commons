import { identity, strictEqual } from '../../functions';

/**
 * @category Predicates
 */
export function areItemsEqual<T, U = T>(
  a: readonly T[],
  b: readonly T[],
  options?: {
    selector?: (item: T) => U;
    predicate?: (a: U, b: U) => boolean;
  }
): boolean {
  const predicate = options?.predicate ?? strictEqual;
  const selector = options?.selector ?? (identity as (item: T) => U);
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  return a.every((aItem, index) => {
    const bItem = b[index];
    return predicate(selector(aItem), selector(bItem));
  });
}

/**
 * @category Predicates
 */
export function hasSameItems<T, U = T>(
  a: readonly T[],
  b: readonly T[],
  options?: {
    selector?: (item: T) => U;
    predicate?: (a: U, b: U) => boolean;
  }
): boolean {
  const predicate = options?.predicate ?? strictEqual;
  const selector = options?.selector ?? (identity as (item: T) => U);
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  // FIXME: hasSameItems([0,0,0,1,1], [0,1,2,3,4]) === true :(
  return a.every((aItem) =>
    b.some((bItem) => predicate(selector(aItem), selector(bItem)))
  );
}
