# Class: Window<T\>

## Type parameters

| Name | Type     |
| :--- | :------- |
| `T`  | `number` |

## Implements

- [`Serializable`](../interfaces/Serializable.md)<`WindowArgs`<`T`\>\>

## Constructors

### constructor

• **new Window**<`T`\>(`size`, `index?`, `array?`, `needsInit?`)

#### Type parameters

| Name | Type     |
| :--- | :------- |
| `T`  | `number` |

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `size`       | `number`  |
| `index?`     | `number`  |
| `array?`     | `any`[]   |
| `needsInit?` | `boolean` |

## Methods

### back

▸ **back**(`count`): `T`[]

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `count` | `number` |

#### Returns

`T`[]

### get

▸ **get**(`idx`): `T`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `idx` | `number` |

#### Returns

`T`

### init

▸ **init**(`value`): `void`

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`void`

### push

▸ **push**(`v`): `T`

#### Parameters

| Name | Type |
| :--- | :--- |
| `v`  | `T`  |

#### Returns

`T`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`WindowArgs`<`T`\>\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`WindowArgs`<`T`\>\>

#### Implementation of

[Serializable](../interfaces/Serializable.md).[toJSON](../interfaces/Serializable.md#tojson)

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

[Serializable](../interfaces/Serializable.md).[toString](../interfaces/Serializable.md#tostring)

### values

▸ **values**(): `T`[]

#### Returns

`T`[]

### display

▸ `Static` **display**<`T`\>(`__namedParameters`): `string`

#### Type parameters

| Name | Type     |
| :--- | :------- |
| `T`  | `number` |

#### Parameters

| Name                | Type               |
| :------------------ | :----------------- |
| `__namedParameters` | `WindowArgs`<`T`\> |

#### Returns

`string`

### from

▸ `Static` **from**<`T`\>(`__namedParameters`): [`Window`](Window.md)<`T`\>

#### Type parameters

| Name | Type     |
| :--- | :------- |
| `T`  | `number` |

#### Parameters

| Name                | Type               |
| :------------------ | :----------------- |
| `__namedParameters` | `WindowArgs`<`T`\> |

#### Returns

[`Window`](Window.md)<`T`\>
