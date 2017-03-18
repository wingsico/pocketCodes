
$(function() {
	// 菜单栏
	var $sidebar = $('#sideBar'),
		$mask = $('#mask'),
		$sidebar_trigger = $('#sidebar_trigger');

	function showSideBar() {
		$mask.fadeIn();
		$sidebar.css('right', 0)
	}

	function hideSideBar() {
		$mask.fadeOut();
		$sidebar.css('right', -$sidebar.width());
	}
	$sidebar_trigger.on('click', showSideBar)
	$mask.on('click', hideSideBar)
		// 菜单栏	
		// 按钮躲避
	var $self_introduce = $('#self_introduce')
		// 按钮躲避
		// header 显示
	var $winPos = $(window).scrollTop();
	var $header = $('#header');
	// 滚动
	// 返回顶部
	var $backButton = $('.back-top-top')
	$backButton.on('click', function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})
	$(window).on('scroll',function(){
		if($(window).scrollTop()> $(window).height()*(1/2)){
			$backButton.fadeIn();
		}
		else{
			$backButton.fadeOut();
		}		
	})
	$(window).trigger('scroll');

	

})
var headingTip = document.getElementById('heading-tip')
var index = document.getElementById('index')
	  function showTip(){
		headingTip.style.display = 'block';
		}

var tipClose = document.getElementById('heading-close')
	tipClose.onclick = function(){
		headingTip.style.display = 'none';
	}