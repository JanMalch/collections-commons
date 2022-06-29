import { identity } from '../../functions';

/**
 * @category Record
 */
export function mapRecord<
  T extends Record<string, any>,
  V extends Partial<{ [K in keyof T]: (value: T[K], key: K) => any }>
>(
  record: T,
  transformers: V
): {
  [K in keyof T]: T[K];
} & { [K in keyof V]: ReturnType<NonNullable<V[K]>> } {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) =>
      (transformers[key] ?? identity)(value, key)
    )
  ) as any;
}
