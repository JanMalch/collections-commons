---
id: "ReadonlyMapByDelegation"
title: "Class: ReadonlyMapByDelegation<K, V>"
sidebar_label: "ReadonlyMapByDelegation"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Implements

- `ReadonlyMap`<`K`, `V`\>

## Constructors

### constructor

• **new ReadonlyMapByDelegation**<`K`, `V`\>(`map`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<`K`, `V`\> |

#### Defined in

[src/data-structures/maps/readonly.ts:6](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L6)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"ReadonlyMapByDelegation"``

#### Defined in

[src/data-structures/maps/readonly.ts:2](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L2)

## Accessors

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

ReadonlyMap.size

#### Defined in

[src/data-structures/maps/readonly.ts:10](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L10)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Implementation of

ReadonlyMap.\_\_@iterator@14

#### Defined in

[src/data-structures/maps/readonly.ts:14](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L14)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Implementation of

ReadonlyMap.entries

#### Defined in

[src/data-structures/maps/readonly.ts:18](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L18)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `ReadonlyMap`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Implementation of

ReadonlyMap.forEach

#### Defined in

[src/data-structures/maps/readonly.ts:22](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L22)

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

ReadonlyMap.get

#### Defined in

[src/data-structures/maps/readonly.ts:29](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L29)

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

ReadonlyMap.has

#### Defined in

[src/data-structures/maps/readonly.ts:33](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L33)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Implementation of

ReadonlyMap.keys

#### Defined in

[src/data-structures/maps/readonly.ts:37](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L37)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

#### Returns

`IterableIterator`<`V`\>

#### Implementation of

ReadonlyMap.values

#### Defined in

[src/data-structures/maps/readonly.ts:41](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/readonly.ts#L41)
