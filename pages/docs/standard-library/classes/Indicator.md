# Class: Indicator<T, V, VB\>

## Type parameters

| Name | Type     |
| :--- | :------- |
| `T`  | `T`      |
| `V`  | `number` |
| `VB` | `V`      |

## Hierarchy

- **`Indicator`**

  ↳ [`ADX`](ADX)

  ↳ [`AO`](AO)

  ↳ [`ATR`](ATR)

  ↳ [`BB`](BB)

  ↳ [`CCI`](CCI)

  ↳ [`CE`](CE)

  ↳ [`DMI`](DMI)

  ↳ [`ER`](ER)

  ↳ [`EMA`](EMA)

  ↳ [`FAST_STOCH`](FAST_STOCH)

  ↳ [`MACD`](MACD)

  ↳ [`KC`](KC)

  ↳ [`MAD`](MAD)

  ↳ [`MAX`](MAX)

  ↳ [`MFI`](MFI)

  ↳ [`MIN`](MIN)

  ↳ [`OBV`](OBV)

  ↳ [`PPO`](PPO)

  ↳ [`RSI`](RSI)

  ↳ [`SLOW_STOCH`](SLOW_STOCH)

  ↳ [`SMA`](SMA)

  ↳ [`TR`](TR)

## Implements

- [`Serializable`](../interfaces/Serializable)<`T`\>

## Table of contents

### Constructors

- [constructor](Indicator.md#constructor)

### Methods

- [next](Indicator.md#next)
- [nextBar](Indicator.md#nextbar)
- [reset](Indicator.md#reset)
- [toJSON](Indicator.md#tojson)
- [toString](Indicator.md#tostring)
- [init](Indicator.md#init)
- [initBar](Indicator.md#initbar)

## Constructors

### constructor

• **new Indicator**<`T`, `V`, `VB`\>()

#### Type parameters

| Name | Type     |
| :--- | :------- |
| `T`  | `T`      |
| `V`  | `number` |
| `VB` | `V`      |

## Methods

### next

▸ `Abstract` **next**(`v`): `V`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `v`  | `number` |

#### Returns

`V`

### nextBar

▸ `Abstract` **nextBar**(`v`): `VB`

#### Parameters

| Name | Type                                                                                                                                  |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `v`  | [`Open`](../interfaces/Open) \| [`Close`](../interfaces/Close.md) \| [`High`](../interfaces/High.md) \| [`Low`](../interfaces/Low.md) |

#### Returns

`VB`

### reset

▸ `Abstract` **reset**(): `void`

#### Returns

`void`

### toJSON

▸ `Abstract` **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`T`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`T`\>

#### Implementation of

[Serializable](../interfaces/Serializable).[toJSON](../interfaces/Serializable.md#tojson)

### toString

▸ `Abstract` **toString**(): `string`

#### Returns

`string`

#### Implementation of

[Serializable](../interfaces/Serializable).[toString](../interfaces/Serializable.md#tostring)

### init

▸ `Static` **init**<`C`, `P`, `V`\>(`props`, `values`): [`C`, `V`]

#### Type parameters

| Name | Type                                                  |
| :--- | :---------------------------------------------------- |
| `C`  | extends [`Indicator`](Indicator)<`P`, `V`, `V`, `C`\> |
| `P`  | `P`                                                   |
| `V`  | `number`                                              |

#### Parameters

| Name     | Type       |
| :------- | :--------- |
| `props`  | `P`        |
| `values` | `number`[] |

#### Returns

[`C`, `V`]

### initBar

▸ `Static` **initBar**<`C`, `P`, `V`, `VB`\>(`props`, `bars`): [`C`, `VB`]

#### Type parameters

| Name | Type                                                   |
| :--- | :----------------------------------------------------- |
| `C`  | extends [`Indicator`](Indicator)<`P`, `V`, `VB`, `C`\> |
| `P`  | `P`                                                    |
| `V`  | `number`                                               |
| `VB` | `V`                                                    |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `props` | `P`                          |
| `bars`  | [`Bar`](../modules.md#bar)[] |

#### Returns

[`C`, `VB`]
