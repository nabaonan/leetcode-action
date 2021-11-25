import { expect, it } from '@jest/globals';
import { getTree } from '../../Util';
import { levelOrder, levelOrder2 } from '../levelOrder';

it('层序遍历', () => {
  const tree = getTree();
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const result = levelOrder(tree); //队列
  const result2 = levelOrder2(tree); //递归
  expect(result).toEqual([[0], [1, 2], [11, 12, 21, 22]]);
  expect(result2).toEqual([[0], [1, 2], [11, 12, 21, 22]]);
});
