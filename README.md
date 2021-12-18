# helpme-js

## Installing

Using npm:

```bash
$ npm install helpme-js
```

Using yarn:

```bash
$ yarn add helpme-js
```

<br/>

## 🎈 HColors

### In javascript

```js
const { HColors } = require('helpme-js');
HColors.red[0];
HColors.red[5];
HColors.red[9];
```

### In typescript

```ts
import { HColors } from 'helpme-js';
HColors.red[0];
HColors.red[5];
HColors.red[9];
```

### There are the following colors and the 10 colors that change gradually.

- transparency
- grey
- red
- pink
- grape
- violet
- indigo
- blue
- cyan
- teal
- green
- lime
- yellow
- orange
  <br/>

## 🎈 HMath

### In javascript

```js
const { HMath } = require("helpme-js");
HMath.estimateNumber(15.24, 1, APPROXIMATE_TYPE.CEIL))
HMath.estimateNumber(15.24, 1, APPROXIMATE_TYPE.FLOOR))
HMath.estimateNumber(15.24, 1, APPROXIMATE_TYPE.ROUND))
```

### In typescript

```ts
import { HMath } from "helpme-js";
HMath.estimateNumber(15.24, 1, APPROXIMATE_TYPE.CEIL))
HMath.estimateNumber(15.24, 1, APPROXIMATE_TYPE.FLOOR))
HMath.estimateNumber(15.24, 1, APPROXIMATE_TYPE.ROUND))
```

### Methods

- HMath.estimateNumber(number, approximatePlace[, approximateType])
  > approximateType : "올림", "내림", "반올림", (only typescript) APPROXIMATE_TYPE.CEIL, APPROXIMATE_TYPE.FLOOR, APPROXIMATE_TYPE.ROUND
