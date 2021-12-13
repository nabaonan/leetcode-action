import TreeNode from "../../model/TreeNode"

/**
 * 剑指 Offer 32 - III. 从上到下打印二叉树 III
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
 * @param root 
 * @returns 
 */
export function levelOrder(root: TreeNode | null): number[][] {
  /**
   * 只是多了一奇数和偶数的判断
   */
  if (root == null) return []
  const queue: TreeNode[] = [root]
  const result: number[][] = []
  let level = 0
  while (queue.length) {
    let length = queue.length

    result[level] = result[level] ?? []
    while (length) {
      const node = queue.shift()

      if (node?.left) {
        queue.push(node.left)
      }
      if (node?.right) {
        queue.push(node.right)
      }

      if (node) {
        if (level % 2 !== 0) {
          result[level].unshift(node.val)
        } else {
          result[level].push(node.val)
        }

      }

      length--
    }
    level++
  }
  return result


};