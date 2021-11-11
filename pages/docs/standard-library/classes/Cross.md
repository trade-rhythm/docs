# Class: Cross

## Implements

- [`Serializable`](../interfaces/Serializable.md)<`CrossArgs`\>

## Constructors

### constructor

• **new Cross**(`isOver?`)

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `isOver?` | `boolean` |

## Properties

### isOver

• `Optional` **isOver**: `boolean`

### key

▪ `Static` `Readonly` **key**: `"finance.tr.Cross"`

## Methods

### cross

▸ **cross**(`val1`, `val2`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `val1` | `number` |
| `val2` | `number` |

#### Returns

`boolean`

### over

▸ **over**(`val1`, `val2`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `val1` | `number` |
| `val2` | `number` |

#### Returns

`boolean`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`CrossArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`CrossArgs`\>

#### Implementation of

[Serializable](../interfaces/Serializable.md).[toJSON](../interfaces/Serializable.md#tojson)

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

[Serializable](../interfaces/Serializable.md).[toString](../interfaces/Serializable.md#tostring)

### under

▸ **under**(`val1`, `val2`): `boolean`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `val1` | `number` |
| `val2` | `number` |

#### Returns

`boolean`

### display

▸ `Static` **display**(`_`, `value`, `value2`): `string`

#### Parameters

| Name     | Type        |
| :------- | :---------- |
| `_`      | `CrossArgs` |
| `value`  | `string`    |
| `value2` | `string`    |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`Cross`](Cross.md)

#### Parameters

| Name                | Type        |
| :------------------ | :---------- |
| `__namedParameters` | `CrossArgs` |

#### Returns

[`Cross`](Cross.md)
