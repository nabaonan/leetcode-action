import TreeNode from '../model/TreeNode';

/**
 * 递归实现
 * @param root
 * @param targetSum
 * @returns
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root == null) {
    return false;
  }
  //如果没有子节点则只能判断当前节点 和目标值
  if (root.left == null && root.right == null) {
    return root.val == targetSum;
  }

  //递归一层就用目标值减上一层的值，得出的就是下一层需要对比的目标值，左右节点任意满足即可
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
