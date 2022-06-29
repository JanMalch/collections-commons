---
id: "TransformingMap"
title: "Class: TransformingMap<InputKey, ComputedKey, InputValue, ComputedValue>"
sidebar_label: "TransformingMap"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `InputKey` | `InputKey` |
| `ComputedKey` | `ComputedKey` |
| `InputValue` | `InputValue` |
| `ComputedValue` | `InputValue` |

## Hierarchy

- `Map`<`ComputedKey`, `ComputedValue`\>

  ↳ **`TransformingMap`**

## Constructors

### constructor

• **new TransformingMap**<`InputKey`, `ComputedKey`, `InputValue`, `ComputedValue`\>(`transformers`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputKey` | `InputKey` |
| `ComputedKey` | `ComputedKey` |
| `InputValue` | `InputValue` |
| `ComputedValue` | `InputValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformers` | `Object` |
| `transformers.key?` | [`TransformerOptions`](../modules.md#transformeroptions)<`InputKey`, `ComputedKey`\> |
| `transformers.value?` | [`TransformerOptions`](../modules.md#transformeroptions)<`InputValue`, `ComputedValue`\> |

#### Overrides

Map&lt;ComputedKey, ComputedValue\&gt;.constructor

#### Defined in

[src/data-structures/maps/transformed.ts:62](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L62)

## Properties

### keyTransformer

• `Protected` `Readonly` **keyTransformer**: [`Transformer`](Transformer.md)<`InputKey`, `ComputedKey`\>

#### Defined in

[src/data-structures/maps/transformed.ts:59](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L59)

___

### valueTransformer

• `Protected` `Readonly` **valueTransformer**: [`Transformer`](Transformer.md)<`InputValue`, `ComputedValue`\>

#### Defined in

[src/data-structures/maps/transformed.ts:60](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L60)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Overrides

Map.\_\_@toStringTag@16

#### Defined in

[src/data-structures/maps/transformed.ts:55](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L55)

## Methods

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `InputKey` \| `ComputedKey` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

[src/data-structures/maps/transformed.ts:87](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L87)

___

### get

▸ **get**(`key`): `undefined` \| `ComputedValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `InputKey` \| `ComputedKey` |

#### Returns

`undefined` \| `ComputedValue`

#### Overrides

Map.get

#### Defined in

[src/data-structures/maps/transformed.ts:77](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L77)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `InputKey` \| `ComputedKey` |

#### Returns

`boolean`

#### Overrides

Map.has

#### Defined in

[src/data-structures/maps/transformed.ts:83](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L83)

___

### set

▸ **set**(`key`, `value`): [`TransformingMap`](TransformingMap.md)<`InputKey`, `ComputedKey`, `InputValue`, `ComputedValue`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `InputKey` \| `ComputedKey` |
| `value` | `InputValue` \| `ComputedValue` |

#### Returns

[`TransformingMap`](TransformingMap.md)<`InputKey`, `ComputedKey`, `InputValue`, `ComputedValue`\>

#### Overrides

Map.set

#### Defined in

[src/data-structures/maps/transformed.ts:91](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/transformed.ts#L91)
