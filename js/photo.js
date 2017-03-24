/**
 * Created by nanxi on 17-3-24.
 */
function showPic(whichpic){
  var source = whichpic.getAttribute("href")
  var replace = document.getElementById('replace')
  var text = whichpic.getAttribute("title")
  var describe = document.getElementById('describe')
  replace.setAttribute("src",source)
  describe.childNodes[0].nodeValue = text
}
