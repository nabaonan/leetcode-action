import TreeNode from '../model/TreeNode';

/**
 * 后续遍历，左右后
 */

//递归实现
function postOrder(root: TreeNode | null, result: number[]) {
  if (root == null) {
    return;
  } else {
    postOrder(root.left, result);
    postOrder(root.right, result);
    result.push(root.val);
  }
}

function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  if (root == null) {
    return [];
  }
  postOrder(root, result);
  return result;
}
