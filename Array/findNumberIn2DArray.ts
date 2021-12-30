
/**
 * 剑指 Offer 04. 二维数组中的查找
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * @param matrix 
 * @param target 
 * @returns 
 */

function findNumberIn2DArray(matrix: number[][], target: number): boolean {

  let flag: boolean = false

  for (let i = 0; i < matrix.length; i++) {

    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length-1]) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          flag = true
          break;
        }
      }
    }
    if(flag){
      break
    }
  }
  return flag
};

