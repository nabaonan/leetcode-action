import TreeNode from "../model/TreeNode"
/**
 * 剑指 Offer 28. 对称的二叉树 (简单)
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 * @param root 
 * @returns 
 */
function isSymmetric(root: TreeNode | null): boolean {
/**
 * 原理：
 * 使用递归，树的左节点和右节点比，左节点的左子节点和右节点的右子节点比，左节点的右子节点和右节点的左子节点比，如果满足这三种条件就认为是对称，
 */
  

  function dfs(left: TreeNode|null, right: TreeNode|null):boolean {


    if (left !== null && right !== null) {

      return left.val == right.val && dfs(left.left, right.right) && dfs(left.right, right.left)
    } else if (left == null && right == null) {
      return true //都为空就是对称
    }
    else {
      return false//有一个不为空就是不对称
    }

  }
  if (root != null) {
    return dfs(root.left, root.right)

  } else {
    return true//空节点算是对称的
  }
};