window.onload = function() {
    // ���صı�ɫС���
    var i = 0,
      j = 0;
    var loadingColor = ['lightskyblue', 'white']

    setInterval(function() {
      document.getElementsByClassName('loadingProccess')[i].style.background = loadingColor[j];
      i += 1;
      if (i == 10) {
        i = 0;
        j = 1 - j;
      }
    }, 100);
    // ���ص���
    setTimeout(function() {
      var loader = document.getElementsByClassName("loader")[0];
      loader.className = "loader fadeout";
      setTimeout(function() {
        loader.style.display = "none"
      }, 1000)
    }, 2700)
  }