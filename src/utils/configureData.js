function configureData(goal) {
  const today = new Date();
  const startDate = new Date(goal.startDate);

  if (startDate >= today) {
    return "";
  } else {
    let data = Array(Math.floor((today - startDate) / 86400000) + 1)
      .fill()
      .map((_, idx) => new Date(startDate.getTime() + idx * 86400000));

    data.pop();
    let preselected = [];
    data.map((date) =>
      preselected.push({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
      })
    );
    return preselected;
  }
}
export default configureData;
