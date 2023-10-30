// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  //偶數陣列
  const evenArr = numbers.filter((e) => Math.abs(e) % 2 === 0)
  //奇數陣列
  const oddArr = numbers.filter((e) => Math.abs(e) % 2 !== 0)
  //數量較少者為不合群
  return evenArr.length < oddArr.length ? evenArr : oddArr
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160
console.log(findSomeDifferent([161, 3, 1719, 19, 11, 13, -20])) // 印出 160
