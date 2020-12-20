function configureData(goal) {
  const today = new Date();
  const startDate = new Date(goal.startDate);
  let dates = Array(Math.floor((today - startDate) / 86400000) + 1)
    .fill()
    .map((_, idx) => new Date(startDate.getTime() + idx * 86400000));
  let preselected = [];
  dates.map((date) =>
    preselected.push({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    })
  );
  return preselected;
}
export default configureData;
