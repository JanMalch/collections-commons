import {
  associate,
  associateBy,
  associateByNotNullish,
  associateWith,
  associateWithNotNullish,
  groupBy,
  groupByIndex,
  groupByProp,
} from '../../../src';

describe('groupBy', () => {
  it('should work', () => {
    const map = groupBy([0, 1, 2, 10, 20, 100, 200], (num) =>
      num.toString().charAt(0)
    );
    expect(Array.from(map)).toEqual([
      ['0', [0]],
      ['1', [1, 10, 100]],
      ['2', [2, 20, 200]],
    ]);
  });
});

describe('associate', () => {
  it('should work', () => {
    const map = associate([0, 1, 2, 10, 20], (num) => [
      num.toString(),
      num + 1000,
    ]);
    expect(Array.from(map)).toEqual([
      ['0', 1000],
      ['1', 1001],
      ['2', 1002],
      ['10', 1010],
      ['20', 1020],
    ]);
  });
});

describe('associateBy', () => {
  it('should work', () => {
    const map = associateBy([0, 1, 2, 10, 20], (num) => num.toString());
    expect(Array.from(map)).toEqual([
      ['0', 0],
      ['1', 1],
      ['2', 2],
      ['10', 10],
      ['20', 20],
    ]);
  });
});

describe('associateByNotUndefined', () => {
  it('should work', () => {
    const map = associateByNotNullish([0, 1, 2, 10, 20], (num) =>
      num < 10 ? undefined : num.toString()
    );
    expect(Array.from(map)).toEqual([
      ['10', 10],
      ['20', 20],
    ]);
  });
});

describe('associateWith', () => {
  it('should work', () => {
    const map = associateWith([0, 1, 2, 10, 20], (num) => num + 1000);
    expect(Array.from(map)).toEqual([
      [0, 1000],
      [1, 1001],
      [2, 1002],
      [10, 1010],
      [20, 1020],
    ]);
  });
});

describe('associateWithNotUndefined', () => {
  it('should work', () => {
    const map = associateWithNotNullish([0, 1, 2, 10, 20], (num) =>
      num < 10 ? undefined : num + 1000
    );
    expect(Array.from(map)).toEqual([
      [10, 1010],
      [20, 1020],
    ]);
  });
});

describe('groupByIndex', () => {
  it('should work', () => {
    const [first, second, third, fourth] = groupByIndex(
      [1, 2, 100, 200],
      (num) => num.toString().length - 1
    );
    expect(first).toEqual([1, 2]);
    expect(second).toEqual([]);
    expect(third).toEqual([100, 200]);
    expect(fourth).toBeUndefined();
  });
});

describe('groupByProp', () => {
  it('should work with propSet', () => {
    const { num1, num2, num3 } = groupByProp(
      [1, 2, 100, 200],
      (num) => `num` + num.toString().length,
      ['num1', 'num2', 'num3']
    );
    expect(num1).toEqual([1, 2]);
    expect(num2).toEqual([]);
    expect(num3).toEqual([100, 200]);
  });
  it('should work without propSet', () => {
    const { num1, num2, num3 } = groupByProp(
      [1, 2, 100, 200],
      (num) => `num` + num.toString().length
    );
    expect(num1).toEqual([1, 2]);
    expect(num2).toBeUndefined();
    expect(num3).toEqual([100, 200]);
  });
});
