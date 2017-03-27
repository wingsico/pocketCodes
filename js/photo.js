/**
 * Created by nanxi on 17-3-24.
 */

function beforeGallery() {
  if (!document.getElementsByClassName) return false
  if (!document.getElementsByTagName) return false
  if (!document.getElementById) return false
  var gallery = document.getElementById('gallery')
  var links = gallery.getElementsByTagName('a')
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return !showPic(this)

    }
  }
}
function showPic(whichpic) {
  if (!document.getElementById('replace')) return false
  var source = whichpic.getAttribute("href")
  var replace = document.getElementById('replace')
  if (replace.nodeName != 'IMG') return false
  replace.setAttribute("src", source)
  if (document.getElementById('describe')) {
    if (whichpic.getAttribute('title')) {
      var text = whichpic.getAttribute("title")
    } else {
      var test = ""
    }
    // var text = whichpic.getAttribute('title')?whichpic.getAttribute('title'):""
    var describe = document.getElementById('describe')
    if (describe.firstChild.nodeType == 3) {
      describe.childNodes[0].nodeValue = text
    }
  }
  return true
}

function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode
  if(parent.lastChild == targetElement){
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling)
  }
}

function prepare() {
  if(!document.createElement) return false
  if(!document.createTextNode) return false
  if(!document.getElementById) return false
  if(!document.getElementById("gallery")) return false
  var placeholder = document.createElement('img')
  placeholder.setAttribute('id','replace')
  placeholder.setAttribute('src','pngs/cat.jpg')
  placeholder.setAttribute('alt','my image gallery')
  var description = document.createElement('p')
  description.setAttribute('id','describe')
  var desctext = document.createTextNode('Choose an image')
  description.appendChild(desctext)
  // document.body.appendChild(placeholder)
  // document.body.appendChild(description)
  var gallery = document.getElementById('gallery')
  insertAfter(placeholder,gallery)
  insertAfter(description,placeholder)
}


addLoadEvent(beforeGallery)
addLoadEvent(prepare)

// 这些if检查决定需要根据具体情况来做出，避免不必要的太多假设