import { it, expect } from '@jest/globals';
import { getLinkArr, getLinkList } from '../../Util';
import { reverseList2 } from '../reverseList';
it('测试翻转链表', () => {
  const list = getLinkList([1, 2, 3]);

  expect(getLinkArr(reverseList2(list))).toEqual([3, 2, 1]);
});
