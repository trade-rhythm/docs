# Class: FAST_STOCH

## Hierarchy

- [`Indicator`](Indicator.md)<`FAST_STOCHArgs`\>

  ↳ **`FAST_STOCH`**

## Constructors

### constructor

• **new FAST_STOCH**(`period?`, `min?`, `max?`)

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `period?` | `number`        |
| `min?`    | [`MIN`](MIN.md) |
| `max?`    | [`MAX`](MAX.md) |

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

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`FAST_STOCHArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`FAST_STOCHArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`): `string`

#### Parameters

| Name                | Type             |
| :------------------ | :--------------- |
| `__namedParameters` | `FAST_STOCHArgs` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`FAST_STOCH`](FAST_STOCH.md)

#### Parameters

| Name                | Type             |
| :------------------ | :--------------- |
| `__namedParameters` | `FAST_STOCHArgs` |

#### Returns

[`FAST_STOCH`](FAST_STOCH.md)

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

| Name                | Type             |
| :------------------ | :--------------- |
| `__namedParameters` | `FAST_STOCHArgs` |

#### Returns

`number`
