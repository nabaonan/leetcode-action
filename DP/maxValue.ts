/**
 * 剑指 Offer 47. 礼物的最大价值(动态规划)
 * https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
 * @param grid 
 * @returns 
 */

function maxValue(grid: number[][]): number {

/**
 * 
 * 题目：
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 * 输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 * 
 * 原理：
 * 由于每个格子只能往右或者往下走，所以每个格子来源的值只能是它的左边和上面，所以最终肯定是走到右下角的格子里，他就是最大值，进而只要求出每个格子的最大值即可
 * dp[i][j] = max(dp[i-1][j],dp[j][j-1])  每个格子的值来源于它上面的值或者他左侧的值中的最大值
 * 最左侧的列的值只能来源于他上面，第一行的值只能来源于他左侧，这两种需要特殊处理
 * 设定一个dp的二维数组，记录每个格子累加后得到的值，将最后一个格子的值返回就是结果
 * 
 */

  const dp: number[][] = new Array(grid.length).fill([])
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {

      if (i == 0 && j > 0) {//第一行

        dp[i][j] = dp[i][j - 1] + grid[i][j]

      } else if (j == 0 && i > 0) {//第一列
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      } else if (i == 0 && j == 0) {//第一个格子
        dp[i][j] = grid[i][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])//从上面的或者从左边的格子取最大值
      }

    }

  }

  // console.log(dp)

  return dp.pop()!.pop()!

};