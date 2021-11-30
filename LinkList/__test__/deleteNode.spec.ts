import { it, expect } from '@jest/globals';
import { getLinkArr, getLinkList, pickNode } from '../../Util';
import { deleteNode } from '../deleteNOde';
it('测试要删除', () => {
  const list = getLinkList([1, 2, 3, 4, 5, 6]);

  const node = pickNode(2, list);
  deleteNode(node);
  expect(getLinkArr(list)).toEqual([1, 2, 4, 5, 6]);
});
