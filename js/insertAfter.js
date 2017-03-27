/**
 * Created by nanxi on 17-3-27.
 */
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling)
  }
}

// 插入到一个节点之后，调用方法 insertAfter(--,--)