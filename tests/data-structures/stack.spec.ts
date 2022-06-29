import { Stack } from '../../src';

describe('Stack', () => {
  it('should work with push', () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty).toBe(true);
    stack.push(0);
    expect(stack.isEmpty).toBe(false);
    expect(stack.size).toBe(1);
    expect(stack.peek()).toBe(0);
    stack.push(1);
    expect(stack.size).toBe(2);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.size).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.size).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(1);
  });

  it('should work with pushAll', () => {
    const stack = new Stack<number>();
    stack.pushAll([0, 1, 2]); // 2 is pushed last
    expect(stack.size).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.size).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(1);
  });

  it('should serialize to an array', () => {
    const stack = new Stack<number>();
    stack.pushAll([0, 1, 2]);
    expect(stack.toJSON()).toEqual([2, 1, 0]);
  });

  it('should iterate properly', () => {
    const stack = new Stack<number>();
    stack.pushAll([0, 1, 2]);
    expect(Array.from(stack)).toEqual([2, 1, 0]);
  });
});
