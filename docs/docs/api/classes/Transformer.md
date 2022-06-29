---
id: "Transformer"
title: "Class: Transformer<Input, Output>"
sidebar_label: "Transformer"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

## Constructors

### constructor

• **new Transformer**<`Input`, `Output`\>(`options`)

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TransformerOptions`](../modules.md#transformeroptions)<`Input`, `Output`\> |

#### Defined in

[src/data-structures/maps/transformed.ts:19](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L19)

## Properties

### isInput

• `Protected` `Readonly` **isInput**: (`value`: `any`) => value is Input

#### Type declaration

▸ (`value`): value is Input

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

value is Input

#### Defined in

[src/data-structures/maps/transformed.ts:17](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L17)

___

### transform

• `Protected` `Readonly` **transform**: (`value`: `Input`) => `Output`

#### Type declaration

▸ (`value`): `Output`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Input` |

##### Returns

`Output`

#### Defined in

[src/data-structures/maps/transformed.ts:16](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L16)

## Methods

### useOrTransform

▸ **useOrTransform**(`value`): `Output`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Input` \| `Output` |

#### Returns

`Output`

#### Defined in

[src/data-structures/maps/transformed.ts:31](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L31)
