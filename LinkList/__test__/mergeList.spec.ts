import { it, expect } from '@jest/globals';
import { getLinkArr, getLinkList } from '../../Util';
import { mergeTwoLists, mergeTwoLists2 } from '../mergeList';

it('测试合并链表', () => {
  const ar = getLinkArr(getLinkList([1, 2, 3, 4, 5, 6]));

  const result = mergeTwoLists(getLinkList([1, 2, 3]), getLinkList([4, 5, 6]));
  const result2 = mergeTwoLists2(
    getLinkList([1, 2, 3]),
    getLinkList([4, 5, 6])
  );

  expect(getLinkArr(result)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(getLinkArr(result2)).toEqual([1, 2, 3, 4, 5, 6]);
});

it;
