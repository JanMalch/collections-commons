import { Suite } from 'benchmark';
import {
  joinToKey,
  joinToKeySeparator,
  joinToKeyTransform,
} from '../../../../considerations/join-to-key';
import { joinToString } from '../../../../src';

export function joinToKeySuite() {
  const suite = new Suite();

  const iterable = Array(20)
    .fill(0)
    .map((_, i) => `-${i}-`);

  suite
    .add('joinToKey', () => {
      joinToKey(iterable);
    })
    .add('Array.from & join', () => {
      Array.from(iterable, joinToKeyTransform).join(joinToKeySeparator);
    })
    .add('Array.from & join & flatstr', () => {
      const result = Array.from(iterable, joinToKeyTransform).join(
        joinToKeySeparator
      ) as any;
      result | 0;
    })
    .add('joinToString', () => {
      joinToString(iterable, {
        separator: joinToKeySeparator,
        truncated: String.fromCharCode(27),
        transform: joinToKeyTransform,
      });
    })
    .add('string concat', () => {
      let result = joinToKeySeparator;
      for (const item of iterable) {
        result += `${joinToKeyTransform(item)}${joinToKeySeparator}`;
      }
      result.slice(0, -1);
    })
    .add('string concat & flatstr', () => {
      let result = joinToKeySeparator;
      for (const item of iterable) {
        result += `${joinToKeyTransform(item)}${joinToKeySeparator}`;
      }
      result = result.slice(0, -1);
      (result as any) | 0;
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: false });
}
