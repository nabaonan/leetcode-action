import { it, expect } from '@jest/globals';
import { longestPalindrome } from '../longestPalindrome';
it('测试', () => { 



  expect(longestPalindrome('aaaa')).toEqual('aaaa')
  expect(longestPalindrome('aaa')).toEqual('aaa')
  expect(longestPalindrome('aa')).toEqual('aa')


})