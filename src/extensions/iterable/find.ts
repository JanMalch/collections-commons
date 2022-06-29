export function findOrElse<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is U,
  producer: () => U
): U;
export function findOrElse<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  producer: () => T
): T;
export function findOrElse<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  producer: () => T
): T {
  for (const item of iterable) {
    if (predicate(item)) {
      return item;
    }
  }
  return producer();
}

export function findOrDefault<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is U,
  defaultValue: U
): U;
export function findOrDefault<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  defaultValue: T
): T;
export function findOrDefault<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  defaultValue: T
): T {
  return findOrElse(iterable, predicate, () => defaultValue);
}

export function findOrThrow<T, U extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is U,
  message?: string
): U;
export function findOrThrow<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  message?: string
): T;
export function findOrThrow<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean,
  message = 'No such element.'
): T {
  return findOrElse(iterable, predicate, () => {
    throw new Error(message);
  });
}

export function findIndex<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => boolean
): number {
  let i = 0;
  for (const item of iterable) {
    if (predicate(item)) {
      return i;
    }
    i++;
  }
  return -1;
}

export function indexOf<T>(iterable: Iterable<T>, searchElement: T): number {
  let i = 0;
  for (const item of iterable) {
    if (item === searchElement) {
      return i;
    }
    i++;
  }
  return -1;
}

export function includes<T>(iterable: Iterable<T>, searchElement: T): boolean {
  for (const item of iterable) {
    if (item === searchElement) {
      return true;
    }
  }
  return false;
}
