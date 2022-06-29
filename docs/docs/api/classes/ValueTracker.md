---
id: "ValueTracker"
title: "Class: ValueTracker<T, V>"
sidebar_label: "ValueTracker"
sidebar_position: 0
custom_edit_url: null
---

An object to keep track of an item with a certain value based on the given predicate.

**`see`** MinimumTracker

**`see`** MaximumTracker

**`see`** minBy

**`see`** maxBy

**`example`**
```typescript
export class MinimumTracker<T> extends ValueTracker<T, number> {
  constructor(getValue: (item: T) => number) {
    super(getValue, ([, current], [, candidate]) => candidate < current);
  }
}

export function minBy<T>(
  iterable: Iterable<T>,
  selector: (item: T) => number
): [item: T, value: number] | [] {
  const min = new MinimumTracker<T>(selector);
  for (const item of iterable) {
    min.consider(item);
  }
  return min.result;
}
```

## Type parameters

| Name |
| :------ |
| `T` |
| `V` |

## Hierarchy

- **`ValueTracker`**

  ↳ [`MinimumTracker`](MinimumTracker.md)

  ↳ [`MaximumTracker`](MaximumTracker.md)

## Constructors

### constructor

• **new ValueTracker**<`T`, `V`\>(`getValue`, `predicate`)

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getValue` | (`item`: `T`) => `V` |
| `predicate` | (`current`: [item: T, value: V], `candidate`: [item: T, value: V]) => `boolean` |

#### Defined in

[src/data-structures/value-trackers.ts:33](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/value-trackers.ts#L33)

## Properties

### getValue

• `Protected` `Readonly` **getValue**: (`item`: `T`) => `V`

#### Type declaration

▸ (`item`): `V`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

##### Returns

`V`

___

### predicate

• `Protected` `Readonly` **predicate**: (`current`: [item: T, value: V], `candidate`: [item: T, value: V]) => `boolean`

#### Type declaration

▸ (`current`, `candidate`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [item: T, value: V] |
| `candidate` | [item: T, value: V] |

##### Returns

`boolean`

## Accessors

### result

• `get` **result**(): [] \| [item: T, value: V]

#### Returns

[] \| [item: T, value: V]

#### Defined in

[src/data-structures/value-trackers.ts:29](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/value-trackers.ts#L29)

## Methods

### consider

▸ **consider**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

#### Returns

`boolean`

#### Defined in

[src/data-structures/value-trackers.ts:41](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/value-trackers.ts#L41)
