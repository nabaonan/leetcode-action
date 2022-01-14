import { it,expect } from '@jest/globals';
import { genTreeFromArr,  } from '../../Util';
import { isSubStructure } from '../isSubStructure';
it('测试', () => { 



  // [4,2,3,4,5,6,7,8,9]
  // [4,8,9]


  // [3,4,5,1,2], B = [4,1]
  expect( isSubStructure(genTreeFromArr(  [1,2,3,4,5,6,7,8,9]),genTreeFromArr([4,8,9]))  ).toEqual(true)
  // expect( isSubStructure(genTreeFromArr(   [3,4,5,1,2]),genTreeFromArr([4,1]))  ).toEqual(true)

})