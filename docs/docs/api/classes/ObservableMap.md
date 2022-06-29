---
id: "ObservableMap"
title: "Class: ObservableMap<K, V>"
sidebar_label: "ObservableMap"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`ObservableMap`**

## Constructors

### constructor

• **new ObservableMap**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

docs/node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new ObservableMap**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | ``null`` \| `Iterable`<readonly [`K`, `V`]\> |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

docs/node_modules/typescript/lib/lib.es2015.iterable.d.ts:161

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"ObservableMap"``

#### Overrides

Map.\_\_@toStringTag@16

#### Defined in

[src/data-structures/maps/observable.ts:52](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L52)

## Methods

### asObservable

▸ **asObservable**(): `Observable`<[`ObservableMapEmits`](../interfaces/ObservableMapEmits.md)<`K`, `V`\>\>

#### Returns

`Observable`<[`ObservableMapEmits`](../interfaces/ObservableMapEmits.md)<`K`, `V`\>\>

#### Defined in

[src/data-structures/maps/observable.ts:126](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L126)

___

### complete

▸ **complete**(): `void`

#### Returns

`void`

#### Defined in

[src/data-structures/maps/observable.ts:131](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L131)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

[src/data-structures/maps/observable.ts:102](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L102)

___

### get

▸ **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Overrides

Map.get

#### Defined in

[src/data-structures/maps/observable.ts:114](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L114)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.has

#### Defined in

[src/data-structures/maps/observable.ts:120](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L120)

___

### notify

▸ `Protected` **notify**(`event`, `args`, `result?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"set"`` |
| `args` | [key: K, value: V] |
| `result?` | `undefined` |

#### Returns

`void`

#### Defined in

[src/data-structures/maps/observable.ts:79](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L79)

▸ `Protected` **notify**(`event`, `args`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"delete"`` |
| `args` | [key: K] |
| `result` | `boolean` |

#### Returns

`void`

#### Defined in

[src/data-structures/maps/observable.ts:84](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L84)

▸ `Protected` **notify**(`event`, `args`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"get"`` |
| `args` | [key: K] |
| `result` | `undefined` \| `V` |

#### Returns

`void`

#### Defined in

[src/data-structures/maps/observable.ts:85](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L85)

▸ `Protected` **notify**(`event`, `args`, `result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"has"`` |
| `args` | [key: K] |
| `result` | `boolean` |

#### Returns

`void`

#### Defined in

[src/data-structures/maps/observable.ts:86](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L86)

___

### set

▸ **set**(`key`, `value`): [`ObservableMap`](ObservableMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`ObservableMap`](ObservableMap.md)<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

[src/data-structures/maps/observable.ts:108](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L108)

___

### filterEvents

▸ `Static` **filterEvents**<`E`, `K`, `V`\>(...`eventNames`): `OperatorFunction`<[`ObservableMapEmits`](../interfaces/ObservableMapEmits.md)<`K`, `V`\>, [`ObservableMapEmitsFiltered`](../interfaces/ObservableMapEmitsFiltered.md)<`K`, `V`, `E`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"get"`` \| ``"has"`` \| ``"delete"`` \| ``"set"`` |
| `K` | `K` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...eventNames` | `E`[] |

#### Returns

`OperatorFunction`<[`ObservableMapEmits`](../interfaces/ObservableMapEmits.md)<`K`, `V`\>, [`ObservableMapEmitsFiltered`](../interfaces/ObservableMapEmitsFiltered.md)<`K`, `V`, `E`\>\>

#### Defined in

[src/data-structures/maps/observable.ts:53](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L53)

___

### ignoreEvents

▸ `Static` **ignoreEvents**<`E`, `K`, `V`\>(...`eventNames`): `OperatorFunction`<[`ObservableMapEmits`](../interfaces/ObservableMapEmits.md)<`K`, `V`\>, [`ObservableMapEmitsIgnored`](../interfaces/ObservableMapEmitsIgnored.md)<`K`, `V`, `E`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends ``"get"`` \| ``"has"`` \| ``"delete"`` \| ``"set"`` |
| `K` | `K` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...eventNames` | `E`[] |

#### Returns

`OperatorFunction`<[`ObservableMapEmits`](../interfaces/ObservableMapEmits.md)<`K`, `V`\>, [`ObservableMapEmitsIgnored`](../interfaces/ObservableMapEmitsIgnored.md)<`K`, `V`, `E`\>\>

#### Defined in

[src/data-structures/maps/observable.ts:64](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L64)
