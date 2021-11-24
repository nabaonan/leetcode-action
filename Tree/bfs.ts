import TreeNode from '../model/TreeNode';

export function bfs(root: TreeNode): number[] {
  const queue: TreeNode[] = [root];
  const result: number[] = [];

  while (queue.length !== 0) {
    const node = queue.shift(); //每次从队列头开始取
    if (node) {
      result.push(node.val);
      //将当前节点的左右节点都放到队列中
      if (node.left) {
        //
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return result;
}
