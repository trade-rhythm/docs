# Class: CE

## Hierarchy

- [`Indicator`](Indicator.md)<`CEArgs`, `Chandelier`\>

  ↳ **`CE`**

## Constructors

### constructor

• **new CE**(`period?`, `multiplier?`, `atr?`, `min?`, `max?`)

#### Parameters

| Name          | Type            |
| :------------ | :-------------- |
| `period?`     | `number`        |
| `multiplier?` | `number`        |
| `atr?`        | [`ATR`](ATR.md) |
| `min?`        | [`MIN`](MIN.md) |
| `max?`        | [`MAX`](MAX.md) |

## Methods

### next

▸ **next**(`value`): `Chandelier`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `number` |

#### Returns

`Chandelier`

### nextBar

▸ **nextBar**(`bar`): `Chandelier`

#### Parameters

| Name  | Type                                                                                                |
| :---- | :-------------------------------------------------------------------------------------------------- |
| `bar` | [`High`](../interfaces/High.md) & [`Low`](../interfaces/Low.md) & [`Close`](../interfaces/Close.md) |

#### Returns

`Chandelier`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`CEArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`CEArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`): `string`

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `CEArgs` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`CE`](CE.md)

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `CEArgs` |

#### Returns

[`CE`](CE.md)

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
| `__namedParameters` | `CEArgs` |

#### Returns

`number`
