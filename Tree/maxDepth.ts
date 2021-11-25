/**
 *
 * 104. 二叉树的最大深度
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @type easy
 */

import TreeNode from '../model/TreeNode';

export function maxDepth(root: TreeNode | null): number {
  let max = 0;
  function getMax(root: TreeNode | null, level: number) {
    if (root !== null) {
      max = Math.max(level, max);
      if (root.left) {
        getMax(root.left, level + 1);
      }
      if (root.right) {
        getMax(root.right, level + 1);
      }
    }
  }

  getMax(root, 1);
  return max;
}

/**
 *
 * @param root 广度优先 层级遍历
 * @returns
 */
export function maxDepth2(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  const queue: TreeNode[] = [root];

  let level = 0;
  while (queue.length) {
    let length = queue.length;
    while (length > 0) {
      length--;
      const node = queue.shift();
      if (node) {
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    level++;
  }

  return level;
}
