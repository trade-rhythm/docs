# Class: AO

## Hierarchy

- [`Indicator`](Indicator.md)<`AOArgs`\>

  ↳ **`AO`**

## Constructors

### constructor

• **new AO**(`fast?`, `slow?`)

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `fast?` | `number` \| [`SMA`](SMA.md) |
| `slow?` | `number` \| [`SMA`](SMA.md) |

## Methods

### next

▸ **next**(): `number`

#### Returns

`number`

### nextBar

▸ **nextBar**(`bar`): `number`

#### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `bar` | [`High`](../interfaces/High.md) & [`Low`](../interfaces/Low.md) |

#### Returns

`number`

### reset

▸ **reset**(): `void`

#### Returns

`void`

### toJSON

▸ **toJSON**(): [`JSONDef`](../modules.md#jsondef)<`AOArgs`\>

#### Returns

[`JSONDef`](../modules.md#jsondef)<`AOArgs`\>

### toString

▸ **toString**(): `string`

#### Returns

`string`

### display

▸ `Static` **display**(): `string`

#### Returns

`string`

### from

▸ `Static` **from**(`__namedParameters`): [`AO`](AO.md)

#### Parameters

| Name                | Type     |
| :------------------ | :------- |
| `__namedParameters` | `AOArgs` |

#### Returns

[`AO`](AO.md)

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
| `__namedParameters` | `AOArgs` |

#### Returns

`number`
