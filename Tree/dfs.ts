import TreeNode from '../model/TreeNode';

/**
 * 深度优先遍历
 *
 */

function dfs(root: TreeNode | null, result: number[]) {
  if (root == null) {
    return;
  } else {
    result.push(root.val);
  }

  dfs(root.left, result);
  dfs(root.right, result);
}

export function excute(root: TreeNode): number[] {
  let result: number[] = [];
  dfs(root, result);
  return result;
}

function dfsStack(root: TreeNode, result: number[]) {
  const stack: TreeNode[] = [root];
  while (stack.length !== 0) {
    const node = stack.pop();
    if (node) {
      result.push(node.val);
      if (node.right) {
        //右侧节点后遍历所以先放后弹出
        stack.push(node.right);
      }
      if (node.left) {
        //左边节点后方，pop的时候就会先访问左侧节点
        stack.push(node.left);
      }
    }
  }
}

export function excuteStack(root: TreeNode): number[] {
  let result: number[] = [];
  dfsStack(root, result);
  return result;
}
