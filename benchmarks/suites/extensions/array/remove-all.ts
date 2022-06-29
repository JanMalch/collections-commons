import { Suite } from 'benchmark';
import { shuffle } from '../../../../src/extensions/array/shuffle';

export function removeAllSuite() {
  const suite = new Suite();

  const iterable = shuffle(
    Array(20)
      .fill(0)
      .map((_, i) => `-${i}-`)
  );

  const toRemove = shuffle(iterable.slice(10, 15));

  suite
    .add('push to new array', () => {
      const result = [];
      for (const item of iterable) {
        if (!toRemove.some((r) => r === item)) {
          result.push(item);
        }
      }
      if (result.length !== 15) {
        throw new Error('Wrong impl');
      }
    })
    .add('iterate over itemsToRemove', () => {
      const result = iterable.slice(0);
      for (const r of toRemove) {
        const i = result.findIndex((item) => r === item);
        if (i >= 0) {
          result.splice(i, 1);
        }
      }
      if (result.length !== 15) {
        throw new Error('Wrong impl');
      }
    })
    .add('filter', () => {
      const result = iterable.filter(
        (item) => !toRemove.some((r) => r === item)
      );
      if (result.length !== 15) {
        throw new Error('Wrong impl');
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
