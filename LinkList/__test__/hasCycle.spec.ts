import { it, expect } from '@jest/globals';
import { getCycleList } from '../../Util';
import { hasCycle } from '../hasCycle';
it('测试链表有环', () => {
  expect(hasCycle(getCycleList([], -1))).toEqual(false);
  expect(hasCycle(getCycleList([3, 2, 0, -4], 1))).toEqual(true);
  expect(hasCycle(getCycleList([1, 2], -1))).toEqual(false);
  expect(hasCycle(getCycleList([1, 2], 0))).toEqual(true);
});
