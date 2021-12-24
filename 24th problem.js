function checkIsSameTree(treeA, treeB) {
  if (!treeA && !treeB) return true;
  if (treeA?.value !== treeB?.value) return false;
  return (
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeB.right, treeB.right)
  );
}
