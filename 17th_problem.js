function countPackages(carriers, carrierID) {
  let totalPackages = 0;
  for (var carrier of carriers) {
    const [name, packages, subordinates] = carrier;
    if (name === carrierID) {
      const numberOfSubordinates = subordinates.length;
      if (numberOfSubordinates > 0) {
        totalPackages = packages;
        for (var subordinate of subordinates) {
          totalPackages += countPackages(carriers, subordinate);
        }
        return totalPackages;
      } else {
        return (totalPackages = packages);
      }
    }
  }
}

console.log(
  countPackages(
    [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ],
    "dapelu"
  )
);
