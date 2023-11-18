// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.stack = []
  }
  get size() {
    return this.stack.length
  }
  push(num) {
    if (num) {
      this.stack.push(num)
    }
  }
  pop() {
    return this.stack.pop()
  }
}

const stack = new Stack()
stack.push(123)
stack.push(456)
stack.push()
console.log(stack.size) // 印出 2

const item = stack.pop() // 取出元素
console.log(item) // 印出 456

stack.pop() // 繼續取出元素
console.log(stack.size) // 印出 0
