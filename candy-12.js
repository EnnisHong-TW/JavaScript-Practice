// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  let tempNum = num
  //數字大於9代表兩位數以上還可進行濃縮
  while (tempNum > 9) {
    const numsArr = numberToArr(tempNum)
    tempNum = reduceNums(numsArr)
  }
  return tempNum
}

// 數值轉成陣列
const numberToArr = (num) => {
  const numStr = num.toString()
  return [...numStr].map(Number)
}
//[...String(num)].map(Number) 可在濃縮，但是閱讀性??

//加總陣列裡所有數值
const reduceNums = (numArr) => numArr.reduce((ac, cv) => (ac += cv), 0)

console.log(numberReducer(9527)) // 印出 5
console.log(numberReducer(1450)) // 印出 1
console.log(numberReducer(5566108)) // 印出 4
console.log(numberReducer(1234567890)) // 印出 9
