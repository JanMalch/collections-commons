---
id: "JsonSerializable"
title: "Interface: JsonSerializable<T>"
sidebar_label: "JsonSerializable"
sidebar_position: 0
custom_edit_url: null
---

An interface that marks implementing classes and objects as serializable with `JSON.stringify`.

**`see`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of the value to serialize via `JSON.stringify`. |

## Hierarchy

- **`JsonSerializable`**

  ↳ [`LateInit`](LateInit.md)

## Implemented by

- [`Bag`](../classes/Bag.md)
- [`Queue`](../classes/Queue.md)
- [`Stack`](../classes/Stack.md)

## Methods

### toJSON

▸ **toJSON**(): `T`

Returns a value that represents this object and is also serializable with `JSON.stringify`.

**`see`** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#tojson_behavior

**`example`**
```typescript
export class Queue<T> implements JsonSerializable<T[]> {
  private readonly items: T[];
  toJSON(): T[] {
    return this.items.slice(0);
  }
}
```

#### Returns

`T`

the value to serialize

#### Defined in

[src/types/index.ts:36](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/types/index.ts#L36)
