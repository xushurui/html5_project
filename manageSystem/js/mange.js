(function($){
	$.fn.showMange=function(){
		var defaults={
			activity:'#activity',
			activityThree:'#activityThree',
			content:'#content',
			
			
			add:"#add",
			modification:"modification",
			end:"end",
			look:"look",
			
			click:'click'
		}
		
		var options=$.extend(defaults,options);
		this.each(function(){
			//实现功能的代码
			$(options.activityThree).bind(options.click,function(){
				
				$(options.content).load('blue-card-activity.html');
			});
			
			
			
			
			
			
			
		});
		return this;
	}
})(jQuery);
