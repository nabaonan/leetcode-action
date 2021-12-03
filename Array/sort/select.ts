/**
 * 选择排序
 * @param nums 
 * @returns 
 */
export function sortArray(nums: number[]): number[] {
  /**
   * 思路
   * 选择当前的为基准
   * 用当前的和后面所有的数比，如果后面的数有比当前数小的，则相互交换
   */
  for(let i = 0;i<nums.length;i++){
    for(let j= i+1;j<nums.length;j++){
      if(nums[j]<nums[i]){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
   return nums
 };