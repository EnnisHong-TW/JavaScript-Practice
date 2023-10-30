// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  let quotient = num
  const resultArr = []

  for (let i = 0; quotient > 0; i++) {
    const remainder = quotient % 10
    quotient = Math.floor(quotient / 10)

    if (remainder === 0) {
      continue
    }

    if (i == 0) {
      resultArr.unshift(remainder)
    } else {
      resultArr.unshift(`${10 ** i} x ${remainder}`)
    }
  }

  return resultArr.join(" + ")
}

console.log(expandedForm(8)) // 印出 8
console.log(expandedForm(25)) // 印出 10 x 2 + 5
console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8

// function expandedForm(num) {
//   let quotient = num
//   const resultArr = [quotient % 10]

//   while (quotient >= 10) {
//     quotient = Math.floor(quotient / 10)
//     resultArr.push(quotient % 10)
//   }

//   //先以index為10的n次方轉換要印出的格式，過濾不需要顯示的值後反轉顯示順序，最後用+號串起
//   const resultStr = resultArr
//     .map((e, i) => {
//       if (i === 0 && e !== 0) {
//         return e
//       } else {
//         return e !== 0 ? `${10 ** i} x ${e}` : null
//       }
//     })
//     .filter((e) => e !== null)
//     .reverse()
//     .join(" + ")

//   return resultStr
// }

// console.log(expandedForm(8)) // 印出 8
// console.log(expandedForm(25)) // 印出 10 x 2 + 5
// console.log(expandedForm(148)) // 印出 100 x 1 + 10 x 4 + 8
// console.log(expandedForm(1450)) // 印出 1000 x 1 + 100 x 4 + 10 x 5
// console.log(expandedForm(60308)) // 印出 10000 x 6 + 100 x 3 + 8
