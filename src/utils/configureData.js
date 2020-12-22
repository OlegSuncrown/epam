function configureData(goal) {
  let today = new Date();
  let todayDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  const defaultFrom = {
    year: new Date(goal.startDate).getFullYear(),
    month: new Date(goal.startDate).getMonth() + 1,
    day: new Date(goal.startDate).getDate(),
  };

  let defaultTo;

  if (
    new Date(goal.lastUpdateDate).setHours(0, 0, 0, 0) ===
    today.setHours(0, 0, 0, 0)
  ) {
    defaultTo = todayDate;
  } else {
    defaultTo = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate() - 1,
    };
  }

  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  };

  return defaultValue;
}
export default configureData;
