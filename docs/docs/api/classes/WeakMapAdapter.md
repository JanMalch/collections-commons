---
id: "WeakMapAdapter"
title: "Class: WeakMapAdapter<K, V>"
sidebar_label: "WeakMapAdapter"
sidebar_position: 0
custom_edit_url: null
---

An adapter around a [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
to fulfill the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) interface.

**Note that this class does not change the inherent behaviour of a `WeakMap`.
All methods that iterate over keys or values will throw an error, and references are still weak.**

However, the adapter does enable the use of the `clear` method and keeps track of the `size`, by updating a counter
when using the appropriate `set`, `delete`, and `clear` methods.

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `object` |
| `V` | `V` |

## Implements

- `Map`<`K`, `V`\>

## Constructors

### constructor

• **new WeakMapAdapter**<`K`, `V`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `object` |
| `V` | `V` |

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"WeakMapAdapter"``

#### Implementation of

Map.\_\_@toStringTag@16

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:15](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L15)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

Map.size

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:21](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L21)

## Methods

### [iterator]

▸ **[iterator]**(): `never`

Throws an error, because iterating is not supported in WeakMaps.

#### Returns

`never`

#### Implementation of

Map.\_\_@iterator@14

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:28](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L28)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

Map.clear

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:54](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L54)

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

[src/data-structures/maps/weak-map-adapter.ts:46](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L46)

___

### entries

▸ **entries**(): `never`

Throws an error, because iterating is not supported in WeakMaps.

#### Returns

`never`

#### Implementation of

Map.entries

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:76](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L76)

___

### forEach

▸ **forEach**(`callbackfn?`, `thisArg?`): `never`

Throws an error, because iterating is not supported in WeakMaps.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn?` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` | callback function, never used |
| `thisArg?` | `any` | thisArg, never used |

#### Returns

`never`

#### Implementation of

Map.forEach

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:86](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L86)

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

[src/data-structures/maps/weak-map-adapter.ts:32](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L32)

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

[src/data-structures/maps/weak-map-adapter.ts:36](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L36)

___

### keys

▸ **keys**(): `never`

Throws an error, because iterating is not supported in WeakMaps.

#### Returns

`never`

#### Implementation of

Map.keys

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:62](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L62)

___

### set

▸ **set**(`key`, `value`): [`WeakMapAdapter`](WeakMapAdapter.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`WeakMapAdapter`](WeakMapAdapter.md)<`K`, `V`\>

#### Implementation of

Map.set

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:40](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L40)

___

### values

▸ **values**(): `never`

Throws an error, because iterating is not supported in WeakMaps.

#### Returns

`never`

#### Implementation of

Map.values

#### Defined in

[src/data-structures/maps/weak-map-adapter.ts:69](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/weak-map-adapter.ts#L69)
