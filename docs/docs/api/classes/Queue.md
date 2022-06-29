---
id: "Queue"
title: "Class: Queue<T>"
sidebar_label: "Queue"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- `Iterable`<`T`\>
- [`JsonSerializable`](../interfaces/JsonSerializable.md)<`T`[]\>

## Constructors

### constructor

• **new Queue**<`T`\>(`items?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `items` | `T`[] | `[]` |

#### Defined in

[src/data-structures/queue.ts:13](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L13)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"Queue"``

#### Defined in

[src/data-structures/queue.ts:4](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L4)

___

### items

• `Protected` `Readonly` **items**: `T`[] = `[]`

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/data-structures/queue.ts:9](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L9)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/data-structures/queue.ts:5](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L5)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Implementation of

Iterable.\_\_@iterator@14

#### Defined in

[src/data-structures/queue.ts:35](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L35)

___

### add

▸ **add**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`void`

#### Defined in

[src/data-structures/queue.ts:23](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L23)

___

### addAll

▸ **addAll**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |

#### Returns

`void`

#### Defined in

[src/data-structures/queue.ts:27](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L27)

___

### peek

▸ **peek**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/data-structures/queue.ts:15](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L15)

___

### poll

▸ **poll**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/data-structures/queue.ts:19](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L19)

___

### toJSON

▸ **toJSON**(): `T`[]

Returns a value that represents this object and is also serializable with `JSON.stringify`.

#### Returns

`T`[]

the value to serialize

#### Implementation of

[JsonSerializable](../interfaces/JsonSerializable.md).[toJSON](../interfaces/JsonSerializable.md#tojson)

#### Defined in

[src/data-structures/queue.ts:31](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/queue.ts#L31)
