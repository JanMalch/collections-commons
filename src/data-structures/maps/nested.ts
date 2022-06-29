import { groupBy } from '../../extensions';

export interface GetNestedValue<K extends Array<any>, V> {
  get(...key: K): V | undefined;
  getAll<PK extends [...K], DK extends [...K]>(...keys: PK): V[];
}

export class NestedMapBuilder<K extends Array<any>, V> {
  private readonly fns: Array<(value: V) => K[0]>;

  constructor(initial: (value: V) => K[0]) {
    this.fns = [initial];
  }

  thenGroupBy<NK>(groupFn: (value: V) => NK): NestedMapBuilder<[...K, NK], V> {
    return this as any;
  }

  toMap(items: Iterable<V>): GetNestedValue<K, V> {
    throw 'TODO';
  }

  toReadonlyMap(items: Iterable<V>): ReadonlyMap<any, V> {
    throw 'TODO';
  }
}
/*

const nmp = new NestedMapBuilder<[string], string>((value) => value)
  .thenGroupBy((value) => value.length)
  .thenGroupBy((value) => value.startsWith('A'));

const map = nmp.toMap([]);

const allocationsByTrack = readonlyMap({
  delegate: groupBy([1, 2, 3], (x) => x % 10),
});
*/
