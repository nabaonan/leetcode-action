/**
 * 剑指 Offer 63. 股票的最大利润
 * https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
 * @param prices 
 * @returns 
 */


function maxProfit(prices: number[]): number {
/**
 * 
 * 题目描述：
 * 输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格

 * 思路：
     设定min为买入股票最低点  max为卖出股票最大收益值
 * 因为第一天是买入股票，所以就当第一天是最低点，赋值给min
     从第二天开始，如果当天的值小于之前买入的值，那么当天就是最低点，循环每天的股票值都和之前的最低点比，更新最低点，获取每天的加个和最低点作差计算出最高利益记录到max
 * 
 * 
 */
  let min = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = Math.min(prices[i], min)//获取最低点
    } else {
      max = Math.max(max, prices[i] - min)//计算最高利益
    }
  }

  return max
};