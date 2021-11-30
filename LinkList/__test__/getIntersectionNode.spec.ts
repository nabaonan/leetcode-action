import { it, expect } from '@jest/globals';
import { getInterLink, getLinkList } from '../../Util';
import {
  getIntersectionNode,
  getIntersectionNode2,
} from '../getIntersectionNode';
it('相交链表', () => {
  const [list1, list2] = getInterLink([1, 9, 1], [3], [2, 4]);

  const inter = getIntersectionNode(list1, list2);
  const inter2 = getIntersectionNode2(list1, list2);
  if (inter) {
    expect(inter.val).toEqual(2);
  }

  if (inter2) {
    expect(inter2.val).toEqual(2);
  }

  //当同一个链表求公共部分则应该返回头结点
  const list3 = getLinkList([1]);
  const list4 = list3;
  const inter4 = getIntersectionNode2(list3, list4);
  expect(inter4?.val).toEqual(1);
});
