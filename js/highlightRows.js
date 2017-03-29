/**
 * Created by nanxi on 17-3-29.
 */
function highlightRows() {
  var rows = document.getElementsByTagName('tr')
  for(var i=0; i<rows.length; i++){
    rows[i].onmouseover = function () {
      this.style.fontWeight = "bold"
    }
    rows[i].onmouseout = function () {
      this.style.fontWeight = "normal"
    }
  }
}

addLoadEvent(highlightRows)