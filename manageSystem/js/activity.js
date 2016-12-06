$(document).ready(function() {
		var defaults={
			add:'#add',
			modification:'#modification',
			end:'#end',
			look:'#look',
			
			cancle:'#cancleshow',
			
			click:'click'
		}
		
		var options=$.extend(defaults,options);
		function open(url){
			 window.open (url, "newwindow", "height=500, width=800, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
		}
			
			
			//实现功能的代码
			$(options.add).bind(options.click,function(){
			   open("add.html");
			});
			
			$(options.modification).bind(options.click,function(){
				var obj=$('input[name="list"]');
				var s=new Array();
				for(var i=0;i<obj.length;i++){
				   if(obj[i].checked){
				     s.push(obj[i].value);
				    }
				}
				if(s.length==1){
				open("modification.html");
				$(this).css('color','#438ecf');
				}else{
					$(this).css('color','grey');
				}
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
				open("detail.html");
				$(this).css('color','#438ecf');
				}else{
					$(this).css('color','grey');
				}
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
				if(j==s.length&&j!=0){
					alert("确定终止活动?")
					for(var i=0;i<s.length;i++){
						document.getElementById(s[i]).innerHTML="已终止";
					}
				}else{
					alert("请合适的活动");
				}
				
				
			});
});
