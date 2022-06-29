---
id: "MinimumTracker"
title: "Class: MinimumTracker<T>"
sidebar_label: "MinimumTracker"
sidebar_position: 0
custom_edit_url: null
---

An object to keep track of an item considered to be a minimum, based on the given `getValue` selector.

**`see`** [ValueTracker](ValueTracker.md)

**`see`** [MaximumTracker](MaximumTracker.md)

**`see`** [minBy](../modules.md#minby)

**`see`** [maxBy](../modules.md#maxby)

**`example`**
```typescript
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

## Hierarchy

- [`ValueTracker`](ValueTracker.md)<`T`, `number`\>

  ↳ **`MinimumTracker`**

## Constructors

### constructor

• **new MinimumTracker**<`T`\>(`getValue`)

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

[src/data-structures/value-trackers.ts:74](https://github.com/JanMalch/collections-commons/blob/20b85f5/src/data-structures/value-trackers.ts#L74)

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
