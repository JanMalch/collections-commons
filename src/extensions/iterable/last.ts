export function lastOrElse<T>(iterable: Iterable<T>, producer: () => T): T {
  const it = iterable[Symbol.iterator]();
  let item = it.next();
  if (item.done) {
    // if iterable is empty
    return producer();
  }
  do {
    const next = it.next();
    if (next.done) {
      return item.value;
    }
    item = next;
  } while (!item.done);
  // This should be unreachable. Maybe refactor loop?
  throw new Error('Unexpected end of loop.');
}

export function last<T>(iterable: Iterable<T>): T | undefined {
  return lastOrElse(iterable, () => undefined);
}

export function lastOrDefault<T>(iterable: Iterable<T>, defaultValue: T): T {
  return lastOrElse(iterable, () => defaultValue);
}

export function lastOrThrow<T>(
  iterable: Iterable<T>,
  message = 'No elements in iterable.'
): T {
  return lastOrElse(iterable, () => {
    throw new Error(message);
  });
}
