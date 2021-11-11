# Class: ADX

## Hierarchy

- [`Indicator`](Indicator.md)<`ADXArgs`\>

  ↳ **`ADX`**

## Constructors

### constructor

• **new ADX**(`period?`, `dmi?`, `sum?`, `window?`, `prev?`, `count?`)

#### Parameters

| Name      | Type                             |
| :-------- | :------------------------------- |
| `period?` | `number`                         |
| `dmi?`    | [`DMI`](DMI.md)                  |
| `sum?`    | `number`                         |
| `window?` | [`Window`](Window.md)<`number`\> |
| `prev?`   | `number`                         |
| `count?`  | `number`                         |

## Methods

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

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`ADXArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`ADXArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(`__namedParameters`): `string`

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `__namedParameters` | `ADXArgs` |

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`ADX`](ADX.md)

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `__namedParameters` | `ADXArgs` |

#### Returns

[`ADX`](ADX.md)

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
| `__namedParameters` | `ADXArgs` |

#### Returns

`number`
