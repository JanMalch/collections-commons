**⚠ THIS PROJECT IS STILL IN DEVELOPMENT. WHILE IT'S DESIGNED AS A LIBRARY IT IS NOT RELEASED YET AND THERE'S NO GUARANTEE THAT IT WILL BE IN THE FUTURE.
ALSO, IMPLEMENTATION STYLE AND DETAILS MAY STILL CHANGE.**


# collections-commons <a href="https://www.github.com/JanMalch/collections-commons"><img src="https://raw.githubusercontent.com/JanMalch/collections-commons/master/.github/assets/logo.png" width="90" height="90" align="right" /></a>

[![npm](https://img.shields.io/npm/v/collections-commons)][npm-url]
[![documentation](https://img.shields.io/badge/docs-available-success)][docs-url]
[![minified + gzip](https://badgen.net/bundlephobia/minzip/collections-commons)][bundlephobia-url]
[![Build](https://github.com/JanMalch/collections-commons/workflows/Build/badge.svg)][build-url]
[![codecov](https://codecov.io/gh/JanMalch/collections-commons/branch/master/graph/badge.svg)][codecov-url]

<i>Extensions, data structures, and utilities built on top of them, for your every-day needs.</i>

## Installation

```
npm install collections-commons
```

Some classes extend `Map`, which requires the browser to support es6 features.

[![Can I use - 96%](https://img.shields.io/badge/Can%20I%20use...-~96%25-brightgreen)](https://caniuse.com/es6)

## What's in this library?

This library main goal is to provide a toolbox for your every-day needs.
As such it provides a lot of different extensions to the data structures you already know and use
like Maps and Arrays. Beyond that, there a few custom data structures like `Queue` or `Bag`,
and also utilities like `lazy` or `lateInit` that built on top of these structures.

It is strongly recommended to enable strict TypeScript rules, especially null checks.
For example [`getOrElse`, `getOrDefault`, and `getOrThrow`](https://janmalch.github.io/collections-commons/modules/extensions_map.html#:~:text=Functions%20-%20Get)
will make your life easier by explicitly handling missing keys in Maps, instead of (not) doing `undefined` checks.

### Highlights

The following categories should give you a sense of what the library has to offer:

- [Map factories](https://janmalch.github.io/collections-commons/modules/extensions_iterable.html#:~:text=Functions%20%2D%20Lookup)
  like [`associateWith`](https://janmalch.github.io/collections-commons/functions/extensions_iterable.associateWith.html) and
  [`groupBy`](https://janmalch.github.io/collections-commons/functions/extensions_iterable.groupBy.html)
- [Get from Map extensions](https://janmalch.github.io/collections-commons/modules/extensions_map.html#:~:text=Functions%20-%20Get) like `getOrDefault`
- [Lazy behaviours](https://janmalch.github.io/collections-commons/modules/lazy.html)
- [Common data structures](https://janmalch.github.io/collections-commons/modules/data_structures.html) like Bag, Queue, or `LateInit`

## Usage

```typescript
import { getOrThrow, getInBounds } from 'collections-commons';

const map = new Map<number, string>();
const value: string = getOrThrow(map, 5); // throws because map has no value for 5

const array = ['0', '1', '2'];
const item: string = getInBounds(array, 5); // throws because index 5 is out of bounds
``` 

### Namespacing

If you prefer, you can create namespaces by using the `import * as identifier` syntax,
which is still tree-shakable by all modern bundlers.

```typescript
import * as Extensions from 'collections-commons/extensions';

// values are arrays, so this is considered a multi-value Map (no need for extra classes)
const map = new Map<string, number[]>([
  ['a', [0, 1, 2]],
  ['b', []],
]);
Extensions.addAll(map, 'a', [3, 4]); // addAll is an extension for multi-value Maps
Extensions.setAll(map, [ // setAll works for any Map
  ['b', [5, 6]],
  ['c', [7, 8]],
]);
expect(map.get('a')).toEqual([0, 1, 2, 3, 4]);
expect(map.get('b')).toEqual([5, 6]);
expect(map.get('c')).toEqual([7, 8]);
```

[docs-url]: https://janmalch.github.io/collections-commons/
[npm-url]: https://www.npmjs.com/package/collections-commons
[build-url]: https://github.com/JanMalch/collections-commons/actions?query=workflow%3ABuild
[codecov-url]: https://codecov.io/gh/JanMalch/collections-commons
[bundlephobia-url]: https://bundlephobia.com/result?p=collections-commons
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
