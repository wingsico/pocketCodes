/**
 * Created by nanxi on 17-3-28.
 */
function displayAccesskeys(){
  var links = document.getElementsByTagName('a')
  var akeys = new Array()
  for(var i=0; i<links.length; i++){
    if(!links[i].getAttribute('accesskey')) continue
    var key = links[i].getAttribute('accesskey')
    var text = links[i].lastChild.nodeValue
    akeys[key] = text
  }
  var ulist = document.createElement('ul')
  for(key in akeys){
    var text = akeys[key]
    var str = key + ":" + text
    var item = document.createElement('li')
    var item_text = document.createTextNode(str)
    item.appendChild(item_text)
    ulist.appendChild(item)
  }
  var header = document.createElement('h2')
  var header_text = document.createTextNode('Accesskeys')
  header.appendChild(header_text)
  document.body.appendChild(header)
  document.body.appendChild(ulist)
}
addLoadEvent(displayAccesskeys)