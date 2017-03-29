/**
 * Created by nanxi on 17-3-29.
 */
function positionMessage() {
  if(!document.getElementById) return false
  if(!document.getElementById("message")) return false
  var elem = document.getElementById('message')
  elem.style.position = 'absolute'
  elem.style.left = 50 + 'px'
  elem.style.top = 100 + 'px'
  moveElement("message",400,200,10)
}