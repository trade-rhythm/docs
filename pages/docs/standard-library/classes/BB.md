# Class: BB

## Hierarchy

- [`Indicator`](Indicator.md)<`BBArgs`, `Band`\>

  ↳ **`BB`**

## Constructors

### constructor

• **new BB**(`period?`, `multiplier?`, `sd?`)

#### Parameters

| Name          | Type          |
| :------------ | :------------ |
| `period?`     | `number`      |
| `multiplier?` | `number`      |
| `sd?`         | [`SD`](SD.md) |

## Methods

### next

▸ **next**(`value`): `Band`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`Band`

### nextBar

▸ **nextBar**(`bar`): `Band`

#### Parameters

| Name  | Type                              |
| :---- | :-------------------------------- |
| `bar` | [`Close`](../interfaces/Close.md) |

#### Returns

`Band`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`BBArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`BBArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`, `value?`): `string`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `BBArgs` |
| `value?`            | `string` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`BB`](BB.md)

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `BBArgs` |

#### Returns

[`BB`](BB.md)

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
| `__namedParameters` | `BBArgs` |

#### Returns

`number`
