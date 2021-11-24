import { expect, it } from '@jest/globals';
import { getTree } from '../../Util';
import { inorderStack1, inorderStack2, inorderTraversal } from '../inorder';

it('递归中序', () => {
  const tree = getTree();

  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const result = inorderTraversal(tree);
  expect(result).toEqual([11, 1, 12, 0, 21, 2, 22]);
});

it('栈中序双层遍历', () => {
  const tree = getTree();

  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const result = inorderStack1(tree);
  expect(result).toEqual([11, 1, 12, 0, 21, 2, 22]);
});

it('栈中序单层遍历', () => {
  const tree = getTree();

  /**
   *        0
   *    1       2
   * 11  12   21  22
   */
  const result = inorderStack2(tree);
  expect(result).toEqual([11, 1, 12, 0, 21, 2, 22]);
});
