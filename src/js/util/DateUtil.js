const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

const toDate = (date) => new Date(date);

export const addDays = (date, days) => {
  const dateObj = toDate(date);
  return toDate(dateObj.setDate(dateObj.getDate() + days));
};

export const getDaysFromNow = date => {
  const msDifference = toDate(date).getTime() - toDate(toDateString(Date.now()));
  return Math.round(msDifference / MS_IN_A_DAY);
};

export const toDateString = date =>
  date ? toDate(date).toJSON().split('T')[0] : '';
