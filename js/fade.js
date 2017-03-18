var fade = document.getElementById('fade');
var body = document.getElementsByTagName('body');
fade.onclick = function() {
	var obox = document.createElement('p')
	var abox = body[0].appendChild(obox);
	abox.innerHTML = "淡入淡出成功"
	var i = -105;
	var m = 0;
	var n = 1;
	var box = document.getElementById('box');
	setInterval(function() {
		abox.style.left = i + "px";
		abox.style.opacity = m;

		if (m < 1) {
			i += 1.2;
			m += 0.01;
		} else if (n >= 0) {
			setTimeout(function() {
				abox.style.opacity = n;
				i -= 1.2;
				n -= 0.01;
			}, 1000)

		}
	}, 0);
}