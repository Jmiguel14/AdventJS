function checkSledJump(heights) {
  const maxHeight = Math.max(...heights);
  const [ascend, descend] = heights.join().replaceAll(",", "").split(maxHeight);
  if (!descend || !ascend) return false;
  const isAscendingStricly = ascend.split("").every((el, i) => {
    let nextE = ascend[i + 1];
    if (typeof nextE === "undefined") return el;
    return el < nextE;
  });
  const isDescendingStricly = descend.split("").every((el, i) => {
    let nextE = descend[i + 1];
    if (typeof nextE === "undefined") return el;
    return el > nextE;
  });
  return isAscendingStricly && isDescendingStricly;
}
