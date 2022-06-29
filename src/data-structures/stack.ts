import { JsonSerializable } from '../types';

export class Stack<T> implements Iterable<T>, JsonSerializable<T[]> {
  readonly [Symbol.toStringTag] = 'Stack';
  get size(): number {
    return this.items.length;
  }

  get isEmpty(): boolean {
    return this.items.length === 0;
  }

  constructor(protected readonly items: T[] = []) {}

  peek(): T | undefined {
    return this.items[0];
  }

  pop(): T | undefined {
    return this.items.shift();
  }

  push(item: T): void {
    this.items.splice(0, 0, item);
  }

  pushAll(items: T[]): void {
    this.items.splice(0, 0, ...items.reverse());
  }

  toJSON(): T[] {
    return this.items.slice(0);
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items[Symbol.iterator]();
  }
}
