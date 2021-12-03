import { it, expect } from '@jest/globals';

import { sortArray } from '../sort/quick_normal';
it('测试排序', () => {
  expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
});
