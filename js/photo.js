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

function prepare() {
  var img = document.createElement('img')
  var p = document.createElement('p')
  var text = document.createTextNode('Choose an image')
  img.id = 'replace' // img.setAttribute('id','replace')
  img.src = 'pngs/blog3.jpg'
  img.alt = 'my photo gallery'
  p.id = 'describe'
  text.appendChild(p)
  document.body.appendChild(img)
  document.body.appendChild(p)
}
window.onload = beforeGallery

// 这些if检查决定需要根据具体情况来做出，避免不必要的太多假设