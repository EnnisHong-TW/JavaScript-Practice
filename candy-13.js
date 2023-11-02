// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const vatArr = [...vat]
  const baseNumArr = [1, 2, 1, 2, 1, 2, 4, 1]
  // 乘上驗證數
  const logicalArr = vatArr.map((num, index, arr) => num * baseNumArr[index])

  //第七位數為7
  if (vatArr[6] === 7) {
    const sourceNum = [...String(logicalArr[6])].map(Number)
    const arrOne = logicalArr.slice(6, 1, sourceNum[0]) //取1
    const arrZero = logicalArr.slice(6, 1, sourceNum[1]) //取0
    return reduceIsMutipleFive(arrOne) || reduceIsMutipleFive(arrZero)
  }
  return reduceIsMutipleFive(logicalArr)
}

// 濃縮加總
const reduceIsMutipleFive = (proveArr) => {
  const reduceVal = proveArr.reduce((ac, cv) => {
    //兩位數濃縮加總
    if (cv > 9) {
      const cvArr = [...String(cv)].map(Number)
      return (ac += cvArr[0] + cvArr[1])
    }
    return (ac += cv)
  }, 0)
  return reduceVal % 5 === 0
}

console.log(isValidVatNumber("10458575")) // true
console.log(isValidVatNumber("88117125")) // true
console.log(isValidVatNumber("53212539")) // true
console.log(isValidVatNumber("88117126")) // false

//第七位數非7: 與驗證碼相乘後濃縮加總
//第七位數為7: 與驗證碼相乘後第一次濃縮加總，第七位為7時，取1取0分別進行第二次濃縮加總，判斷任一結果為五的倍數即符合
