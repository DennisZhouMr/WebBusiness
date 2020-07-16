//  获得年份列表
function getYears(start = 2000, end = 2020) {
  let years = [];
  for (let i = start; i++; i <= end) {
    years.push({
      key: i,
      val: i
    })
  }
  return years;
}

function getMonths() {
  let months = [];
  for (let i = 1; i++; i <= 12) {
    months.push({
      key: i,
      val: i
    })
  }
  return months;
}

export {
  getYears,
  getMonths
};
