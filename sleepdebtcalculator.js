function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (idealSleepHours === actualSleepHours) {
    console.log("yeah, you got it! ");
  } else if (idealSleepHours >= actualSleepHours) {
    console.log("you need to sleep more");
  } else {
    console.log("you sleep more than needed");
  }
}
