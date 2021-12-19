import { HHelper } from '../lib';
const {
  waitFor,
  sameArrayItem,
  sortByObjItem,
  orderBy,
  groupBy,
  deepCopy,
  deleteSpacing,
  SPACING_TYPE,
  uniqueObjArrayFor,
  oneTap,
} = HHelper;

jest.useFakeTimers(); //  This mocks out setTimeout and other timer functions with mock functions.
jest.spyOn(global, 'setTimeout');

describe('HHelper.wiatFor', () => {
  it('executes with 1000 delay by default', () => {
    waitFor().then((data) => {
      expect(data).toBe(undefined);
    });
    expect(setTimeout).toHaveBeenCalledTimes(1); // Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  it('executes with given delay', () => {
    waitFor(3000).then((data) => {
      expect(data).toBe(undefined);
    });
    expect(setTimeout).toHaveBeenCalledTimes(1); // Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });
});

describe('HHelper.sameArrayItem', () => {
  it('checks if an array has the same item in any order', () => {
    expect(sameArrayItem([], [])).toBe(true);
    expect(sameArrayItem([1], [])).toBe(false);
    expect(sameArrayItem([3, 2, 1], [1, 2, 3])).toBe(true);
    expect(sameArrayItem([true], [true])).toBe(true);
    expect(sameArrayItem([undefined], [])).toBe(false);
    expect(sameArrayItem([null], [])).toBe(false);
  });
});

describe('HHelper.sortByObjItem', () => {
  const list = [
    { name: 'ccc', age: 30 },
    { name: 'bbb', age: 20 },
    { name: 'aaa', age: 10 },
  ];
  it('do not sort by missing key', () => {
    expect(sortByObjItem({ list, key: '' })).toEqual(list);
  });
  it('sort given key', () => {
    expect(sortByObjItem({ list, key: 'name' })).toEqual([
      { name: 'aaa', age: 10 },
      { name: 'bbb', age: 20 },
      { name: 'ccc', age: 30 },
    ]);
    expect(sortByObjItem({ list, key: 'age' })).toEqual([
      { name: 'aaa', age: 10 },
      { name: 'bbb', age: 20 },
      { name: 'ccc', age: 30 },
    ]);
  });
  it('sort desc given key', () => {
    expect(sortByObjItem({ list, key: 'name', desc: true })).toEqual([
      { name: 'ccc', age: 30 },
      { name: 'bbb', age: 20 },
      { name: 'aaa', age: 10 },
    ]);
    expect(sortByObjItem({ list, key: 'age', desc: true })).toEqual([
      { name: 'ccc', age: 30 },
      { name: 'bbb', age: 20 },
      { name: 'aaa', age: 10 },
    ]);
  });
  it('number sort comes first', () => {
    const list = [
      { name: 'ccc_1', age: 30 },
      { name: 'bbb_2', age: 20 },
      { name: 'aaa_3', age: 10 },
    ];
    expect(sortByObjItem({ list, key: 'name' })).toEqual([
      { name: 'ccc_1', age: 30 },
      { name: 'bbb_2', age: 20 },
      { name: 'aaa_3', age: 10 },
    ]);
  });
});

describe('HHelper.orderBy', () => {
  const users = [
    { name: 'c', age: 3, sex: 0 },
    { name: 'b', age: 2, sex: 0 },
    { name: 'a', age: 2, sex: 1 },
  ];
  it('order by given keys and order type', () => {
    expect(orderBy(['age', 'sex'], ['asc', 'asc'], users)).toEqual([
      { name: 'b', age: 2, sex: 0 },
      { name: 'a', age: 2, sex: 1 },
      { name: 'c', age: 3, sex: 0 },
    ]);
  });
});

describe('HHelper.groupBy', () => {
  it('group by given function', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      keys: ['4', '6'],
      byKey: { '4': [4.2], '6': [6.1, 6.3] },
    });
  });
  it('group by given function-name of item', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({
      keys: ['3', '5'],
      byKey: { '3': ['one', 'two'], '5': ['three'] },
    });
  });
});

describe('HHelper.deepCopy', () => {
  it('deepCopy', () => {
    const source = [
      { name: 'aaa', age: 111 },
      { name: 'bbb', age: 222 },
      { name: 'ccc', age: 333 },
    ];
    const result = deepCopy(source);
    expect(result[0]).not.toBe(source[0]);
    expect(source[0]).toBe(source[0]);
  });
});

describe('HHelper.deleteSpacing', () => {
  it('deleteSpacing', () => {
    expect(deleteSpacing('     aaa     ')).toBe('aaa');
    expect(deleteSpacing('     aaa     ', SPACING_TYPE.ALL)).toBe('aaa');
    expect(deleteSpacing('     aaa     ', SPACING_TYPE.FRONT)).toBe('aaa     ');
    expect(deleteSpacing('     aaa     ', SPACING_TYPE.BACK)).toBe('     aaa');
    expect(deleteSpacing('1  aaa  2', SPACING_TYPE.BOTH)).toBe('1  aaa  2');
    expect(deleteSpacing('1  aaa  2', SPACING_TYPE.ALL)).toBe('1aaa2');
    expect(deleteSpacing('1  aaa  2')).toBe('1aaa2');
  });
});

describe('HHelper.uniqueObjArrayFor', () => {
  const objArray = [
    { name: 'aaa', age: 111 },
    { name: 'bbb', age: 222 },
    { name: 'aaa', age: 333 },
    { name: 'aaa', age: 111 },
  ];
  it('uniqueObjArrayFor', () => {
    expect(uniqueObjArrayFor(objArray, 'name')).toEqual([
      { name: 'aaa', age: 111 },
      { name: 'bbb', age: 222 },
    ]);
  });
});

describe('HHelper.oneTap', () => {
  it('executes default 1000 delay', () => {
    oneTap(jest.fn());
    expect(setTimeout).toHaveBeenCalledTimes(1); // Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
  it('executes with given delay', () => {
    oneTap(jest.fn());
    expect(setTimeout).toHaveBeenCalledTimes(0); // Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
  });
});
