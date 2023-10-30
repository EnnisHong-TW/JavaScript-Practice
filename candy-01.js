// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
  // 實作程式碼寫在這裡
  // 將帶入參數使用slice進行複製後再使用sort進行排序
  // let new_arr = arr.slice().sort((a, b) => {
  //   return a - b;
  // });

  // return new_arr[0] + new_arr[1];
  arr.sort((a, b) => a - b)
  return arr[0] + arr[1]
}

const list1 = [19, 5, 42, 2, 77]
const list2 = [23, 15, 59, 4, 17]

console.log(sumOfSmallestValues(list1)) // 印出 7
console.log(sumOfSmallestValues(list2)) // 印出 19
