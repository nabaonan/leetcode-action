import TreeNode from '../model/TreeNode';

//递归实现
function preOrder(root: TreeNode | null, result: number[]) {
  if (root == null) {
    return;
  } else {
    result.push(root.val);
    preOrder(root.left, result);
    preOrder(root.right, result);
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  if (root == null) {
    return [];
  }
  preOrder(root, result);
  return result;
}

export function preStack(root: TreeNode | null): number[] {
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  //栈的结构   [0] root不为空，0入栈 并将left 1 赋值给root  记录0
  //栈的结构   [0,1] root不为空 入栈   将left 11 赋值给root 记录1
  //栈的结构   [0,1,11] root不为空，入栈11 并将left null 赋值root 记录11
  //栈的结构   [0,1]root为null 弹出11  root = node.right ,node.right为null 所以root赋值null
  //栈的结构   [0] 由于root为null 再弹出一个 1 并将右节点12给root
  //栈的结构   [0,12] 由于 12没有left 所以root赋值为null  记录12
  //栈的结构   [0] root 为null 弹出12
  //栈的结构   [] 12 的right还是null，继续弹出0 并将0的right赋值root
  //栈的结构   [2] 0的右节点入栈  root赋值为2的左节点
  //栈的结构   [2，21]  2的左节点入栈 由于21没有左节点，此时root赋值为null
  //栈的结构   [2]  root为null 21出栈 root赋值为null
  //栈的结构   []  root为null继续弹出2  将2的right赋值给root
  //栈的结构   [22]  root 为22 收集值，左节点是null root赋值为null
  //栈的结构   []  由于root 为null 继续出栈
  //此时栈空 退出循环

  const result = [];
  const stack: TreeNode[] = [];
  while (root || stack.length != 0) {
    if (root != null) {
      // root作为根节点也是中间节点，开始遍历，首先要记录当前节点的值
      result.push(root.val);
      stack.push(root); //左节点入栈
      root = root.left; //遍历左节点
    } else {
      //遍历完所有左节点
      const node = stack.pop(); //取出一个左节点
      if (node) {
        root = node.right; //继续探索当前节点的右节点的所有左子树
      }
    }
  }
  return result;
}
