import * as dateUtil from '../util/DateUtil';

const now = '2018-01-02';
Date.now = jest.fn().mockReturnValue(now);

describe('Date util', () => {
  it('should add days to date', () => {
    const nextDay = dateUtil.addDays('2018-01-01', 1);
    expect(nextDay.getDate()).toEqual(2);
    expect(nextDay.getMonth()).toEqual(0);
    expect(nextDay.getFullYear()).toEqual(2018);
  });

  it('should get days between date from now', () => {
    expect(dateUtil.getDaysFromNow('2018-01-01')).toEqual(-1);
  });

  it('should convert date to date string format of YYYY-MM-DD', () => {
    expect(dateUtil.toDateString('2018-01-01')).toEqual('2018-01-01');
  });

  it('should return empty string if date is undefined', () => {
    expect(dateUtil.toDateString(undefined)).toEqual('');
    expect(dateUtil.toDateString(null)).toEqual('');
    expect(dateUtil.toDateString('')).toEqual('');
  });
});
