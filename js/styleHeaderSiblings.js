/**
 * Created by nanxi on 17-3-28.
 */
function getNextElement(node) {
  if(node.nodeType ==1){
    return node
  }
  if(node.nextSibling){
    return getNextElement(node.nextSibling)
  }
  return null
}

function styleHeaderSiblings(tag,theClass) {
  if(!document.getElementsByTagName) return false
  var header = document.getElementsByTagName(tag)
  var elem
  for(var i=0; i<header.length; i++){
    elem = getNextElement(header[i].nextSibling)
    addClass(elem,theClass)
  }
}

addLoadEvent(styleHeaderSiblings("h1","info"))
