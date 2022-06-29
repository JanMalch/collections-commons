export function firstOrElse<T>(iterable: Iterable<T>, producer: () => T): T {
  const first = iterable[Symbol.iterator]().next();
  if (first.done) {
    return producer();
  }
  return first.value;
}

export function first<T>(iterable: Iterable<T>): T | undefined {
  return firstOrElse(iterable, () => undefined);
}

export function firstOrDefault<T>(iterable: Iterable<T>, defaultValue: T): T {
  return firstOrElse(iterable, () => defaultValue);
}

export function firstOrThrow<T>(
  iterable: Iterable<T>,
  message = 'No elements in iterable.'
): T {
  return firstOrElse(iterable, () => {
    throw new Error(message);
  });
}
