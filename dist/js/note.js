window.onload = function() {
  console.log('aaa')
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
  var nr = document.getElementById('content');
  var obox = nr.children[4];
  var otxt = nr.children[1];
  var obtnR = nr.children[2];
  var obtnS = nr.children[3];
  var n = 0;

  obtnS.onclick = function() {
    n++;
    var str = otxt.value;
    if (str.length != 0) {
      var oP = document.createElement('p'); //创建P元素
      var oB = document.createElement('b'); //创建b元素
      var oSpan = document.createElement('span'); //创建span元素
      var oSpanS = document.createElement('span'); //创建span元素
      var comment = document.createElement('a') //创建a元素
      var oA = document.createElement('a'); //创建a元素
      var bA = document.createElement('span'); //创建 span 元素
      var num = document.createElement('span'); //创建 span 元素 
      var aP = obox.appendChild(oP); //把 op 放进 obox 里面
      var aB = oP.appendChild(oB); //把 ob 放进 oP 里面
      var aSpan = oP.appendChild(oSpan); //把 ospan 放进 op 里面
      var aA = oSpan.appendChild(oA); //把 aA 放进 oSpan 里面
      var ba = oSpan.appendChild(bA); //把bA 放进oSpan 里面
      var numb = oSpan.appendChild(num);
      var aSpanS = oP.appendChild(oSpanS);
      var acomment = oSpan.appendChild(comment); //把 comment(评论) 放进ospan 里面
      var number = 0;
      aP.className = 'box';
      aB.innerHTML = str;
      aA.innerHTML = '删除';
      aA.className = 'remove';
      ba.className = 'glyphicon';
      ba.innerHTML = 'Goodjob!'
      acomment.innerHTML = '评论';
      acomment.className = 'comment';
      aSpanS.className = 'floor';
      aSpanS.innerHTML = n + 'L';
      aB.className = 'b';
      otxt.value = "";
      numb.innerHTML = number;
      numb.className = 'number';
      alert('留言成功！');
    } else alert('内容不能为空')
    aA.onclick = function() {
      var nowP = this.parentNode.parentNode; // 当前p元素
      obox.removeChild(nowP);
    }
    ba.onclick = function() {
      number++;
      ba.className = 'glyphicon glyphicon-star';
      numb.innerHTML = number;
    }
    var reset = nr.children[2];
    reset.onclick = function() {
      otxt.value = "";
    }
    acomment.onclick = function() {
      // var oArea = document.createElement('textarea');
      // var aArea = oSpan.appendChild(oArea);
      // aArea.className = 'textarea';
      // var oBtn = document.createElement('button')
      // var aBtn = oSpan.appendChild(oBtn);
      // aBtn.innerHTML = '提交';
      // aBtn.className = 'subcom';
      // aBtn.onclick = function() {
      // 	oSpan.removeChild(this);
      // 	oSpan.removeChild(aArea);
      var qtxt = document.getElementById('qtxt');
      var nc = document.getElementById('nichen');
      var overplay = document.getElementById('zezhao');
      var pCom = document.createElement('p');
      var pNc = document.createElement('span');
      var paNc = pCom.appendChild(pNc);
      var paCom = oP.appendChild(pCom);
      var oCom = document.createElement('span');
      var aCom = pCom.appendChild(oCom);
      var oRem = document.createElement('a');
      var aRem = pCom.appendChild(oRem);
      aRem.innerHTML = '删除该评论';
      aRem.className = 'rem';
      aCom.className = 'acom';
      paCom.className = 'comarea';
      aRem.onclick = function() {
        pCom.removeChild(this);
        pCom.removeChild(aCom);
        paCom.className = '';
        pCom.removeChild(pNc);
      }
      overplay.style.display = 'block';
      var anniu = document.getElementsByTagName('button');
      anniu[2].onclick = function() {
        overplay.style.display = 'none';
        var Sstr = qtxt.value;
        aCom.innerHTML = Sstr;
        var Nstr = nc.value;
        nc.value = '';
        qtxt.value = '';
        paNc.innerHTML = Nstr + '说:';
      }
      anniu[3].onclick = function() {
        overplay.style.display = 'none';
        nc.value = '';
        qtxt.value = '';
        pCom.removeChild(aCom);
        paCom.className = '';
        pCom.removeChild(pNc);
        pCom.removeChild(aRem);
      }

    }

  }

}
