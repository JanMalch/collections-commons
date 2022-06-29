---
id: "MaximumTracker"
title: "Class: MaximumTracker<T>"
sidebar_label: "MaximumTracker"
sidebar_position: 0
custom_edit_url: null
---

An object to keep track of an item considered to be a maximum, based on the given `getValue` selector.

**`see`** MinimumTracker

**`see`** MaximumTracker

**`see`** minBy

**`see`** maxBy

**`example`**
```typescript
export function maxBy<T>(
  iterable: Iterable<T>,
  selector: (item: T) => number
): [item: T, value: number] | [] {
  const max = new MaximumTracker<T>(selector);
  for (const item of iterable) {
    max.consider(item);
  }
  return max.result;
}
```

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ValueTracker`](ValueTracker.md)<`T`, `number`\>

  ↳ **`MaximumTracker`**

## Constructors

### constructor

• **new MaximumTracker**<`T`\>(`getValue`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getValue` | (`item`: `T`) => `number` |

#### Overrides

[ValueTracker](ValueTracker.md).[constructor](ValueTracker.md#constructor)

#### Defined in

[src/data-structures/value-trackers.ts:100](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/value-trackers.ts#L100)

## Properties

### getValue

• `Protected` `Readonly` **getValue**: (`item`: `T`) => `number`

#### Type declaration

▸ (`item`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `T` |

##### Returns

`number`

#### Inherited from

[ValueTracker](ValueTracker.md).[getValue](ValueTracker.md#getvalue)

___

### predicate

• `Protected` `Readonly` **predicate**: (`current`: [item: T, value: number], `candidate`: [item: T, value: number]) => `boolean`

#### Type declaration

▸ (`current`, `candidate`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [item: T, value: number] |
| `candidate` | [item: T, value: number] |

##### Returns

`boolean`

#### Inherited from

[ValueTracker](ValueTracker.md).[predicate](ValueTracker.md#predicate)

## Accessors

### result

• `get` **result**(): [] \| [item: T, value: V]

#### Returns

[] \| [item: T, value: V]

#### Inherited from

ValueTracker.result

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

#### Inherited from

[ValueTracker](ValueTracker.md).[consider](ValueTracker.md#consider)

#### Defined in

[src/data-structures/value-trackers.ts:41](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/value-trackers.ts#L41)
