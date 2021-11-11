# Class: DMI

## Hierarchy

- [`Indicator`](Indicator.md)<`DMIArgs`\>

  ↳ **`DMI`**

## Constructors

### constructor

• **new DMI**(`period?`, `tr?`, `k?`, `index?`, `atrSum?`, `upSum?`, `downSum?`, `prevBar?`)

#### Parameters

| Name       | Type                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------------- |
| `period?`  | `number`                                                                                            |
| `tr?`      | [`TR`](TR.md)                                                                                       |
| `k?`       | `number`                                                                                            |
| `index?`   | `number`                                                                                            |
| `atrSum?`  | `number`                                                                                            |
| `upSum?`   | `number`                                                                                            |
| `downSum?` | `number`                                                                                            |
| `prevBar?` | [`High`](../interfaces/High.md) & [`Low`](../interfaces/Low.md) & [`Close`](../interfaces/Close.md) |

## Methods

### display

▸ **display**(`value`): `string`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`string`

### getDirection

▸ **getDirection**(`bar`): [`number`, `number`]

#### Parameters

| Name  | Type                                                                                                |
| :---- | :-------------------------------------------------------------------------------------------------- |
| `bar` | [`High`](../interfaces/High.md) & [`Low`](../interfaces/Low.md) & [`Close`](../interfaces/Close.md) |

#### Returns

[`number`, `number`]

### next

▸ **next**(): `number`

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

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`DMIArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`DMIArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`): `string`

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `__namedParameters` | `DMIArgs` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`DMI`](DMI.md)

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `__namedParameters` | `DMIArgs` |

#### Returns

[`DMI`](DMI.md)

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

| Name                | Type      |
| :------------------ | :-------- |
| `__namedParameters` | `DMIArgs` |

#### Returns

`number`
