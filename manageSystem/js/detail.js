$(function(){
	$.ajax({
		type:"get",
		url:"json/available.json",
		success:function(data){
			var res=eval(data);
		}
	});
});
