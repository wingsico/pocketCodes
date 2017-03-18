(function() {
  var i = -74;
  var j = -60;

  var cloud1 = document.querySelector(".cloud-float-1");
  var cloud2 = document.querySelector(".cloud-float-2");

  setInterval(function() {
    cloud1.style.left = i + "px";
    cloud2.style.right = j + "px";
    if (i >= document.body.clientWidth) {
      i = -74;
    }

    if (j >= document.body.clientWidth) {
      j = -60;
    }

    i += 3;
    j += 3;

  }, 200);

})();

function popupDiv(div_id) {
  var div_obj = $("#" + div_id);
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var popupHeight = div_obj.height();
  var popupWidth = div_obj.width();
  //添加并显示遮罩层  
  $("<div id='mask'></div>").addClass("mask")
    .width(windowWidth * 1.0)
    .height(windowHeight * 1.0)
    .click(function() {
      hideDiv(div_id);
    })
    .appendTo("body")
    .fadeIn(0);
  div_obj.fadeIn(0);

}
//关闭窗口;
function hideDiv(div_id) {
  setTimeout('$("#mask").remove()', 100)
  $("#" + div_id).animate({
    left: 0,
    top: 10 + '%',
    opacity: "hide"
  }, 200);
}
$("body").height($(window).height());
//根据时间显示不同样式以及分数和打卡日期（按钮一天点击一次还未解决,）
(function() {
  var date = document.getElementById('date');
  var mark = document.getElementById('score');
  var check = document.getElementById('check');
  var grade = document.getElementById('mark');
  var day = document.querySelector(".day");
  var source = ['pngs/success_early.png', 'pngs/success.png', 'pngs/success_later.png', 'pngs/success_last.png', 'pngs/failed_timeout.png', 'pngs/failed_repeat.png', 'pngs/failed_timenot.png'];
  var time = ['6:00~6:30', '6:30~7:30', '7:30~8:30', '8:30~9:30', '打卡时间过了', '今天已经打过卡了', '打卡时间还没到'];
  var score = [50, 30, 20, 10];
  var img = document.getElementById('success');
  var i = 0,
    n = 0;
  img.src = source[i];
  date.innerHTML = time[i];
  mark.innerHTML = score[i];
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var sum = 0,
    num = 0;
  var exp = document.querySelector(".exp");

  function change() {
    var head = document.getElementById('head');
    var button = document.getElementById('enter');
    t = 100 * h + m;
    if (num == 0) {
      if (t >= 600 && t <= 630) {
        n = 0;
        num++;
      } else if (t > 630 && t <= 730) {
        n = 1;
        num++;
        head.style.backgroundColor = "rgb(104,158,218)";
        button.style.backgroundColor = "rgb(104,158,218)";
        button.style.borderColor = "rgb(63,114,170)";
        date.style.color = "rgb(104,158,218)";
        grade.style.color = "rgb(104,158,218)";
      } else if (t > 730 && t <= 830) {
        n = 2;
        num++;
        head.style.backgroundColor = "rgb(244,127,135)";
        button.style.backgroundColor = "rgb(244,127,135)";
        button.style.borderColor = "rgb(219,106,133)";
        date.style.color = "rgb(244,127,135)";
        grade.style.color = "rgb(244,127,135)";
      } else if (t > 830 && t <= 930) {
        n = 3;
        num++;
        head.style.backgroundColor = "rgb(255,155,67)";
        button.style.backgroundColor = "rgb(255,155,67)";
        button.style.borderColor = "rgb(215,126,47)";
        date.style.color = "rgb(255,155,67)";
        grade.style.color = "rgb(255,155,67)";
      } else if (t > 930 && t <= 2359) {
        n = 4;
        grade.innerHTML = "明天记得早起哦~";
        grade.style.fontSize = 24 + 'px';
        grade.style.left = 10 + 'px';
        date.style.paddingRight = 16 + 'px';
        head.style.backgroundColor = "rgb(93,193,121)";
        button.style.backgroundColor = "rgb(93,193,121)";
        button.style.borderColor = "rgb(43,158,75)";
        date.style.color = "rgb(93,193,121)";
        grade.style.color = "rgb(93,193,121)";
      } else {
        n = 6;
        grade.innerHTML = "请待会再来哦~";
        grade.style.fontSize = 24 + 'px';
        date.style.paddingLeft = 10 + 'px';
        head.style.backgroundColor = "rgb(93,193,121)";
        button.style.backgroundColor = "rgb(93,193,121)";
        button.style.borderColor = "rgb(43,158,75)";
        date.style.color = "rgb(93,193,121)";
        grade.style.color = "rgb(93,193,121)";
      }
    } else {
      n = 5;
      grade.innerHTML = "明天继续加油~";
      head.style.backgroundColor = "rgb(255,197,74)";
      button.style.backgroundColor = "rgb(255,197,74)";
      button.style.borderColor = "rgb(219,169,63)";
      date.style.color = "rgb(255,197,74)";
      grade.style.color = "rgb(255,197,74)";
    }
    date.innerHTML = time[n];
    mark.innerHTML = score[n];
    img.src = source[n];
    var x = day.innerHTML;
    if (n >= 0 && n <= 3) {
      x = parseInt(x) + 1;
      day.innerHTML = x;
      sum = sum + score[n];
      exp.innerHTML = sum;
    }
    popupDiv('daka');
    // $.ajax({
    //     url: '/check',
    //     type: 'POST',
    //     dataType: 'json',
    //     data: {'check': 1},
    //     success: function (data) {

    //         if (data.err == 9)
    //         {
    //             n = 5;
    //         }
  }
  check.onclick = function() {
    change();
  }
})();

//点击打卡执行函数
