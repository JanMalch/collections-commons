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

export function lateInit<T>(
  behaviour: LateInitBehaviour = 'mutable'
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
