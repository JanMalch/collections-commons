import { strictEqual } from '../../functions';

export function removeAll<T>(
  array: T[],
  itemsToRemove: T[],
  equalsPredicate: (a: T, b: T) => boolean = strictEqual
): T[] {
  return array.filter(
    (item) => !itemsToRemove.some((r) => equalsPredicate(r, item))
  );
}

export function retainAll<T>(
  array: T[],
  itemsToKeep: T[],
  equalsPredicate: (a: T, b: T) => boolean = strictEqual
): T[] {
  return array.filter((item) =>
    itemsToKeep.some((r) => equalsPredicate(r, item))
  );
}
