/**
 * 找出两个有序数组的相同元素(双指针)
 */

export function sortList(list1: number[], list2: number[]) {



  let i = 0, j = 0, result: number[] = [];
  while (i < list1.length && j < list2.length) {
    if (list1[i] == list2[j]) {
      result.push(list1[i])
      i++; j++
    } else if (list1[i] < list2[j]) {
      i++;
    } else {
      j++
    }
  }
  return result
}