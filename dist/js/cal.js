// 简单版本
function cal(){
	var num=document.getElementsByName('num');
	var select=document.getElementsByTagName('option');

	var z;
	var btn=document.getElementById('get');
	var jia=document.getElementById('jia');
	var jian=document.getElementById('jian');
	var cheng=document.getElementById('cheng');
	var chu	=document.getElementById('chu');
	jia.onclick = function jia(){
		var x=num[0].value;
		var y=num[1].value;
		z = Number(x) + Number(y);
		num[2].value = z;
	}
	jian.onclick = function jian(){
		var x=num[0].value;
		var y=num[1].value;
		z = Number(x) - Number(y);
		num[2].value = z;
	}
	cheng.onclick = function cheng(){
		var x=num[0].value;
		var y=num[1].value;
		z = Number(x) * Number(y);
		num[2].value = z;
	}
	chu.onclick = function chu(){
		var x=num[0].value;
		var y=num[1].value;
		z = Number(x) / Number(y);
		num[2].value = z;
	}

}
cal();


// 复杂版本
var i;
var conduct = document.getElementById('conduct');
var num = 0,
	result = 0,
	numshow = "0";
var operate = 0; //判断输入状态的标志 0,1 0为可以连续输入状态 1为重新输入状态
var calcul = 0; //判断计算状态的标志 
var calculator = document.getElementsByClassName('screen');

function jisuan(num) {
	var str = String(calculator[0].value); //获得当前显示数据 
	str = (str != "0") ? ((operate == 0) ? str : "") : ""; 
	//如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
	str = str + String(num); //给当前值追加字符 
	calculator[0].value = str;
	operate = 0; //重置输入状态  
}

function del() { //退格 
	var str = String(calculator[0].value);
	str = (str != "0") ? str : "";
	str = str.substr(0, str.length - 1);
	str = (str != "") ? str : "0";
	calculator[0].value = str;
}

function clearscreen() { //清除数据 
	num = 0;
	result = 0;
	numshow = "0";
	calculator[0].value = "0";
}
function dot(){ 
var str=String(calculator[0].value); 
str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
for(i=0; i<=str.length;i++){ //判断是否已经有一个点号 
if(str.substr(i,1)==".") return false; //如果有则不再插入 
} 
str=str + "."; 
calculator[0].value=str; 
operate=0; 
}
function dzero(){
	var str=String(calculator[0].value); 
str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
str=str+"00";
calculator[0].value =str;
operate = 0;
}
function plus() { //加法 
	calculate(); //调用计算函数 
	operate = 1; //更改输入状态 
	calcul = 1; //更改计算状态为加 
}

function minus() { //减法 
	calculate();
	operate = 1;
	calcul = 2;
}

function times() { //乘法 
	calculate();
	operate = 1;
	calcul = 3;
}

function divide() { //除法 
	calculate();
	operate = 1;
	calcul = 4;
}

function persent() { //求余 
	calculate();
	operate = 1;
	calcul = 5;
}

function equal() {
	calculate(); //等于 
	operate = 1;
	num = 0; //初始化
	result = 0; //初始化
	numshow = "0"; //初始化
}

function calculate() {
	numshow = Number(calculator[0].value);
	if (num != 0) { //判断前一个运算数是否为零 
		switch (calcul) { //判断要输入状态 
			case 1:
				result = num + numshow;
				break; //计算"+" 
			case 2:
				result = num - numshow;
				break; //计算"-" 
			case 3:
				result = num * numshow;
				break;
			case 4:
				result = num / numshow;
				break;
			case 5:
				result = num % numshow;
				break;
		}
	} else {
		result = numshow;
	}
	numshow = String(result);
	calculator[0].value = numshow;
	num = result; //存储当前值 
}