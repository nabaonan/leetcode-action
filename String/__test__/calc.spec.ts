import { it, expect } from '@jest/globals';
import { solve } from '../calc';
it('测试', () => { 
 
  expect( solve("(2*(3-4))*5")).toEqual(-10)
})