export function getDaysFromDate(date: any) {
  const today = new Date();

  const difference = today.getTime() - date.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));

  return days;
}
