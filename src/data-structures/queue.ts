import { JsonSerializable } from '../types';

export class Queue<T> implements Iterable<T>, JsonSerializable<T[]> {
  readonly [Symbol.toStringTag] = 'Queue';
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

  poll(): T | undefined {
    return this.items.shift();
  }

  add(item: T): void {
    this.items.push(item);
  }

  addAll(items: T[]): void {
    this.items.push(...items);
  }

  toJSON(): T[] {
    return this.items.slice(0);
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items[Symbol.iterator]();
  }
}
