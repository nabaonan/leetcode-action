import TreeNode from '../model/TreeNode';
/**
 * 94. 二叉树的中序遍历  easy
 * @link https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @type easy
 */

/**
 * 递归实现
 * @param root
 * @param result
 * @returns
 */
function inorder(root: TreeNode | null, result: number[]) {
  if (root == null) {
    return [];
  }
  inorder(root.left, result); //左
  result.push(root.val); //中
  inorder(root.right, result); //右
}
export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  inorder(root, result);

  return result;
}

export function inorderStack1(root: TreeNode | null) {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    //当栈不为空，有节点的时候进入

    while (root) {
      //第一次执行此时第一个位置是根节点，之后的都是左节点
      stack.push(root);
      root = root.left; //如果没有左节点，root为null恰好可以跳出循环
    }
    //执行完上述循环，取出一个节点，这个节点下肯定没有左节点，而且这个节点是父节点的左节点
    const node = stack.pop();
    if (node) {
      result.push(node.val); //将这个值收集到数组

      root = node.right; //将右节点指向root，接下来遍历这个右节点的所有左子树，如果没有右节点，root为null不会遍历左子树，拿出栈的下一个节点进行收集
    }
  }

  return result;
}

/**
 * 单层循环
 * @param root
 * @returns
 */
export function inorderStack2(root: TreeNode | null) {
  const stack: TreeNode[] = [];
  const result = [];
  while (root || stack.length) {
    if (root) {
      //如果当前没有遍历到底，则继续遍历左节点
      stack.push(root);
      root = root.left;
    } else {
      //root为null说明遍历到底了，取出左节点
      const node = stack.pop();
      if (node) {
        result.push(node.val);
        root = node.right;
      }
    }
  }
  return result;
}
