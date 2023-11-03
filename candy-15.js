// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const result = []
  const strArr = [...str]

  if (strArr.length % 2 !== 0) {
    strArr.push("_")
  }

  for (let i = 0; i < strArr.length - 1; i += 2) {
    result.push(strArr[i] + strArr[i + 1])
  }
  return result
}

console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
console.log(splitString("")) // []
