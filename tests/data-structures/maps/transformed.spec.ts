import { TransformingMap } from '../../../src';

interface Person {
  id: number;
  name: string;
}

describe('TransformingMap', () => {
  it('should work', () => {
    const map = new TransformingMap<Person, number, string>({
      key: {
        transform: (person) => person.id,
        isInput: (value): value is Person => typeof value !== 'number',
      },
      value: {
        transform: (str) => str + '!',
        isOutput: (str): str is string => str.endsWith('!'),
      },
    });
    const a = { id: 0, name: 'A' };
    const b = { id: 1, name: 'B' };
    map.set(a, 'A Person');
    expect(map.has(a)).toBe(true);
    expect(map.get(a)).toBe('A Person!');
    map.set(b, 'B Person');
    expect(map.get(1)).toBe('B Person!');
    expect(Array.from(map)).toEqual([
      [0, 'A Person!'],
      [1, 'B Person!'],
    ]);
    map.delete(a);
    expect(map.has(a)).toBe(false);
  });

  it('should use noop transformer by default', () => {
    const map = new TransformingMap<Person, number, string>({
      key: {
        transform: (person) => person.id,
        isInput: (value): value is Person => typeof value !== 'number',
      },
    });
    const a = { id: 0, name: 'A' };
    const b = { id: 1, name: 'B' };
    map.set(a, 'A Person');
    expect(map.has(a)).toBe(true);
    expect(map.get(a)).toBe('A Person');
    map.set(b, 'B Person');
    expect(map.get(1)).toBe('B Person');
  });
});
