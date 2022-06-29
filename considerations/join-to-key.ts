import { toStringSafe, isIterable } from '../src';

export const joinToKeySeparator = String.fromCharCode(31);
export const joinToKeyTransform = (v: any): string => {
  if (typeof v === 'string') {
    return v;
  }
  if (v instanceof Date) {
    return v.toISOString();
  }
  if (isIterable(v)) {
    return `[${Array.from(v, joinToKeyTransform).join(joinToKeySeparator)}]`;
  }
  const result = toStringSafe(v);
  if (result === '[object Object]') {
    return JSON.stringify(v);
  }
  return result;
};

export function joinToKey<T>(
  iterable: Iterable<T>,
  transform: (v: T) => string = joinToKeyTransform
): string {
  let result = '';
  for (const item of iterable) {
    result += `${transform(item)}${joinToKeySeparator}`;
  }
  return result.slice(0, -1);
}
