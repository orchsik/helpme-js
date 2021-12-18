import { HColors } from '../lib';

describe('HColors', () => {
  it('return white, blacok color string', () => {
    expect(HColors.black).toBe('#000000');
    expect(HColors.white).toBe('#ffffff');
  });
  it('return other colors', () => {
    const expected = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    Object.keys(HColors).forEach((colorKey) => {
      if (colorKey === 'black' || colorKey === 'white') {
        return;
      }
      expect(Object.keys(HColors[colorKey])).toEqual(
        expect.arrayContaining(expected),
      );
    });
  });
});
