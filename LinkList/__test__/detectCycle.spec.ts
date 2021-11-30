import { it, expect } from '@jest/globals';
import { getCycleList } from '../../Util';
import { detectCycle, detectCycle2 } from '../detectCycle';
it('返回循环链表入口节点', () => {
  expect(detectCycle(getCycleList([3, 2, 0, -4], 1))?.val).toEqual(2);

  expect(detectCycle2(getCycleList([1], -1))).toEqual(null);
  //   [1]
  // -1
});
