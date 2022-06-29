---
id: "JoinToStringOptions"
title: "Interface: JoinToStringOptions<T>"
sidebar_label: "JoinToStringOptions"
sidebar_position: 0
custom_edit_url: null
---

An object with options for the `joinToString` function.

**`see`** joinToString

## Type parameters

| Name |
| :------ |
| `T` |

## Properties

### limit

• **limit**: `number`

The maximum amount of items, before iteration is stopped and the `truncated` suffix is added.

#### Defined in

[src/extensions/iterable/join-to-string.ts:23](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/extensions/iterable/join-to-string.ts#L23)

___

### prefix

• **prefix**: `string`

The string at the front of the result. Will always be added.

#### Defined in

[src/extensions/iterable/join-to-string.ts:15](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/extensions/iterable/join-to-string.ts#L15)

___

### separator

• **separator**: `string`

The separator between items and before a possible `truncate` suffix.

#### Defined in

[src/extensions/iterable/join-to-string.ts:11](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/extensions/iterable/join-to-string.ts#L11)

___

### suffix

• **suffix**: `string`

The string at the end of the result. Will always be added.

#### Defined in

[src/extensions/iterable/join-to-string.ts:19](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/extensions/iterable/join-to-string.ts#L19)

___

### truncated

• **truncated**: `string`

The indicator string that the result was truncated, e.g. `'...'`.
The separator will be inserted before the truncated substring.

#### Defined in

[src/extensions/iterable/join-to-string.ts:28](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/extensions/iterable/join-to-string.ts#L28)

## Methods

### transform

▸ **transform**(`item`, `index`): `string`

A transform function to transform the items of the iterable to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | an item from the iterable |
| `index` | `number` | the current iteration index |

#### Returns

`string`

#### Defined in

[src/extensions/iterable/join-to-string.ts:34](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/extensions/iterable/join-to-string.ts#L34)
