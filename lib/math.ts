export enum ESTIMATE_TYPE {
  CEIL = '올림',
  FLOOR = '내림',
  ROUND = '반내림',
}

/**
 * @param input - 처리할 숫자
 * @param calDecimalPlace  - 어림할 소수점 자릿수 (~에서 반올림)
 * @param type - CEIL: 올림 FLOOR: 내림 ROUND: 반올림
 */
const estimateNumber = (
  input: number,
  calDecimalPlace: number,
  type?: ESTIMATE_TYPE,
) => {
  switch (type) {
    case ESTIMATE_TYPE.CEIL: {
      const C = Math.pow(10, calDecimalPlace - 1);
      const R = Math.ceil(input * C) / C;
      return R;
    }
    case ESTIMATE_TYPE.FLOOR: {
      const C = Math.pow(10, calDecimalPlace - 1);
      const R = Math.floor(input * C) / C;
      return R;
    }
    case ESTIMATE_TYPE.ROUND: {
      const C = Math.pow(10, calDecimalPlace - 1);
      const R = Math.round(input * C) / C;
      return R;
    }
    default: {
      const C = Math.pow(10, calDecimalPlace - 1);
      const R = Math.round(input * C) / C;
      return R;
    }
  }
};

export default {
  estimateNumber,
};
