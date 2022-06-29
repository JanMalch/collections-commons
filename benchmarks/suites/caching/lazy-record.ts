import { Suite } from 'benchmark';
import { lazyRecord } from '../../../src';

export function lazyRecordSuite() {
  const suite = new Suite();

  const native = {
    a: 0,
    get b(): string {
      // @ts-expect-error works according to MDN
      delete this.b;
      // @ts-expect-error works according to MDN
      return (this.b = 'Hello, world!');
    },
  };

  const lazy = lazyRecord({
    a: 0,
    b: () => 'Hello, world!',
  });

  const randomKey = () => {
    return Math.random() < 0.5 ? 'a' : 'b';
  };

  suite
    .add('native', () => {
      native[randomKey()];
    })
    .add('lazy record', () => {
      lazy[randomKey()];
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ async: false });
}
