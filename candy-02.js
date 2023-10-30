// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const zeor_arr = arr
    .filter((e) => e !== 0)
    .concat(arr.filter((e) => e === 0));
  return zeor_arr;
}

let result = moveZerosToEnd(list);
console.log(result);
