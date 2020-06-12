function Queue() {
  //属性：保存相关内容
  this.items = []//这里的队列类采用基于数组的方式实现
  //方法：实现队列的相关操作
  /*1.enqueue(element)：向队列尾部添加一个或多个新增项*/
  Queue.prototype.enqueue = function (elem) {
    return this.items.push(elem)
  }
  /*2.dequeue()：移除队列中的第一个元素，并返回被移除的元素*/
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  /*3.front()：返回队列中的第一个元素*/
  Queue.prototype.front = function () {
    return this.items[0]
  }
  /*4.isEmpty()：如果队列中不包含任何元素，返回true*/
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  /*5.size()：返回队列中包含元素的个数*/
  Queue.prototype.size = function () {
    return this.items.length
  }
  /*6.toString()：将队列中的内容转换成字符串形*/
  Queue.prototype.toString = function () {
    let res = ''
    for(let i = 0; i < this.items.length; i++){
      res += this.items[i] + ' '
    }
    return res
  }
}