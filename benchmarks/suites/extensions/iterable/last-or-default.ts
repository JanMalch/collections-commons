import { Suite } from 'benchmark';

function manualLastOrDefault<T>(iterable: Iterable<T>, defaultValue: T): T {
  const it = iterable[Symbol.iterator]();
  let item = it.next();
  if (item.done) {
    // if iterable is empty
    return defaultValue;
  }
  do {
    const next = it.next();
    if (next.done) {
      return item.value;
    }
    item = next;
  } while (!item.done);
  // This should be unreachable. Maybe refactor loop?
  throw new Error('Unexpected end of loop.');
}

function simpleLastOrDefault<T>(iterable: Iterable<T>, defaultValue: T): T {
  let last = defaultValue;
  for (const value of iterable) {
    last = value;
  }
  return last;
}

const array = Array(20)
  .fill(0)
  .map((_, i) => `-${i}-`);
const emptyArray: string[] = [];

const set = new Set(array);
const emptySet = new Set<string>();

export function lastOrDefaultSuite() {
  let suite = new Suite();

  suite
    .add('last with manual iter on array of length 20', () => {
      manualLastOrDefault(array, '-?-');
    })
    .add('last with for-loop on array of length 20', () => {
      simpleLastOrDefault(array, '-?-');
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
    })
    .run({ async: false });

  suite = new Suite();
  suite
    .add('last with manual iter on Set of size 20', () => {
      manualLastOrDefault(set, '-?-');
    })
    .add('last with for-loop on Set of size 20', () => {
      simpleLastOrDefault(set, '-?-');
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
    })
    .run({ async: false });

  suite = new Suite();
  suite
    .add('last with manual iter on empty array', () => {
      manualLastOrDefault(emptyArray, '-?-');
    })
    .add('last with for-loop on empty array', () => {
      simpleLastOrDefault(emptyArray, '-?-');
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
    })
    .run({ async: false });

  suite = new Suite();
  suite
    .add('last with manual iter on empty Set', () => {
      manualLastOrDefault(emptySet, '-?-');
    })
    .add('last with for-loop on empty Set', () => {
      simpleLastOrDefault(emptySet, '-?-');
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
    })
    .run({ async: false });
}
