/**
 * Created by nanxi on 17-3-29.
 */
function addClass(element,value) {
  if(!element.className){
    element.className = value
  } else {
    var newClassName = element.className
    newClassName += " "
    newClassName += value
    element.className = newClassName
  }
}

// 传入的value带上引号 "className"