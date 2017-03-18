function no(){


var secondPic = document.getElementById('two');
var firstPic = document.getElementById('one');
firstPic.style.opacity = 1;
secondPic.style.opacity = 1;
function fadeOut() {

  firstPic.style.opacity -= 0.002;
  if (firstPic.style.opacity < 0) {
    window.clearInterval(fade_1)

    function fadeIn() {
    	firstPic.style.opacity += 0.002;
      secondPic.style.opacity -= 0.002;

      if (secondPic.style.opacity < 0) {
        window.clearInterval(fade_2)
        no();
      }
    }
    var fade_2 = setInterval(function() {
      fadeIn();
    })
  }
}
var fade_1 = setInterval(function() {
  fadeOut()
})
}
no();