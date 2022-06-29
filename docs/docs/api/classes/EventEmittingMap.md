---
id: "EventEmittingMap"
title: "Class: EventEmittingMap<K, V>"
sidebar_label: "EventEmittingMap"
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

  ↳ **`EventEmittingMap`**

## Constructors

### constructor

• **new EventEmittingMap**<`K`, `V`\>(`entries?`)

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

• **new EventEmittingMap**<`K`, `V`\>(`iterable?`)

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

## Events

### delete

• **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

[src/data-structures/maps/event-emitting.ts:41](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L41)

___

### get

• **get**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Overrides

Map.get

#### Defined in

[src/data-structures/maps/event-emitting.ts:15](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L15)

___

### has

• **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.has

#### Defined in

[src/data-structures/maps/event-emitting.ts:28](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L28)

___

### set

• **set**(`key`, `value`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

[src/data-structures/maps/event-emitting.ts:55](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L55)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"EventEmittingMap"``

#### Overrides

Map.\_\_@toStringTag@16

#### Defined in

[src/data-structures/maps/event-emitting.ts:2](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L2)

___

### listeners

• `Protected` **listeners**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (...`args`: `any`[]) => `void`[] |
| `get` | (...`args`: `any`[]) => `void`[] |
| `has` | (...`args`: `any`[]) => `void`[] |
| `set` | (...`args`: `any`[]) => `void`[] |

#### Defined in

[src/data-structures/maps/event-emitting.ts:3](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L3)

## Methods

### addListener

▸ **addListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"set"`` |
| `callback` | (`key`: `K`, `value`: `V`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:93](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L93)

▸ **addListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"delete"`` |
| `callback` | (`key`: `K`, `result`: `boolean`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:98](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L98)

▸ **addListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"get"`` |
| `callback` | (`key`: `K`, `result`: `undefined` \| `V`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:103](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L103)

▸ **addListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"has"`` |
| `callback` | (`key`: `K`, `result`: `boolean`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:108](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L108)

___

### eventNames

▸ **eventNames**(): (``"get"`` \| ``"has"`` \| ``"delete"`` \| ``"set"``)[]

Returns an array listing the events for which the Map has registered listeners.

#### Returns

(``"get"`` \| ``"has"`` \| ``"delete"`` \| ``"set"``)[]

#### Defined in

[src/data-structures/maps/event-emitting.ts:66](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L66)

___

### listenerCount

▸ **listenerCount**(`event?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | ``"get"`` \| ``"has"`` \| ``"delete"`` \| ``"set"`` |

#### Returns

`number`

#### Defined in

[src/data-structures/maps/event-emitting.ts:80](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L80)

___

### prependListener

▸ **prependListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"set"`` |
| `callback` | (`key`: `K`, `value`: `V`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:130](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L130)

▸ **prependListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"delete"`` |
| `callback` | (`key`: `K`, `result`: `boolean`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:135](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L135)

▸ **prependListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"get"`` |
| `callback` | (`key`: `K`, `result`: `undefined` \| `V`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:140](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L140)

▸ **prependListener**(`event`, `callback`, `once?`): [`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"has"`` |
| `callback` | (`key`: `K`, `result`: `boolean`) => `void` |
| `once?` | `boolean` |

#### Returns

[`EventEmittingMap`](EventEmittingMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/event-emitting.ts:145](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L145)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | ``"get"`` \| ``"has"`` \| ``"delete"`` \| ``"set"`` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/maps/event-emitting.ts:192](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L192)

___

### removeListener

▸ **removeListener**(`event`, `callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"set"`` |
| `callback` | (`key`: `K`, `value`: `V`) => `void` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/maps/event-emitting.ts:167](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L167)

▸ **removeListener**(`event`, `callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"delete"`` |
| `callback` | (`key`: `K`, `result`: `boolean`) => `void` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/maps/event-emitting.ts:168](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L168)

▸ **removeListener**(`event`, `callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"has"`` |
| `callback` | (`key`: `K`, `result`: `boolean`) => `void` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/maps/event-emitting.ts:172](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L172)

▸ **removeListener**(`event`, `callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"get"`` |
| `callback` | (`key`: `K`, `result`: `undefined` \| `V`) => `void` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/maps/event-emitting.ts:176](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/event-emitting.ts#L176)
