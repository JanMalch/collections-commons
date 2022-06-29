import { jsonStringify, jsonParse } from '../../src';

describe('jsonStringify', () => {
  it('should work', () => {
    const record = {
      a: 0,
      b: 1,
    };
    expect(JSON.stringify(record)).toBe(jsonStringify(record));
  });
});

describe('jsonParse', () => {
  it('should work', () => {
    const record = JSON.stringify({
      a: 0,
      b: 1,
    });
    expect(JSON.parse(record)).toEqual(jsonParse(record));
  });
});
