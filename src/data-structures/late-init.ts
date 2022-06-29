import { JsonSerializable } from '../types';

export type LateInitBehaviour =
  | 'mutable'
  | 'immutable:strict'
  | 'immutable:ignore';

export interface LateInit<T> extends JsonSerializable<T> {
  value: T;
  readonly isInitialized: boolean;
}

function lateInitMutable<T>(): LateInit<T> {
  let _value: T;
  let _isInitialized = false;
  return Object.freeze({
    get isInitialized() {
      return _isInitialized;
    },
    get value() {
      if (!_isInitialized) {
        throw new Error(`Value not initialized yet.`);
      }
      return _value;
    },
    set value(newValue: T) {
      _value = newValue;
      _isInitialized = true;
    },
    toJSON() {
      return this.value;
    },
  });
}

function lateInitImmutableStrict<T>(): LateInit<T> {
  let _value: T;
  let _isInitialized = false;
  return Object.freeze({
    get isInitialized() {
      return _isInitialized;
    },
    get value() {
      if (!_isInitialized) {
        throw new Error(`Value not initialized yet.`);
      }
      return _value;
    },
    set value(newValue: T) {
      if (_isInitialized) {
        throw new Error(`Value already initialized.`);
      }
      _value = newValue;
      _isInitialized = true;
    },
    toJSON() {
      return this.value;
    },
  });
}

function lateInitImmutableIgnore<T>(): LateInit<T> {
  let _value: T;
  let _isInitialized = false;
  return Object.freeze({
    get isInitialized() {
      return _isInitialized;
    },
    get value() {
      if (_isInitialized) {
        return _value;
      } else {
        throw new Error(`Value not initialized yet.`);
      }
    },
    set value(newValue: T) {
      if (!_isInitialized) {
        _value = newValue;
        _isInitialized = true;
      }
    },
    toJSON() {
      return this.value;
    },
  });
}

/**
 * Creates a container that holds a late initialized `value`.
 *
 * There are three different types of behaviours for that container:
 * - `mutable` will only throw if the value is read before it has been set
 * - `immutable:strict` will throw an error if the value is set more than once
 * - `immutable:ignore` will simply ignore any set values after the first one
 *
 * `immutable:strict` is the default behaviour.
 * @param behaviour the desired behaviour
 * @example ```typescript
 * let current: number;
 *
 * const container = lateInit<number>('mutable');
 * current = container.value;  // error, not initialized yet
 * container.value = 0;        // ok, value set to 0
 * current = container.value;  // ok, current === 0
 * container.value = 1;        // ok, value set to 1
 * current = container.value;  // ok, current === 1
 *
 * const container = lateInit<number>('immutable:strict');
 * current = container.value;  // error, not initialized yet
 * container.value = 0;        // ok, value set to 0
 * current = container.value;  // ok, current === 0
 * container.value = 1;        // error, once set changes are not allowed
 * current = container.value;  // ok, current === 0
 *
 * const container = lateInit<number>('immutable:ignore');
 * current = container.value;  // error, not initialized yet
 * container.value = 0;        // ok, value set to 0
 * current = container.value;  // ok, current === 0
 * container.value = 1;        // ok, but value is ignored without error!
 * current = container.value;  // ok, current === 0
 * ```
 */
export function lateInit<T>(
  behaviour: LateInitBehaviour = 'immutable:strict'
): LateInit<T> {
  switch (behaviour) {
    case 'mutable':
      return lateInitMutable();
    case 'immutable:strict':
      return lateInitImmutableStrict();
    case 'immutable:ignore':
      return lateInitImmutableIgnore();
    default:
      throw new Error(`Unknown late init behaviour '${behaviour}'.`);
  }
}
