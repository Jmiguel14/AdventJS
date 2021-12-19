function learn(time, courses) {
  let betterOptionInHours = 0;
  let coursesToEnroll = null;
  for (var i = 0; i < courses.length; i++) {
    for (var j = i + 1; j < courses.length; j++) {
      const twoCoursesHours = courses[i] + courses[j];
      if (twoCoursesHours >= betterOptionInHours && twoCoursesHours <= time) {
        betterOptionInHours = twoCoursesHours;
        coursesToEnroll = [i, j];
      }
      if (twoCoursesHours === time) return [i, j];
    }
  }
  return coursesToEnroll
}
