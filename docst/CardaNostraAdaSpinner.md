# Class: CardaNostraAdaSpinner

Create a new ada spinner to attach to SVG.

**`remarks`**
This method is part of the cardano-lsd animation library.

**`typeparam`**

**`returns`** A new CardaNostraAdaSpinner

## Table of contents

### Constructors

- [constructor](../wiki/CardaNostraAdaSpinner#constructor-1)

### Properties

- [\_color](../wiki/CardaNostraAdaSpinner#_color-1)
- [\_delay](../wiki/CardaNostraAdaSpinner#_delay-1)
- [\_duration](../wiki/CardaNostraAdaSpinner#_duration-1)
- [\_htmlId](../wiki/CardaNostraAdaSpinner#_htmlid-1)

### Accessors

- [color](../wiki/CardaNostraAdaSpinner#color-1)
- [delay](../wiki/CardaNostraAdaSpinner#delay-1)
- [duration](../wiki/CardaNostraAdaSpinner#duration-1)
- [htmlId](../wiki/CardaNostraAdaSpinner#htmlid-1)

### Methods

- [attachSVG](../wiki/CardaNostraAdaSpinner#attachsvg-1)

## Constructors

### constructor

• **new CardaNostraAdaSpinner**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `spinnerSetting` |

#### Defined in

[components/carda-nostra-ada-spinner.ts:46](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L46)

## Properties

### \_color

• `Private` **\_color**: `string`

#### Defined in

[components/carda-nostra-ada-spinner.ts:42](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L42)

___

### \_delay

• `Private` **\_delay**: `number`

#### Defined in

[components/carda-nostra-ada-spinner.ts:43](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L43)

___

### \_duration

• `Private` **\_duration**: `number`

#### Defined in

[components/carda-nostra-ada-spinner.ts:44](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L44)

___

### \_htmlId

• `Private` **\_htmlId**: `string`

#### Defined in

[components/carda-nostra-ada-spinner.ts:41](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L41)

## Accessors

### color

• `get` **color**(): `string`

Get Element Color.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id", color:"green"});
const spinnerColor = spinner.color;
// green
```

**`readonly`**

#### Returns

`string`

#### Defined in

[components/carda-nostra-ada-spinner.ts:106](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L106)

• `set` **color**(`value`): `void`

Get Element Color.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id", color:"green"});
const spinnerColor = spinner.color;
// green
```

**`readonly`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[components/carda-nostra-ada-spinner.ts:110](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L110)

___

### delay

• `get` **delay**(): `number`

Get Animation Delay.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id", delay:0.5});
const spinnerDelay = spinner.delay;
// 0.5
```

**`readonly`**

#### Returns

`number`

#### Defined in

[components/carda-nostra-ada-spinner.ts:126](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L126)

• `set` **delay**(`value`): `void`

Get Animation Delay.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id", delay:0.5});
const spinnerDelay = spinner.delay;
// 0.5
```

**`readonly`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[components/carda-nostra-ada-spinner.ts:130](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L130)

___

### duration

• `get` **duration**(): `number`

Get Animation Duration.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id", duration:10});
const spinnerDuration = spinner.duration;
// 10
```

**`readonly`**

#### Returns

`number`

#### Defined in

[components/carda-nostra-ada-spinner.ts:146](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L146)

• `set` **duration**(`value`): `void`

Get Animation Duration.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id", duration:10});
const spinnerDuration = spinner.duration;
// 10
```

**`readonly`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[components/carda-nostra-ada-spinner.ts:150](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L150)

___

### htmlId

• `get` **htmlId**(): `string`

Get Element Id.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id"});
const spinnerId = spinner.htmlId;
```

**`readonly`**

#### Returns

`string`

#### Defined in

[components/carda-nostra-ada-spinner.ts:87](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L87)

• `set` **htmlId**(`value`): `void`

Get Element Id.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id"});
const spinnerId = spinner.htmlId;
```

**`readonly`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[components/carda-nostra-ada-spinner.ts:91](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L91)

## Methods

### attachSVG

▸ **attachSVG**(): `Promise`<`void`\>

Attach SVG and run animation on CardaNostraAdaSpinner by Element Id.

**`remarks`**
This method attaches and animates the element.

**`example`**

```ts
let spinner = new CardaNostraAdaSpinner({id="element-id"});
// after page load attach svg to animate
spinner.attachSVG();
```

**`eventproperty`**

#### Returns

`Promise`<`void`\>

#### Defined in

[components/carda-nostra-ada-spinner.ts:261](https://github.com/CardanoGoat-io/cardano-lsd/blob/62c8fb3/src/components/carda-nostra-ada-spinner.ts#L261)
