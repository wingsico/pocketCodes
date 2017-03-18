var a = (function(){
	function someSetup(){
	   var setup = 'done';
	}
	function actualWork(){
	  alert('Worky-worky');
	}
	someSetup();
	return actualWork;
}());