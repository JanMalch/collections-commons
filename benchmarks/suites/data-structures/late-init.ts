import { Suite } from 'benchmark';
import { LateInit, lateInit } from '../../../src';

function whatever(num: number): number {
  return num * 2;
}

function addToJsonFunction(obj: any): void {
  Object.defineProperty(obj, 'toJSON', {
    value() {
      return this.value;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

function lateInitViaPropDef<T>(): LateInit<T> {
  let value: any;
  const obj: any = {};
  Object.defineProperty(obj, 'value', {
    get() {
      throw new Error(`Value not initialized yet.`);
    },
    set(v: any) {
      value = v;
      Object.defineProperty(obj, 'value', {
        value,
        enumerable: true,
        configurable: false,
        writable: true,
      });
      Object.defineProperty(obj, 'isInitialized', {
        value: true,
        enumerable: true,
        configurable: false,
        writable: false,
      });
    },
    enumerable: true,
    configurable: true,
  });
  Object.defineProperty(obj, 'isInitialized', {
    value: false,
    enumerable: true,
    configurable: true,
    writable: false,
  });
  addToJsonFunction(obj);
  return obj;
}

export function lateInitSuite() {
  new Suite()
    .add('write to lateInit:mutable', () => {
      const container = lateInit<number>();
      container.value = 5;
      container.value = 15;
      container.value = 25;
    })
    .add('write to lateInit:mutable, via defined prop', () => {
      const container = lateInitViaPropDef<number>();
      container.value = 5;
      container.value = 15;
      container.value = 25;
    })
    .add('write to plain object', () => {
      const container: { value?: number } = {};
      container.value = 5;
      container.value = 15;
      container.value = 25;
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: false });

  new Suite()
    .add('read from lateInit:mutable', () => {
      const container = lateInit<number>();
      if (container.isInitialized) {
        whatever(container.value);
      }
      container.value = 5;
      if (container.isInitialized) {
        whatever(container.value);
      }
      container.value = 15;
      if (container.isInitialized) {
        whatever(container.value);
      }
      container.value = 25;
      if (container.isInitialized) {
        whatever(container.value);
      }
    })
    .add('read from lateInit:mutable, via defined prop', () => {
      const container = lateInitViaPropDef<number>();
      if (container.isInitialized) {
        whatever(container.value);
      }
      container.value = 5;
      if (container.isInitialized) {
        whatever(container.value);
      }
      container.value = 15;
      if (container.isInitialized) {
        whatever(container.value);
      }
      container.value = 25;
      if (container.isInitialized) {
        whatever(container.value);
      }
    })
    .add('read from plain object with undefined check', () => {
      const container: { value?: number } = {};
      if (container.value !== undefined) {
        whatever(container.value);
      }
      container.value = 5;
      if (container.value !== undefined) {
        whatever(container.value);
      }
      container.value = 15;
      if (container.value !== undefined) {
        whatever(container.value);
      }
      container.value = 25;
      if (container.value !== undefined) {
        whatever(container.value);
      }
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: false });
}
