function groupBy(collection, it) {
  const tidyGroups = collection.reduce((acc, e) => {
    let key = "";
    if (typeof it === "function") {
      key = it(e);
    } else {
      key = e[it];
    }
    if (acc[key]) {
      acc[key].push(e);
    } else {
      acc[key] = [e];
    }
    return acc;
  }, {});
  return tidyGroups;
}
