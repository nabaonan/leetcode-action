
/**
 * 剑指 Offer 32 - I. 从上到下打印二叉树
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
 * @param root 
 * @returns 
 */

import TreeNode from "../../model/TreeNode"

export function levelOrder(root: TreeNode | null): number[] {
  /**
   * 思路
   * 同层序遍历，将每层结果收集到一维数组
   * 通过length限制每层的节点数
   */
  const result: number[] = []
  if (root == null) return [];
  const stack: TreeNode[] = [root]
  while (stack.length) {

    let length = stack.length//固定每层节点数
    while (length) {
      const node = stack.shift()
      if (node)
        result.push(node?.val)
      if (node?.left) {//注意只能在内层循环中判定节点的子节点，
        stack.push(node.left)
      }
      if (node?.right) {
        stack.push(node.right)
      }
      length--
    }

  }
  return result

};