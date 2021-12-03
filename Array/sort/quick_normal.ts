/**
 * 双层循环版本
 * @param arr
 * @param startIndex
 * @param endIndex
 * @returns
 */
function partition(arr: number[], startIndex: number, endIndex: number) {
  let left = startIndex;
  let right = endIndex;
  const midIndex =startIndex//将起始坐标作为中值的坐标
  let pivot = arr[midIndex];//中值
  while (left < right) {

    //注意：要先从右侧遍历再从左侧遍历
    if (arr[right] > pivot) {//从右侧先遍历找到一个比中值小的再停止
      right--;
    } else if (arr[left] <= pivot) {//从左侧遍历，由于左侧下标起始位置就是startIndex，那么就需要先越过起始位置所以要等于
      left++;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }

  //中值对调位置，保证中值左侧的值都是小于自己的
  arr[midIndex] = arr[left];
  arr[left] = pivot;

  return left;
}

function quickSort(arr: number[], startIndex: number, endIndex: number) {
  if (startIndex > endIndex) {//起始大于截止   递归终止
    return;
  }
  const pivotIndex = partition(arr, startIndex, endIndex);//分成左右俩区间 并获取中间值下标
  quickSort(arr, startIndex, pivotIndex - 1);//左侧值区间递归排序
  quickSort(arr, pivotIndex + 1, endIndex);///右侧值区间递归排序
}

export function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);

  return nums;
}
