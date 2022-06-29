/**
 * @category Find
 */
export function lastOrElse<T>(iterable: Iterable<T>, producer: () => T): T {
  if (Array.isArray(iterable)) {
    return iterable.length === 0 ? producer() : iterable[iterable.length - 1];
  }
  let isEmpty = true;
  let last: T;
  for (const value of iterable) {
    last = value;
    isEmpty = false;
  }
  return isEmpty ? producer() : last!;
}

/**
 * @category Find
 */
export function last<T>(iterable: Iterable<T>): T | undefined {
  return lastOrElse(iterable, () => undefined);
}

/**
 * @category Find
 */
export function lastOrDefault<T>(iterable: Iterable<T>, defaultValue: T): T {
  return lastOrElse(iterable, () => defaultValue);
}

/**
 * @category Find
 */
export function lastOrThrow<T>(
  iterable: Iterable<T>,
  message = 'No elements in iterable.'
): T {
  return lastOrElse(iterable, () => {
    throw new Error(message);
  });
}
