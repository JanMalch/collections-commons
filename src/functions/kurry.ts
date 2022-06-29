export type Kurry<T extends (iterable: Iterable<any>, ...args: any) => any> =
  T extends (iter: infer I, ...args: infer P) => infer R
    ? (...args: P) => (iterable: I) => R
    : never;

export function kurry<T extends (iterable: Iterable<any>, ...args: any) => any>(
  fn: T
): Kurry<T> {
  return ((...args: any[]) =>
    (iterable: Iterable<any>) =>
      fn(iterable, ...args)) as any;
}
