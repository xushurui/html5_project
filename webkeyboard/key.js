(function($){
	$.fn.keyboard=function(){
		var defaults={
			//各类参数，各种属性
			li:'li',//获取的点击按钮
			write:'write',//搜索框
			whitespace:'.whitespace',//中间空白的地方
			box:'.box2',//包含box的框
			cancle:'.cancle',//取消按钮
			
			writeinput:'#write',
			letter:'.letter',//所有的字母
			space:'#space',//空格
			search:'#search',//搜索按钮
			voice:'#voice',//语音
			num:'#num',//转换为数字
			spell:'#spell',//转换为拼音
			del:'#del',//删除
			caps:'.caps',//大写锁
			keymap:'#map',//map
			keysymbol:'#symbol',
			
			word:'word',//拼音键盘
			keyboardNum:'number',//数字键盘
			
			
			//绑定事件的类型
			click:'click'
		}
		
		var options=$.extend(defaults,options);
		this.each(function(){
			var _this=$(this);
			var text=document.getElementById(options.write);//找到搜索框
			var item=document.getElementById(options.keyboardNum);//找到数字键盘
			var it=document.getElementById(options.word);//找到字母键盘
			
			//文本框的点击事件
			$(text).bind(options.click,function(e){
				$(it).show();
				$(options.cancle).show();
				e.stopPropagation();
			});
			
			//点击其他地方消失，考虑到事件的冒泡
			$(options.whitespace).bind(options.click,function(){
				$(item).hide();
				$(it).hide();
				
			});
			
			//取消按钮的事件
			$(options.cancle).bind(options.click,function(){
				$(item).hide();
				$(it).hide();
				$(options.cancle).hide();
			});
			
			
			_this.find(options.li).bind(options.click,function(){
				//空格的事件
				if($(this).is(options.space)){
					text.value+=" ";
				}
				
				//搜索功能的事件，语音功能需要后续添加
				else if($(this).is(options.search)){
					
				}
				
				else if($(this).is(options.voice)){
					
				}
				
				else if($(this).is(options.keymap)){
					
				}
				else if($(this).is(options.keysymbol)){
					
				}
				
				//数字键盘的转化
				else if($(this).is(options.num)){
					
					$(item).toggle();
					
				}
				else if($(this).is(options.spell)){
					$(item).hide();
					
					
			}else if($(this).is(options.del)){
				if(text.value!==" "&&text.value!==null){
					text.value=text.value.slice(0,-1);
				}
			}else if($(this).is(options.caps)){
				var els=document.getElementsByTagName(options.li);
				for(var i=0,l=els.length;i<l;i++){
					var str=els[i].innerHTML;
					if(/^[a-z]$/.test(str))
					   els[i].innerHTML=str.toUpperCase();
					if(/^[A-Z]$/.test(str))
					   els[i].innerHTML=str.toLowerCase();
				}
				if($(this).has(options.letter)){
					for(var i=0,l=els.length;i<l;i++){
						if(/^[A-Z]$/.test(str))
					   els[i].innerHTML=str.toLowerCase();
					  }
				}
				
				
			}else{
				var str=this.innerHTML;
				text.value+=str;
			}
		
				
			});	
		});
		return this;
	}
})(jQuery);
