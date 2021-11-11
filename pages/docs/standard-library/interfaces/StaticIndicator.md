# Interface: StaticIndicator<T, V, VB\>

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |
| `V`  | `any`     |
| `VB` | `V`       |

## Constructors

### constructor

• **new StaticIndicator**(...`args`)

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

## Methods

### init

▸ **init**(`props`, `bars`): [[`Indicator`](../classes/Indicator)<`T`, `V`, `VB`\>, `V`]

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `props` | `T`        |
| `bars`  | `number`[] |

#### Returns

[[`Indicator`](../classes/Indicator)<`T`, `V`, `VB`\>, `V`]

### initBar

▸ **initBar**(`props`, `bars`): [[`Indicator`](../classes/Indicator)<`T`, `V`, `VB`\>, `VB`]

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `props` | `T`                          |
| `bars`  | [`Bar`](../modules.md#bar)[] |

#### Returns

[[`Indicator`](../classes/Indicator)<`T`, `V`, `VB`\>, `VB`]

### minBars

▸ **minBars**(`props`): `number`

#### Parameters

| Name    | Type |
| :------ | :--- |
| `props` | `T`  |

#### Returns

`number`
