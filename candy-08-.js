// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  const inputArr = input.split(" ")
  const scoreArr = inputArr.map((str) => sumStringScore(str)) //對應文字的總分陣列
  const maxScore = Math.max(...scoreArr) //分數最大
  const maxScoreIndex = scoreArr.indexOf(maxScore) //找出分數最大對應的文字的索引
  return inputArr[maxScoreIndex]
}

//計算文字分數
const sumStringScore = function (str) {
  const score = [...str].reduce((ac, cv) => (ac += cv.charCodeAt() - 96), 0) //a的charCode為97開始計1分
  return score
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there
