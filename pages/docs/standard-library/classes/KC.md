# Class: KC

## Hierarchy

- [`Indicator`](Indicator.md)<`KCArgs`, `KCOutput`\>
  ↳ **`KC`**

## Constructors

### constructor

• **new KC**(`period?`, `multiplier?`, `atr?`, `ema?`)

#### Parameters

| Name          | Type            |
| :------------ | :-------------- |
| `period?`     | `number`        |
| `multiplier?` | `number`        |
| `atr?`        | [`ATR`](ATR.md) |
| `ema?`        | [`EMA`](EMA.md) |

## Methods

### next

▸ **next**(`value`): `KCOutput`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`KCOutput`

### nextBar

▸ **nextBar**(`bar`): `KCOutput`

#### Parameters

| Name  | Type                                                                                                |
| :---- | :-------------------------------------------------------------------------------------------------- |
| `bar` | [`High`](../interfaces/High.md) & [`Low`](../interfaces/Low.md) & [`Close`](../interfaces/Close.md) |

#### Returns

`KCOutput`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`KCArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`KCArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`): `string`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `KCArgs` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`KC`](KC.md)

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `KCArgs` |

#### Returns

[`KC`](KC.md)

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
| `__namedParameters` | `KCArgs` |

#### Returns

`number`
