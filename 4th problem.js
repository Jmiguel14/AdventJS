function createXmasTree(height) {
  let underscore = height - 1;
  let halfTree = 0;
  let tree = "";
  for (var i = 1; i <= height; i++) {
    tree += `${"_".repeat(underscore)}${"*".repeat(i + halfTree)}${"_".repeat(
      underscore
    )}\n`;
    underscore--;
    halfTree++;
  }
  tree += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}\n`.repeat(2);
  return tree.trim();
}
