# Class: TR

## Hierarchy

- [`Indicator`](Indicator.md)<`TRArgs`\>

  ↳ **`TR`**

## Constructors

### constructor

• **new TR**(`prev?`)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `prev?` | `number` |

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

| Name  | Type                                                                                                |
| :---- | :-------------------------------------------------------------------------------------------------- |
| `bar` | [`High`](../interfaces/High.md) & [`Low`](../interfaces/Low.md) & [`Close`](../interfaces/Close.md) |

#### Returns

`number`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`TRArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`TRArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(): `string`

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`TR`](TR.md)

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `TRArgs` |

#### Returns

[`TR`](TR.md)

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

▸ `Static` **minBars**(): `number`

#### Returns

`number`
