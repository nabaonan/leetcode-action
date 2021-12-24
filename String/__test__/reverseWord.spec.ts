import { it, expect } from '@jest/globals';
import { reverseWords } from '../reverseWord'
it('测试', () => { 

  // const result = reverseWords("a good   example")


  // expect(result).toEqual('example good a')

  expect(reverseWords("  hello world!  ")).toEqual("world! hello")
  

})