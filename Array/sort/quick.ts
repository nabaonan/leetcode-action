/**
 * 快速排序  简单版
 * @param nums 
 * @returns 
 */

export function sortArray(nums: number[]): number[] {

  /**
   * 思路： 
   * 以一个中值为基准，抛去中值，将小于中值的归到左数组，将大于的归到右数组，分别递归遍历左右数组，当只有一个元素的时候递归终止
   * 
   */
    
  if(nums.length<1){
    return nums
  }
  const left = []//放入小的值
  const right = []//放入大的值
  const [mid] = nums.splice(Math.floor(nums.length / 2), 1)//取中值

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < mid) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return sortArray(left).concat(mid, sortArray(right))

};







