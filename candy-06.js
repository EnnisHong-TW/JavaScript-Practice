// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  // 和其他元素不一樣 第一個index及最後一個index應該相同，代表沒有其他重複值
  return numbers.filter((element, index, arr) => {
    return arr.indexOf(element) === arr.lastIndexOf(element)
  })
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8
console.log(findDifferent([3, 3, 3, 3, 3, 3, 3, 8])) // 印出 8

// return numbers.filter((element, index, arr) => {
//   return arr.indexOf(element) === arr.lastIndexOf(element)
// })

// const tempArr = []
// numbers.forEach((element) => {
//   if (!tempArr.includes(element)) {
//     tempArr.push(element)
//   }
// })

// const result = tempArr.filter((e) => {
//   return numbers.indexOf(e) === numbers.lastIndexOf(e)
// })
// return result
