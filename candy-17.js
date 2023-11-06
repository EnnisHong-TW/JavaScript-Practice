// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  let quotient = num
  const result = []

  while (quotient >= 2) {
    result.unshift(quotient % 2)
    quotient = Math.floor(quotient / 2)
    if (quotient < 2) {
      result.unshift(quotient)
    }
  }

  return result.filter((e) => e === 1).length
}

console.log(countBits(1234)) // 5
console.log(countBits(1450)) // 6
console.log(countBits(9527)) // 8
