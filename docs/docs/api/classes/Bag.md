---
id: "Bag"
title: "Class: Bag<K>"
sidebar_label: "Bag"
sidebar_position: 0
custom_edit_url: null
---

A bag is an object that aids with counting items.

## Type parameters

| Name |
| :------ |
| `K` |

## Implements

- `ReadonlyMap`<`K`, `number`\>
- [`JsonSerializable`](../interfaces/JsonSerializable.md)<`Record`<`string`, `number`\>\>

## Constructors

### constructor

• **new Bag**<`K`\>(`map?`)

#### Type parameters

| Name |
| :------ |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<`K`, `number`\> |

#### Defined in

[src/data-structures/bag.ts:19](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L19)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"Bag"``

#### Defined in

[src/data-structures/bag.ts:10](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L10)

___

### map

• `Protected` `Readonly` **map**: `Map`<`K`, `number`\>

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/data-structures/bag.ts:15](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L15)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Implementation of

ReadonlyMap.size

#### Defined in

[src/data-structures/bag.ts:11](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L11)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `number`]\>

#### Returns

`IterableIterator`<[`K`, `number`]\>

#### Implementation of

ReadonlyMap.\_\_@iterator@14

#### Defined in

[src/data-structures/bag.ts:74](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L74)

___

### add

▸ **add**(`key`, `amount?`): [`Bag`](Bag.md)<`K`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `K` | `undefined` |
| `amount` | `number` | `1` |

#### Returns

[`Bag`](Bag.md)<`K`\>

#### Defined in

[src/data-structures/bag.ts:25](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L25)

___

### addAll

▸ **addAll**(`keys`, `amount?`): [`Bag`](Bag.md)<`K`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keys` | `K`[] | `undefined` |
| `amount` | `number` | `1` |

#### Returns

[`Bag`](Bag.md)<`K`\>

#### Defined in

[src/data-structures/bag.ts:30](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L30)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/data-structures/bag.ts:70](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L70)

___

### delete

▸ **delete**(`key`, `amount?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `amount?` | `number` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/bag.ts:35](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L35)

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `number`]\>

#### Returns

`IterableIterator`<[`K`, `number`]\>

#### Implementation of

ReadonlyMap.entries

#### Defined in

[src/data-structures/bag.ts:78](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L78)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `number`, `key`: `K`, `map`: `ReadonlyMap`<`K`, `number`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Implementation of

ReadonlyMap.forEach

#### Defined in

[src/data-structures/bag.ts:82](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L82)

___

### get

▸ **get**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`number`

#### Implementation of

ReadonlyMap.get

#### Defined in

[src/data-structures/bag.ts:21](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L21)

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

[src/data-structures/bag.ts:52](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L52)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

#### Returns

`IterableIterator`<`K`\>

#### Implementation of

ReadonlyMap.keys

#### Defined in

[src/data-structures/bag.ts:89](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L89)

___

### max

▸ **max**(): [] \| [key: K, value: number]

#### Returns

[] \| [key: K, value: number]

#### Defined in

[src/data-structures/bag.ts:56](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L56)

___

### min

▸ **min**(): [] \| [key: K, value: number]

#### Returns

[] \| [key: K, value: number]

#### Defined in

[src/data-structures/bag.ts:61](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L61)

___

### sum

▸ **sum**(): `number`

#### Returns

`number`

#### Defined in

[src/data-structures/bag.ts:66](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L66)

___

### toJSON

▸ **toJSON**(): `Record`<`string`, `number`\>

Returns a value that represents this object and is also serializable with `JSON.stringify`.

#### Returns

`Record`<`string`, `number`\>

the value to serialize

#### Implementation of

[JsonSerializable](../interfaces/JsonSerializable.md).[toJSON](../interfaces/JsonSerializable.md#tojson)

#### Defined in

[src/data-structures/bag.ts:97](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L97)

___

### values

▸ **values**(): `IterableIterator`<`number`\>

#### Returns

`IterableIterator`<`number`\>

#### Implementation of

ReadonlyMap.values

#### Defined in

[src/data-structures/bag.ts:93](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/bag.ts#L93)
