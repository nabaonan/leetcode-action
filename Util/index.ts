import TreeNode from '../model/TreeNode';

export function getTree(): TreeNode {
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const root = new TreeNode(0);
  const left1 = new TreeNode(1);
  const left11 = new TreeNode(11);
  const left21 = new TreeNode(21);
  const right2 = new TreeNode(2);
  const right12 = new TreeNode(12);
  const right22 = new TreeNode(22);
  left1.left = left11;
  left1.right = right12;
  right2.left = left21;
  right2.right = right22;
  root.left = left1;
  root.right = right2;
  return root;
}
