import { expect, it } from '@jest/globals';
import { getTree } from '../../Util';
import { preStack } from '../preorder';

it('栈先序遍历', () => {
  const tree = getTree();

  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const result = preStack(tree);
  expect(result).toEqual([0, 1, 11, 12, 2, 21, 22]);
});
