import { it, expect } from '@jest/globals';
import { getLinkArr, getLinkList } from '../../Util';
import { addTwoNumbers } from '../addTwoNumbers';
it('两数之和', () => {
  // expect(
  //   getLinkArr(
  //     addTwoNumbers(
  //       getLinkList([9, 9, 9, 9, 9, 9, 9]),
  //       getLinkList([9, 9, 9, 9])
  //     )
  //   )
  // ).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);

  expect(
    getLinkArr(addTwoNumbers(getLinkList([2, 4, 9]), getLinkList([5, 6, 4, 9])))
  ).toEqual([7, 0, 4, 0, 1]);
});
