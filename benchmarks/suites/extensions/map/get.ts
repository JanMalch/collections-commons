import { Suite } from 'benchmark';
import { getOrElse } from '../../../../src';

export function getOrElseSuite() {
  const suite = new Suite();

  const values: Array<[number, string]> = [
    [0, 'A'],
    [1, 'B'],
    [2, 'C'],
  ];

  const randomKey = () => Math.floor(Math.random() * 6);

  const map = new Map(values);

  suite
    .add('getOrElse', () => {
      getOrElse(map, randomKey(), (key) => String.fromCharCode(key + 65));
    })
    .add('Map#get&has', () => {
      const key = randomKey();
      if (!map.has(key)) {
        String.fromCharCode(key + 65);
      } else {
        map.get(key);
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
