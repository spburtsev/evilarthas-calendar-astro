export function getDaysInMonth(params?: { year: number; month: number }) {
  if (!params) {
    const now = new Date();
    params = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
    };
  }
  const { year, month } = params;
  return new Date(year, month, 0).getDate();
}

export function yearToEvilArthasYear(year: number) {
  if (year < 2015) return null;
  const yearDiff = year - 2014;
  return year + yearDiff * 30;
}
