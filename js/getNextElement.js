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