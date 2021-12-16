import { it, expect } from '@jest/globals';
import { sortList } from '../sortList';
it('测试', () => { 

  const a = [1,2,5,7,8,5,4,3],b = [1,2,3,4,5]
  const result = sortList(a,b)
  expect(result).toEqual([1,2,5])




})