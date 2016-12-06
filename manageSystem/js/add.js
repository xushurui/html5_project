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
	
	function open(url){
			 window.open (url, "newwindow", "height=400, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
	}
	$('#chooseCustomer').bind("click",function(){
		window.open("chooseCustomer.html");
	});
	
});