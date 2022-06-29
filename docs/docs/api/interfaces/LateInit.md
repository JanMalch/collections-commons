---
id: "LateInit"
title: "Interface: LateInit<T>"
sidebar_label: "LateInit"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`JsonSerializable`](JsonSerializable.md)<`T`\>

  ↳ **`LateInit`**

## Properties

### isInitialized

• `Readonly` **isInitialized**: `boolean`

#### Defined in

[src/data-structures/late-init.ts:10](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/late-init.ts#L10)

___

### value

• **value**: `T`

#### Defined in

[src/data-structures/late-init.ts:9](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/late-init.ts#L9)

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

#### Inherited from

[JsonSerializable](JsonSerializable.md).[toJSON](JsonSerializable.md#tojson)

#### Defined in

[src/types/index.ts:36](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/types/index.ts#L36)
