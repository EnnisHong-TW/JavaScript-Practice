// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數
function randomNumber(...arg) {
  const argLength = arg.length

  if (argLength === 0) {
    return "未傳入數值"
  } else if (argLength === 1) {
    return Math.floor(Math.random() * arg[0])
  } else {
    return Math.floor(Math.random() * (arg[1] - arg[0]) + arg[0])
  }
}

console.log(randomNumber(50)) // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)) // 隨機印出 5 ~ 29 之間的任何一個數字
