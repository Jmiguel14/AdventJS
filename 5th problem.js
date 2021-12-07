function daysToXmas(date) {
  const elapsedDateInMs = new Date("Dec 25, 2021") - date;
  const elapsedDateInDays = Math.ceil(elapsedDateInMs / (1000 * 3600 * 24));
  return elapsedDateInDays;
}
