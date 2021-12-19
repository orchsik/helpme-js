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

<br/>

## 🎈 HHelper

### In javascript

```js
const { HHelper } = require('helpme-js');
const {
  waitFor,
  sameArrayItem,
  sortByObjItem,
  orderBy,
  groupBy,
  deepCopy,
  SPACING_TYPE,
  deleteSpacing,
  uniqueObjArrayFor,
  oneTap,
} = HHelper;
```

### In typescript

```ts
import { HHelper } from 'helpme-js';
```

### Methods

### waitFor(delay)

```ts
await waitFor(); // default 1000 millisecond
await waitFor(3000);
```

### sameArrayItem(arr1, arr2): boolean

```ts
sameArrayItem([3, 2, 1], [1, 2, 3]); // true
```

### sortByObjItem({list, key})

- Sort by key Sort by number, then sort by character

```ts
const list = [
  { name: 'ccc_1', age: 30 },
  { name: 'bbb_2', age: 20 },
  { name: 'aaa_3', age: 10 },
];
sortByObjItem({ list, key: 'name' });
// [
//   { name: 'ccc_1', age: 30 },
//   { name: 'bbb_2', age: 20 },
//   { name: 'aaa_3', age: 10 },
// ];
```

### orderBy( keys: string[], orders: ('asc' | 'desc')[], list: AnyObject[])

```ts
const users = [
  { name: 'c', age: 3, sex: 0 },
  { name: 'b', age: 2, sex: 0 },
  { name: 'a', age: 2, sex: 1 },
];
orderBy(['age', 'sex'], ['asc', 'asc'], users);
// [
//   { name: 'b', age: 2, sex: 0 },
//   { name: 'a', age: 2, sex: 1 },
//   { name: 'c', age: 3, sex: 0 },
// ];
```

### groupBy(arr: any[], fn: any)

```ts
groupBy([6.1, 4.2, 6.3], Math.floor);
// {
//   keys: ['4', '6'],
//   byKey: { '4': [4.2], '6': [6.1, 6.3] },
// };
```

### oneTap(callback, delay)

```ts
oneTap(() => console.log('execute callback'), 1000);
```
