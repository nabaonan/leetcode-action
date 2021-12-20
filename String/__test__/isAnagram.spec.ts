import { it,expect } from '@jest/globals';
import { isAnagram, isAnagram2, isAnagram3 } from '../isAnagram';


it('测试', () => { 
// "rat"
// "car"
   expect(isAnagram('rat','car')).toBe(false)
  expect(isAnagram('ab', 'a')).toBe(false)
  
  expect(isAnagram2('rat','car')).toBe(false)
  expect(isAnagram3('rat','car')).toBe(false)
})

