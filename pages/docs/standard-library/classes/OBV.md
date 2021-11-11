# Class: OBV

## Hierarchy

- [`Indicator`](Indicator.md)<`OBVArgs`\>

  ↳ **`OBV`**

## Constructors

### constructor

• **new OBV**(`obv?`, `prevClose?`)

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `obv?`       | `number` |
| `prevClose?` | `number` |

## Methods

### next

▸ **next**(): `number`

#### Returns

`number`

### nextBar

▸ **nextBar**(`bar`): `number`

#### Parameters

| Name  | Type                                                                    |
| :---- | :---------------------------------------------------------------------- |
| `bar` | [`Close`](../interfaces/Close.md) & [`Volume`](../interfaces/Volume.md) |

#### Returns

`number`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`OBVArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`OBVArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(): `string`

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`OBV`](OBV.md)

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `__namedParameters` | `OBVArgs` |

#### Returns

[`OBV`](OBV.md)

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
