window.onload = function() {
    // 加载的变色小点点
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
    // 加载淡出
    setTimeout(function() {
      var loader = document.getElementsByClassName("loader")[0];
      loader.className = "loader fadeout";
      setTimeout(function() {
        loader.style.display = "none"
      }, 1000)
    }, 2700)
  }