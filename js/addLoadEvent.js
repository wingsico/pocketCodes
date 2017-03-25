/**
 * Created by nanxi on 17-3-25.
 */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if(typeof window.onload != 'function'){
    window.onload = func
  } else {
    oldonload()
    func()
  }
}
addLoadEvent(example) // 调用方法
// 把现有的window.onload事件处理函数的值存入比那量oldonload
// 如果在这个处理函数上还没有綁定何函数，就像平时那样把新函数添加给他
// 如果在这个函数上已经帮顶了一些函数，就把新函数追加到现有指令的末尾