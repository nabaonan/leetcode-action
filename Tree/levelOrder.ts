/**
 * 102. 二叉树的层序遍历
 * @link https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * @type middle
 */

import TreeNode from '../model/TreeNode';

/**
 * 队列 广度优先
 * @param root
 * @returns
 */
export function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return [];
  }

  const queue: TreeNode[] = [root]; //构建一个队列用于存放每个层级节点
  const result: number[][] = [];

  while (queue.length !== 0) {
    let length = queue.length; //这个长度代表当前层级的节点超过这个长度则是另外一个层级的节点
    const level = []; //存放每个层级的遍历结果
    while (length > 0) {
      //遍历层级
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        length--;
        if (node.left) {
          queue.push(node.left); //将下一个层级的节点收集到队列后
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    result.push(level);
  }
  return result;
}

/**
 * 递归实现  深度优先
 * @param root 当前节点
 * @param levelNumber 层数
 * @param result 结果集
 * @returns
 */
function level(root: TreeNode | null, levelNumber: number, result: number[][]) {
  if (root == null) {
    return;
  }
  result[levelNumber] = result[levelNumber] || []; //根据当前层级找到对应结果集
  result[levelNumber].push(root.val);
  if (root.left) {
    level(root.left, levelNumber + 1, result); //递归调用子节点，每次层级加1，深度优先
  }

  if (root.right) {
    level(root.right, levelNumber + 1, result);
  }
}

/**
 * 使用递归实现
 * @param root
 * @returns
 */
export function levelOrder2(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  level(root, 0, result);
  return result;
}







