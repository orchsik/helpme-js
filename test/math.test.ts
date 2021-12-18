import { HMath } from '../lib';
import { ESTIMATE_TYPE } from '../lib/math';

describe('HMath', () => {
  it('ceil input number', () => {
    expect(HMath.estimateNumber(99.111, 1, ESTIMATE_TYPE.CEIL)).toBe(100);
    expect(HMath.estimateNumber(99.555, 1, ESTIMATE_TYPE.CEIL)).toBe(100);
    expect(HMath.estimateNumber(99.999, 1, ESTIMATE_TYPE.CEIL)).toBe(100);
    expect(HMath.estimateNumber(12345, 0, ESTIMATE_TYPE.CEIL)).toBe(12350);
    expect(HMath.estimateNumber(12345, -1, ESTIMATE_TYPE.CEIL)).toBe(12400);
    expect(HMath.estimateNumber(12345, -2, ESTIMATE_TYPE.CEIL)).toBe(13000);
  });
  it('floor input number', () => {
    expect(HMath.estimateNumber(99.111, 1, ESTIMATE_TYPE.FLOOR)).toBe(99);
    expect(HMath.estimateNumber(99.555, 1, ESTIMATE_TYPE.FLOOR)).toBe(99);
    expect(HMath.estimateNumber(99.999, 1, ESTIMATE_TYPE.FLOOR)).toBe(99);
    expect(HMath.estimateNumber(12345, 0, ESTIMATE_TYPE.FLOOR)).toBe(12340);
    expect(HMath.estimateNumber(12345, -1, ESTIMATE_TYPE.FLOOR)).toBe(12300);
    expect(HMath.estimateNumber(12345, -2, ESTIMATE_TYPE.FLOOR)).toBe(12000);
  });
  it('round input number', () => {
    expect(HMath.estimateNumber(99.111, 1, ESTIMATE_TYPE.ROUND)).toBe(99);
    expect(HMath.estimateNumber(99.555, 1, ESTIMATE_TYPE.ROUND)).toBe(100);
    expect(HMath.estimateNumber(99.999, 1, ESTIMATE_TYPE.ROUND)).toBe(100);
    expect(HMath.estimateNumber(12345, 0, ESTIMATE_TYPE.ROUND)).toBe(12350);
    expect(HMath.estimateNumber(12345, -1, ESTIMATE_TYPE.ROUND)).toBe(12300);
    expect(HMath.estimateNumber(12345, -2, ESTIMATE_TYPE.ROUND)).toBe(12000);
  });
  it('round input number by default', () => {
    expect(HMath.estimateNumber(99.111, 1)).toBe(99);
    expect(HMath.estimateNumber(99.555, 1)).toBe(100);
    expect(HMath.estimateNumber(99.999, 1)).toBe(100);
    expect(HMath.estimateNumber(12345, 0)).toBe(12350);
    expect(HMath.estimateNumber(12345, -1)).toBe(12300);
    expect(HMath.estimateNumber(12345, -2)).toBe(12000);
  });
});
