// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // 先轉成Unicode
  const ch = chars.map((e) => e.charCodeAt(0));
  for (let i = ch[0]; i < ch[ch.length - 1]; i++) {
    if (!ch.includes(i)) {
      return String.fromCharCode(i);
    }
  }
  //若沒有缺少字元會得到undefined
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P
