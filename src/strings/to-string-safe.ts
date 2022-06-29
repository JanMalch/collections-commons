/**
 * Returns the string `'null'`.
 * @param value `null`
 */
export function toStringSafe(value: null): 'null';
/**
 * Returns the string `'undefined'`.
 * @param value `undefined`
 */
export function toStringSafe(value: undefined): 'undefined';
/**
 * Returns the given string as is.
 * @param value the string to return
 */
export function toStringSafe<S extends string>(value: S): S;
/**
 * Returns the result of the `toString()` method on the given value.
 * @param value the value to transform into a string
 */
export function toStringSafe<S extends string>(value: { toString(): S }): S;
export function toStringSafe(v: any) {
  return v == null ? `${v}` : v.toString();
}
