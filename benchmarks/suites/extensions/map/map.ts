import { Suite } from 'benchmark';
import { mapMapValues } from '../../../../src';

export function mapMapValuesSuite() {
  const suite = new Suite();

  const demoMap = new Map(
    Array(100)
      .fill(0)
      .map((_, i) => [i, 65 + String.fromCharCode(i % 26)])
  );

  suite
    .add('mapMapValues', () => {
      mapMapValues(demoMap, ([, value]) => '!!' + value);
    })
    .add('map with Array.from', () => {
      new Map(
        Array.from(demoMap.entries()).map(([key, value]) => [key, '!!' + value])
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
