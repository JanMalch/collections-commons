---
id: "ObservableMapEmitsIgnored"
title: "Interface: ObservableMapEmitsIgnored<K, V, E>"
sidebar_label: "ObservableMapEmitsIgnored"
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

• **event**: `Extract`<{ `args`: [key: K, value: V] ; `name`: ``"set"`` ; `result?`: `undefined`  }, { `name`: `Exclude`<``"get"``, `E`\> \| `Exclude`<``"has"``, `E`\> \| `Exclude`<``"delete"``, `E`\> \| `Exclude`<``"set"``, `E`\>  }\> \| `Extract`<{ `args`: [key: K] ; `name`: ``"delete"`` ; `result`: `boolean`  }, { `name`: `Exclude`<``"get"``, `E`\> \| `Exclude`<``"has"``, `E`\> \| `Exclude`<``"delete"``, `E`\> \| `Exclude`<``"set"``, `E`\>  }\> \| `Extract`<{ `args`: [key: K] ; `name`: ``"has"`` ; `result`: `boolean`  }, { `name`: `Exclude`<``"get"``, `E`\> \| `Exclude`<``"has"``, `E`\> \| `Exclude`<``"delete"``, `E`\> \| `Exclude`<``"set"``, `E`\>  }\> \| `Extract`<{ `args`: [key: K] ; `name`: ``"get"`` ; `result`: `undefined` \| `V`  }, { `name`: `Exclude`<``"get"``, `E`\> \| `Exclude`<``"has"``, `E`\> \| `Exclude`<``"delete"``, `E`\> \| `Exclude`<``"set"``, `E`\>  }\>

#### Defined in

[src/data-structures/maps/observable.ts:45](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L45)

___

### map

• **map**: [`ObservableMap`](../classes/ObservableMap.md)<`K`, `V`\>

#### Defined in

[src/data-structures/maps/observable.ts:44](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/maps/observable.ts#L44)
