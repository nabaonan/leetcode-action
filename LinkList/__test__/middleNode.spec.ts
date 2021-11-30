import { it, expect } from '@jest/globals';
import { getLinkArr, getLinkList } from '../../Util';
import { middleNode } from '../middleNode';
it('返回中间节点', () => {
  const list = getLinkList([1, 2, 3, 4, 5, 6]);
  const node = middleNode(list);

  expect(getLinkArr(node)).toEqual([4, 5, 6]);
});
