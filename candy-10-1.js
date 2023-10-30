// 題目：把數字以 10 進位轉換成 2 進位制
function translate(num) {
  let quotient = num
  const resultArr = [num % 2]

  while (quotient >= 2) {
    quotient = quotient / 2
    resultArr.push(Math.floor(quotient % 2))
  }

  return resultArr.reverse().join("")
}

console.log(translate(8), (8).toString(2))
console.log(translate(25), (25).toString(2))
console.log(translate(148), (148).toString(2))
console.log(translate(1450), (1450).toString(2))
console.log(translate(60308), (60308).toString(2))
