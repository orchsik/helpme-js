enum APPROXIMATE_TYPE {
  CEIL = '올림',
  FLOOR = '내림',
  ROUND = '반내림',
}

/**
 * @param input - 처리할 숫자
 * @param approximatePlace  - 어림할 소수점 자릿수 (~에서 반올림)
 * @param approximateType - CEIL: 올림 FLOOR: 내림 ROUND: 반올림
 */
const estimateNumber = (
  input: number,
  approximatePlace: number,
  approximateType?: APPROXIMATE_TYPE,
) => {
  switch (approximateType) {
    case APPROXIMATE_TYPE.CEIL: {
      const C = Math.pow(10, approximatePlace - 1);
      const R = Math.ceil(input * C) / C;
      return R;
    }
    case APPROXIMATE_TYPE.FLOOR: {
      const C = Math.pow(10, approximatePlace - 1);
      const R = Math.floor(input * C) / C;
      return R;
    }
    case APPROXIMATE_TYPE.ROUND: {
      const C = Math.pow(10, approximatePlace - 1);
      const R = Math.round(input * C) / C;
      return R;
    }
    default: {
      const C = Math.pow(10, approximatePlace - 1);
      const R = Math.round(input * C) / C;
      return R;
    }
  }
};

export default {
  estimateNumber,
  APPROXIMATE_TYPE,
};
