import { Queue } from '../../src';

describe('Queue', () => {
  it('should work with add', () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty).toBe(true);
    queue.add(0);
    expect(queue.isEmpty).toBe(false);
    expect(queue.size).toBe(1);
    expect(queue.peek()).toBe(0);
    queue.add(1);
    expect(queue.size).toBe(2);
    expect(queue.peek()).toBe(0);
    queue.add(2);
    expect(queue.size).toBe(3);
    expect(queue.poll()).toBe(0);
    expect(queue.size).toBe(2);
    expect(queue.poll()).toBe(1);
    expect(queue.size).toBe(1);
  });

  it('should work with addAll', () => {
    const queue = new Queue<number>();
    queue.addAll([0, 1, 2]);
    expect(queue.size).toBe(3);
    expect(queue.poll()).toBe(0);
    expect(queue.size).toBe(2);
    expect(queue.poll()).toBe(1);
    expect(queue.size).toBe(1);
  });

  it('should serialize to an array', () => {
    const queue = new Queue<number>();
    queue.addAll([0, 1, 2]);
    expect(queue.toJSON()).toEqual([0, 1, 2]);
  });

  it('should iterate properly', () => {
    const queue = new Queue<number>();
    queue.addAll([0, 1, 2]);
    expect(Array.from(queue)).toEqual([0, 1, 2]);
  });
});
