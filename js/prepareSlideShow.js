/**
 * Created by nanxi on 17-3-29.
 */
function prepareSlideshow() {
  if(!document.getElementById) return false
  if(!document.getElementsByTagName) return false
  if(!document.getElementById('linklist')) return false
  var slideShow = document.createElement('div')
  slideShow.setAttribute('id','slideshow')
  var preview = document.createElement('img')
  preview.setAttribute('src','pngs/00.png')
  preview.setAttribute('alt','动漫')
  preview.setAttribute('id','preview')
  preview.setAttribute('width','1200')
  preview.setAttribute('height','300')
  slideShow.appendChild(preview)
  var list = document.getElementById('linklist')
  insertAfter(slideShow,list)
  var link = list.getElementsByTagName('a')
  link[0].onmouseover = function () {
    moveElement("preview",-300,0,10)
  }
  link[1].onmouseover = function () {
    moveElement("preview",-600,0,10)
  }
  link[2].onmouseover = function () {
    moveElement("preview",-900,0,10)
  }
}

addLoadEvent(prepareSlideshow)