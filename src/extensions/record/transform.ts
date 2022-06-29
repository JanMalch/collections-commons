export function mapRecord<
  T extends Record<string, any>,
  V extends { [K in keyof T]: (value: T[K], key: K) => any }
>(record: T, transformers: V): { [K in keyof T]: ReturnType<V[K]> } {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => transformers[key](value, key))
  ) as { [K in keyof T]: ReturnType<V[K]> };
}
