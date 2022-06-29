import { lastOrElse } from '../../../src';

describe('lastOrElse', () => {
  it('should return the last element if not empty', () => {
    expect(lastOrElse([0, 1, 2], () => -1)).toEqual(2);
  });
  it('should invoke the producer if empty', () => {
    expect(lastOrElse([], () => -1)).toEqual(-1);
  });
  it('should not invoke the producer if last element is undefined', () => {
    expect(lastOrElse([undefined], () => -1)).toEqual(undefined);
  });
});
