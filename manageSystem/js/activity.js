$(document).ready(function() {
		var defaults={
			add:'#add',
			modification:'#modification',
			end:'#end',
			look:'#look',
			content:'#add-content',
			cancle:'#cancleshow',
			
			click:'click'
		}
		
		var options=$.extend(defaults,options);
		
			
			
			//实现功能的代码
			$(options.add).bind(options.click,function(){
				$(options.content).show();
				$(options.cancle).show();
				$(options.content).load('add.html');
				
			});
			
			$(options.look).bind(options.click,function(){
				var obj=$('input[name="list"]');
				var s=new Array();
				for(var i=0;i<obj.length;i++){
				   if(obj[i].checked){
				     s.push(obj[i].value);
				    }
				}
				if(s.length==1){
				$(options.content).show();
				$(options.cancle).show();
				$(options.content).load('detail.html');
				
				}
			});
			
			$(options.canle).bind(options.click,function(){
				$(options.content).html();
				$(options.cancle).hide();
			});	
			
			
			$(options.end).bind(options.click,function(){
				var obj=$('input[name="list"]');
				var s=new Array();
				var j=0;
				for(var i=0;i<obj.length;i++){
				   if(obj[i].checked){
				     s.push(obj[i].value);
				    }
				}
				for(var i=0;i<s.length;i++){
				  var trContent=document.getElementById(s[i]).innerHTML;
				  if(trContent=="进行中")
				     j++;
				}
				if(j==s.length){
					alert("确定终止活动?")
					for(var i=0;i<s.length;i++){
						document.getElementById(s[i]).innerHTML="已终止";
					}
				}else{
					alert("请重新选择活动");
				}
				
				
			});
});
