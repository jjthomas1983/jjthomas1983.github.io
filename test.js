function
calculateDaysBetweenDates(date1, date2) {
  const
    oneDay = 24 * 60 * 60 * 1000,
    firstDate = new Date(date1),
    secondDate = new Date(date2),
    diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}