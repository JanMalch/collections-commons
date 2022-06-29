---
id: "LeastRecentlyUsedMap"
title: "Class: LeastRecentlyUsedMap<K, V>"
sidebar_label: "LeastRecentlyUsedMap"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Implements

- `Map`<`K`, `V`\>

## Constructors

### constructor

• **new LeastRecentlyUsedMap**<`K`, `V`\>(`maxSize`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSize` | `number` |

#### Defined in

[src/data-structures/maps/lru.ts:32](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L32)

• **new LeastRecentlyUsedMap**<`K`, `V`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Options`<`K`, `V`\> |

#### Defined in

[src/data-structures/maps/lru.ts:33](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L33)

## Properties

### lru

• `Protected` `Readonly` **lru**: `LRUCache`<`K`, `V`\>

#### Defined in

[src/data-structures/maps/lru.ts:4](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L4)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Implementation of

Map.\_\_@toStringTag@16

#### Defined in

[src/data-structures/maps/lru.ts:6](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L6)

___

### allowStale

• `get` **allowStale**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/data-structures/maps/lru.ts:22](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L22)

___

### itemCount

• `get` **itemCount**(): `number`

#### Returns

`number`

#### Defined in

[src/data-structures/maps/lru.ts:14](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L14)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/data-structures/maps/lru.ts:18](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L18)

___

### max

• `get` **max**(): `number`

#### Returns

`number`

#### Defined in

[src/data-structures/maps/lru.ts:25](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L25)

___

### maxAge

• `get` **maxAge**(): `number`

#### Returns

`number`

#### Defined in

[src/data-structures/maps/lru.ts:28](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L28)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

Map.size

#### Defined in

[src/data-structures/maps/lru.ts:10](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L10)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Implementation of

Map.\_\_@iterator@14

#### Defined in

[src/data-structures/maps/lru.ts:57](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L57)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

Map.clear

#### Defined in

[src/data-structures/maps/lru.ts:88](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L88)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Implementation of

Map.delete

#### Defined in

[src/data-structures/maps/lru.ts:51](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L51)

___

### dump

▸ **dump**(): `Entry`<`K`, `V`\>[]

#### Returns

`Entry`<`K`, `V`\>[]

#### Defined in

[src/data-structures/maps/lru.ts:100](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L100)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Implementation of

Map.entries

#### Defined in

[src/data-structures/maps/lru.ts:61](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L61)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Implementation of

Map.forEach

#### Defined in

[src/data-structures/maps/lru.ts:66](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L66)

___

### get

▸ **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Implementation of

Map.get

#### Defined in

[src/data-structures/maps/lru.ts:38](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L38)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Implementation of

Map.has

#### Defined in

[src/data-structures/maps/lru.ts:47](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L47)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Implementation of

Map.keys

#### Defined in

[src/data-structures/maps/lru.ts:80](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L80)

___

### lengthCalculator

▸ **lengthCalculator**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`number`

#### Defined in

[src/data-structures/maps/lru.ts:112](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L112)

___

### load

▸ **load**(`cacheEntries`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheEntries` | readonly `Entry`<`K`, `V`\>[] |

#### Returns

`void`

#### Defined in

[src/data-structures/maps/lru.ts:104](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L104)

___

### peek

▸ **peek**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Defined in

[src/data-structures/maps/lru.ts:92](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L92)

___

### prune

▸ **prune**(): `void`

#### Returns

`void`

#### Defined in

[src/data-structures/maps/lru.ts:108](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L108)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/data-structures/maps/lru.ts:96](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L96)

___

### rforEach

▸ **rforEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: [`LeastRecentlyUsedMap`](LeastRecentlyUsedMap.md)<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[src/data-structures/maps/lru.ts:73](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L73)

___

### set

▸ **set**(`key`, `value`): [`LeastRecentlyUsedMap`](LeastRecentlyUsedMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`LeastRecentlyUsedMap`](LeastRecentlyUsedMap.md)<`K`, `V`\>

#### Implementation of

Map.set

#### Defined in

[src/data-structures/maps/lru.ts:42](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L42)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

#### Returns

`IterableIterator`<`V`\>

#### Implementation of

Map.values

#### Defined in

[src/data-structures/maps/lru.ts:84](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/lru.ts#L84)
