# Class: SD

## Hierarchy

- [`Indicator`](Indicator.md)<`SDArgs`\>

  ↳ **`SD`**

## Constructors

### constructor

• **new SD**(`period?`, `count?`, `m?`, `m2?`, `window?`)

#### Parameters

| Name      | Type                             |
| :-------- | :------------------------------- |
| `period?` | `number`                         |
| `count?`  | `number`                         |
| `m?`      | `number`                         |
| `m2?`     | `number`                         |
| `window?` | [`Window`](Window.md)<`number`\> |

## Methods

### next

▸ **next**(`value`): `number`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`number`

### nextBar

▸ **nextBar**(`bar`): `number`

#### Parameters

| Name  | Type                              |
| :---- | :-------------------------------- |
| `bar` | [`Close`](../interfaces/Close.md) |

#### Returns

`number`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`SDArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`SDArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`, `value?`): `string`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `SDArgs` |
| `value?`            | `string` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`SD`](SD.md)

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `SDArgs` |

#### Returns

[`SD`](SD.md)

### init

▸ `Static` **init**<`C`, `P`, `V`\>(`props`, `values`): [`C`, `V`]

#### Type parameters

| Name | Type                                                     |
| :--- | :------------------------------------------------------- |
| `C`  | extends [`Indicator`](Indicator.md)<`P`, `V`, `V`, `C`\> |
| `P`  | `P`                                                      |
| `V`  | `number`                                                 |

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `props`  | `P`        |
| `values` | `number`[] |

#### Returns

[`C`, `V`]

#### Inherited from

[Indicator](Indicator.md).[init](Indicator.md#init)

### initBar

▸ `Static` **initBar**<`C`, `P`, `V`, `VB`\>(`props`, `bars`): [`C`, `VB`]

#### Type parameters

| Name | Type                                                      |
| :--- | :-------------------------------------------------------- |
| `C`  | extends [`Indicator`](Indicator.md)<`P`, `V`, `VB`, `C`\> |
| `P`  | `P`                                                       |
| `V`  | `number`                                                  |
| `VB` | `V`                                                       |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `props` | `P`                          |
| `bars`  | [`Bar`](../modules.md#bar)[] |

#### Returns

[`C`, `VB`]

#### Inherited from

[Indicator](Indicator.md).[initBar](Indicator.md#initbar)

### minBars

▸ `Static` **minBars**(`__namedParameters`): `number`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `SDArgs` |

#### Returns

`number`
