import { it, expect } from '@jest/globals';
import { lengthOfLongestSubstring } from '../lengthOfLongestSubstring';
it('测试', () => { 


  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3)
  expect(lengthOfLongestSubstring("bbbbb")).toEqual(1)

})