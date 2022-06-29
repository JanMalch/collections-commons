import { Suite } from 'benchmark';

function manualLastOrElse<T>(iterable: Iterable<T>, producer: () => T): T {
  const it = iterable[Symbol.iterator]();
  let item = it.next();
  if (item.done) {
    // if iterable is empty
    return producer();
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

function simpleLastOrElse<T>(iterable: Iterable<T>, producer: () => T): T {
  let isEmpty = true;
  let last: T;
  for (const value of iterable) {
    last = value;
    isEmpty = false;
  }
  return isEmpty ? producer() : last!;
}

const array = Array(20)
  .fill(0)
  .map((_, i) => `-${i}-`);
const emptyArray: string[] = [];

const set = new Set(array);
const emptySet = new Set<string>();

export function lastOrElseSuite() {
  let suite = new Suite();

  suite
    .add('last with manual iter on array of length 20', () => {
      manualLastOrElse(array, () => '-?-');
    })
    .add('last with for-loop on array of length 20', () => {
      simpleLastOrElse(array, () => '-?-');
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
      manualLastOrElse(set, () => '-?-');
    })
    .add('last with for-loop on Set of size 20', () => {
      simpleLastOrElse(set, () => '-?-');
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
      manualLastOrElse(emptyArray, () => '-?-');
    })
    .add('last with for-loop on empty array', () => {
      simpleLastOrElse(emptyArray, () => '-?-');
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
      manualLastOrElse(emptySet, () => '-?-');
    })
    .add('last with for-loop on empty Set', () => {
      simpleLastOrElse(emptySet, () => '-?-');
    })
    .on('cycle', (event: { target: any }) => {
      console.log(String(event.target));
    })
    .on('complete', function (this: Suite) {
      console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
    })
    .run({ async: false });
}
