type AnyObject = { [key: string]: any };

declare function isObject(x: unknown): x is Object;

const waitFor = (delay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const sameArrayItem = (arr1: any[], arr2: any[]) => {
  if (!arr1 || !arr2) return false;
  const filteredArr1 = arr1.filter((item) => !arr2.includes(item));
  const filteredArr2 = arr2.filter((item) => !arr1.includes(item));
  if (filteredArr1.length > 0 || filteredArr2.length > 0) return false;
  return true;
};

const sortByObjItem = ({
  list,
  key,
  desc,
}: {
  list: AnyObject[];
  key: string;
  desc?: boolean;
}) => {
  if (!list[0][key]) {
    return list;
  }

  const _list = [...list];
  const numbersRegExp = /\d+/g;
  _list.sort((objA, objB) => {
    if (desc) {
      return objA[key] < objB[key] ? 1 : -1;
    }
    return objA[key] > objB[key] ? 1 : -1;
  });
  _list.sort((objA, objB) => {
    let a = 0;
    let b = 0;
    let matchNumbers;
    matchNumbers = String(objA[key]).match(numbersRegExp);
    if (matchNumbers) {
      a = parseInt(matchNumbers[0], 10);
    }
    matchNumbers = String(objB[key]).match(numbersRegExp);
    if (matchNumbers) {
      b = parseInt(matchNumbers[0], 10);
    }
    return desc ? b - a : a - b;
  });
  return _list;
};

// EXAMPLES
// const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
// orderBy(['name', 'age'], ['asc', 'desc'], users); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
// orderBy(['name', 'age'], users); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
const orderBy = (
  keys: string[],
  orders: ('asc' | 'desc')[],
  list: AnyObject[],
) =>
  [...list].sort((a, b) =>
    keys.reduce((acc, key, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === 'desc' ? [b[key], a[key]] : [a[key], b[key]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0),
  );

// EXAMPLES
// groupBy([6.1, 4.2, 6.3], Math.floor); // {"4": [4.2], "6": [6.1, 6.3]}
// groupBy(['one', 'two', 'three'], 'length'); // [keys: ["3", "5"], byKey: {"3": ['one', 'two'], "5": ['three']}]
const groupBy = (arr: any[], fn: any) => {
  const byKey = arr
    .map(typeof fn === 'function' ? fn : (value) => value[fn])
    .reduce<AnyObject>((acc, value, i) => {
      const key = String(value);
      acc[key] = (acc[key] || []).concat(arr[i]);
      return acc;
    }, {});
  return { byKey, keys: Object.keys(byKey) };
};

/**
 *  깊은복사 JSON.parse(JSON.stringfy(obj)) 보다 성능 좋고, prototype 유지
 */
const deepCopy = (obj: AnyObject) => {
  let copy: AnyObject = {};
  if (Array.isArray(obj)) {
    copy = obj.slice().map((v) => {
      return deepCopy(v);
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = deepCopy(obj[attr]);
      }
    }
  } else {
    copy = obj;
  }
  return copy;
};

enum SPACING_TYPE {
  FRONT,
  BACK,
  BOTH,
  ALL,
}
/**
 * @param input - 처리할 문자열
 * @param type - "FRONT": 앞공백 "BACK": 뒷공백 "BOTH": 양쪽공백, "ALL": 모든공백
 */
const deleteSpacing = (input: string, type?: SPACING_TYPE) => {
  let R;
  switch (type) {
    case SPACING_TYPE.FRONT:
      R = input.replace(/^\s*/, '');
      break;
    case SPACING_TYPE.BACK:
      R = input.replace(/\s*$/, '');
      break;
    case SPACING_TYPE.BOTH:
      R = input.replace(/(^\s*)|(\s*$)/g, '');
      break;
    case SPACING_TYPE.ALL:
      R = input.replace(/(\s*)/g, '');
      break;
    default:
      R = input.replace(/(\s*)/g, '');
      break;
  }
  return R;
};

const uniqueObjArrayFor = (array: AnyObject[], key: string) => {
  return array.filter(
    (item, i) =>
      array.findIndex((item2) => {
        return item[key] === item2[key];
      }) === i,
  );
};

let isCalled = false;
let timer: any;
/**
 * @param functionTobeCalled method
 * @param delay timer
 */
const oneTap = (cb: Function, delay = 1000) => {
  if (!isCalled) {
    isCalled = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      isCalled = false;
    }, delay);
    return cb();
  }
};

export default {
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
};
