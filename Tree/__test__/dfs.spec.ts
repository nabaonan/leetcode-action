import { expect, it } from '@jest/globals';
import { getTree } from '../../Util';
import { excute, excuteStack } from '../dfs';
it('深度遍历-递归', () => {
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const tree = getTree();
  const result = excute(tree);
  expect(result).toEqual([0, 1, 11, 12, 2, 21, 22]);
});

it('深度遍历-栈', () => {
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const tree = getTree();
  const result = excuteStack(tree);
  expect(result).toEqual([0, 1, 11, 12, 2, 21, 22]);
});
