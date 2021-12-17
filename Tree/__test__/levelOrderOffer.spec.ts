import { expect, it } from '@jest/globals';
import { getTree } from '../../Util';
import { levelOrder } from '../levelOrderOffer/levelOrderOffer';

it('层序遍历求值', () => {
  const tree = getTree();
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const result = levelOrder(tree); //队列
  expect(result).toEqual([0,1, 2, 11, 12, 21, 22]);

});
