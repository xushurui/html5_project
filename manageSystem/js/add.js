$(document).ready(function() {

	$("#choose ").bind("change ", function() {
		var value = $(this).val();
		var optionContent = ['#money', '#timeDiscount', '#discount'];
		if(value == 0) {
			for(var i = 0; i < optionContent.length; i++)
				$(optionContent[i]).hide();
		} else if(value == 1) {
			$(optionContent[value - 1]).show().siblings().hide();
		} else if(value == 2) {
			$(optionContent[value - 1]).show().siblings().hide();
		} else {
			$(optionContent[value - 1]).show().siblings().hide();
		}

	});
	
	
	
	
	$('#confirm').bind("click",function(){
		var obj=$('input[name="choosed"]');
			var s=new Array();
			for(var i=0;i<obj.length;i++){
			   if(obj[i].checked){
			     s.push(obj[i].value);
			    }
			 }
		
		
		
		
	});
	
	
});