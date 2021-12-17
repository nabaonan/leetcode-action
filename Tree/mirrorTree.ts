import TreeNode from "../model/TreeNode"

/**
 * 剑指 Offer 27. 二叉树的镜像（简单）  递归实现
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 * @param root 
 * @returns 
 */
function mirrorTree(root: TreeNode | null): TreeNode | null {
  if(root==null){
    return null
  }

  if(root){
    const left = root.left
    root.left = root.right
    root.right = left

    mirrorTree(root.left)
    mirrorTree(root.right)
    
  }
  return root

};