function Dictionary() {
  /*属性*/
  this.items = {}
  /*方法*/
  //1.set方法，添加键值对
  Dictionary.prototype.set = function (key,value) {
    return this.items[key] = value
  }
  //2.判断字典中是否存在某个key
  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key)
  }
  //3.删除元素
  Dictionary.prototype.remove = function (key) {
    if(!this.has(key)) return false
    delete this.items[key]
    return true
  }
  //4.根据key获取对应的value
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined
  }
  //5.获取所有的keys
  Dictionary.prototype.keys = function () {
    return Object.keys(this.items)
  }
  //6.获取所有的value
  Dictionary.prototype.values = function () {
    return Object.values(this.items)
  }
  //7.获取元素个数
  Dictionary.prototype.size = function () {
    return this.keys.length
  }
  //8.清除所有的元素clear
  Dictionary.prototype.clear = function () {
    this.items = {}
  }
}