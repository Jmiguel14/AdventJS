function missingReindeer(ids) {
  const length = ids.length;
  ids.sort((a, b) => a - b);
  for (var reindeer = 0; reindeer <= length; reindeer++) {
    if (reindeer !== ids[reindeer]) return reindeer;
  }
}
