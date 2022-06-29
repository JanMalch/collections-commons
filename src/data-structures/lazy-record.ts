/**
 * Creates a read-only non-extensible record with properties based on the given definitions.
 * If the property in the definition is a function, it will only be executed once lazily,
 * i.e. on the first evaluation of the respective property.
 *
 * Trying to change or add a property will result in both compiler and runtime errors.
 * @param definition an object with fixed values, or functions to produce the values
 * @example ```typescript
 * let id = 0;
 * const getId = () => ++id;
 * // mix lazy functions with plain values
 * const obj = lazyRecord({ id: getId, name: 'TypeScript' });
 * expect(id).toBe(0); // getId not called yet, so global id is still 0
 * expect(obj.id).toBe(1); // calls getId once
 * expect(obj.id).toBe(1); // won't be called again and value stays the same
 * expect(id).toBe(1); // getId only called once, so global id is still 1
 * ```
 */
export function lazyRecord<T extends Record<keyof any, any>>(
  definition: T
): Readonly<{ [K in keyof T]: T[K] extends () => infer R ? R : T[K] }> {
  const lazy: Partial<{
    [K in keyof T]: T[K] extends () => infer R ? R : T[K];
  }> = {};

  for (const key of Object.keys(definition)) {
    if (typeof definition[key] === 'function') {
      Object.defineProperty(lazy, key, {
        get: () => {
          const value = definition[key]();
          Object.defineProperty(lazy, key, {
            value,
            writable: false,
            configurable: false,
            enumerable: true,
          });
          return value;
        },
        configurable: true,
        enumerable: true,
      });
    } else {
      Object.defineProperty(lazy, key, {
        value: definition[key],
        writable: false,
        configurable: false,
        enumerable: true,
      });
    }
  }

  return Object.preventExtensions(lazy) as {
    readonly [K in keyof T]: T[K] extends () => infer R ? R : T[K];
  };
}
