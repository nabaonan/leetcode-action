import { it, expect } from '@jest/globals';
import { getLinkArr, getLinkList } from '../../Util';
import { removeNthFromEnd } from '../removeNthFromEnd';
it('删除倒数第二个节点', () => {
  const list = getLinkList([1, 2, 3]);

  expect(getLinkArr(removeNthFromEnd(list, 2))).toEqual([1, 3]);

  expect(getLinkArr(removeNthFromEnd(getLinkList([1]), 1))).toEqual([]);
});
