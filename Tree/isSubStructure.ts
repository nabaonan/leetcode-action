import TreeNode from "../model/TreeNode"

/**
 * 剑指 Offer 26. 树的子结构   递归
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 * @param A 
 * @param B 
 * @returns 
 */
export function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  const isSub = (ATree: TreeNode | null, BTree: TreeNode | null): boolean => {
    //判断A节点是不是和b节点完全相等

    if (BTree == null) {//B如果是空的，就认为是子节点
      return true
    }
    if (ATree == null || BTree.val !== ATree.val) { //A是空或者AB两个值不等就false
      console.log(ATree, BTree)
      return false
    }
    return isSub(ATree.left, BTree.left) && isSub(ATree.right, BTree.right)//递归判断左值是否相等，右值是否相等
  }

  return (B != null && A != null) && (isSub(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))//注意这里要后面两种要使用isSubStructor递归，因为isSub就是完全对比是否相等,当子节点是位于树的第三层结构时候，比如[1,2,3,4,5,6,7,8,9]，中的489，如果只用isSub只能判断两层，所以使用isSubStructor，如果当前层节点不匹配的时候，会使用当前层的子节点进行对比，这样就可以完全遍历树的所有节点了

};