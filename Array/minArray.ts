/**
 * 剑指 Offer 11. 旋转数组的最小数字
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @param numbers 
 * @returns 
 */
 function minArray(numbers: number[]): number {

   /**
    * 思路：
    * 从前往后遍历，只要出现一个比第一个数小的就返回
    */
  if (numbers.length == 1) {
    return numbers[0]
  }
  let min = numbers[0]

  for (let i = 0; i<numbers.length; i++) {
    if(numbers[i]<min){
      min = numbers[i]
      return min
    }
  }
  return numbers[0]

};