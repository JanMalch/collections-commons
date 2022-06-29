---
id: "ObservableMapEmitsFiltered"
title: "Interface: ObservableMapEmitsFiltered<K, V, E>"
sidebar_label: "ObservableMapEmitsFiltered"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `K` |
| `V` | `V` |
| `E` | extends ``"set"`` \| ``"delete"`` \| ``"has"`` \| ``"get"`` |

## Properties

### event

• **event**: `Extract`<{ `args`: [key: K, value: V] ; `name`: ``"set"`` ; `result?`: `undefined`  }, { `name`: `E`  }\> \| `Extract`<{ `args`: [key: K] ; `name`: ``"delete"`` ; `result`: `boolean`  }, { `name`: `E`  }\> \| `Extract`<{ `args`: [key: K] ; `name`: ``"has"`` ; `result`: `boolean`  }, { `name`: `E`  }\> \| `Extract`<{ `args`: [key: K] ; `name`: ``"get"`` ; `result`: `undefined` \| `V`  }, { `name`: `E`  }\>

#### Defined in

[src/data-structures/maps/observable.ts:36](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L36)

___

### map

• **map**: [`ObservableMap`](../classes/ObservableMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/observable.ts:35](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L35)
