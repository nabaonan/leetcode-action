import { expect, it } from '@jest/globals';
import { getTree } from '../../Util';
import { bfs } from '../bfs';

it('广度优先', () => {
  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const tree = getTree();
  const result = bfs(tree);
  expect(result).toEqual([0, 1, 2, 11, 12, 21, 22]);
});
