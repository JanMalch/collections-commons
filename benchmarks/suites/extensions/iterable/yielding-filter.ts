import { Suite } from 'benchmark';
import { yieldingFilter } from '../../../../src';

export function yieldingFilterSuite() {
  const inputSize = 10000;
  const outputLimit = 500;
  const startIndex = inputSize / 5;

  const suite = new Suite(
    `Array with the first ${outputLimit} even numbers after ${startIndex}`
  );

  console.log(
    `{ inputSize = ${inputSize}, outputLimit = ${outputLimit}, startIndex = ${startIndex} }\n`
  );

  const input = Array(inputSize)
    .fill(0)
    .map((_, i) => i);

  suite
    .add('filter & slice', () => {
      input
        .filter((v, i) => {
          if (i < startIndex) {
            return false;
          }
          return v % 2 === 0;
        })
        .slice(0, outputLimit);
    })
    .add('filter', () => {
      let count = 0;
      input.filter((v, i) => {
        if (i < startIndex || count > outputLimit) {
          return false;
        }
        if (v % 2 === 0) {
          count++;
          return true;
        }
        return false;
      });
    })
    .add('yieldingFilter', () => {
      Array.from(
        yieldingFilter(input, (v) => v % 2 === 0, {
          outputLimit,
          startIndex,
        })
      );
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: false });
}
