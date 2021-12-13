import TreeNode from "../model/TreeNode"

/**
 * 剑指 Offer 32 - II. 从上到下打印二叉树 II
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 * @param root 
 * @returns 
 */
 export function levelOrder3(root: TreeNode | null): number[][] {

  if (root == null) return []
  const result: number[][] = []
  const stack: TreeNode[] = [root]
  let level = 0
  while (stack.length) {
    let length = stack.length

    result[level] = result[level] || []
    while (length) {
      const node = stack.shift()
      if (node?.left) {
        stack.push(node.left)
      }
      if (node?.right) {
        stack.push(node.right)
      }
      if (node) {
        result[level].push(node.val)
      }
      length--
    }
    level++;
  }
  return result
};
