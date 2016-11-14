/**
 * @package Xslider - A slider plugin for jQuery
 * @version 0.5
 * @author xhowhy <http://x1989.com> 
 **/
;(function($){
	$.fn.Xslider = function(options){
		var settings ={
			affect: 'scrollx', //效果  有scrollx|scrolly|fade|none
			speed: 1200, //动画速度
			space: 6000, //时间间隔
			auto: true, //自动滚动
			trigger: 'mouseover', //触发事件 注意用mouseover代替hover
			conbox: '.conbox', //内容容器id或class
			ctag: 'a', //内容标签 默认为<a>
			switcher: '.switcher', //切换触发器id或class
			stag: 'a', //切换器标签 默认为a
			current:'cur', //当前切换器样式名称
			rand:false //是否随机指定默认幻灯图片
		};
		//.$.extend({},defaults, options)
		//这样做的目的是为了保护包默认参数。也就是defaults里面的参数。
		settings = $.extend({}, settings, options);
		var index = 1;
		var last_index = 0;
		var $conbox = $(this).find(settings.conbox),
			$contents = $conbox.find(settings.ctag);
		var $switcher = $(this).find(settings.switcher),
			$stag = $switcher.find(settings.stag);
		if(settings.rand) {
			index = Math.floor(Math.random() * $contents.length);
			slide();
		}
		if(settings.affect == 'fade') {
	   $.each($contents, function(k, v) {//k相当于遍历的下标，v为遍历下标的值
		(k === 0) ? $(this).css({
			'position': 'absolute',
			'z-index': 9  //若为当一个放在最上面
		}): $(this).css({
			'position': 'absolute',
			'z-index': 1,
			'opacity': 0
		});
	});
}

		function slide() {
			if(index >= $contents.length) index = 0;
			//移除当前的样式
			$stag.removeClass(settings.current).eq(index).addClass(settings.current);
			//实现水平滑动的效果
			switch(settings.affect) {
				case 'scrollx':
				    //所有图片的总长度 
					$conbox.width($contents.length * $contents.width());
					
					$conbox.stop().animate({
						left: -$contents.width() * index//停止时显示的是当前的第几张图
					}, settings.speed);
					break;
				//实现垂直滑动
				case 'scrolly':
					$contents.css({
						display: 'block'
					});
					$conbox.stop().animate({
						top: -$contents.height() * index + 'px'
					}, settings.speed);
					break;
					
			    //实现渐变滑动
				case 'fade':
					$contents.eq(last_index).stop().animate({//当到最后一个的时候放回到终点
							'opacity': 0
						}, settings.speed / 2).css('z-index', 1)//将当前的隐藏掉
						.end()
						.eq(index).css('z-index', 9).stop().animate({
							'opacity': 1
						}, settings.speed / 2)
					break;
					
				case 'none':
					$contents.hide().eq(index).show();
					break;
			}
			last_index = index;//当前的
			index++;//下一个
		};
		if(settings.auto) 
		var Timer = setInterval(slide, settings.space);
		
		//切换标签这个继承鼠标触摸事件
		$stag.bind(settings.trigger, function() {
			_pause()
			index = $(this).index();
			slide();
			
		});
		$conbox.hover(_pause, _continue);

		function _pause() {
			clearInterval(Timer);
		}

		function _continue() {
			if(settings.auto) 
			Timer = setInterval(slide, settings.space);//继续事件的事件间隔时间
		}
		}
		})(jQuery);