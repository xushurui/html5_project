$(function(){
	//登陆界面
	$('#login').dialog({
		title:'登陆后台',
		width:300,
		height:180,
		modal:true,//幕布
		buttons:'#btn',
	});
	
	//管理员账号验证
	$('#manager').validatebox({
		required:true,
		missingMessage:'请输入管理员账号',
		invalidMessage:'管理员账号错误',
	});
	
	//加载验证
	if(!$('#manager').validatebox('isValid')){
			$('#manager').focus();
		}else if(!$('#password').validatebox('isValid')){
			$('#password').focus();
	}
	
	
	
	
	//管理员密码验证
	$('#password').validatebox({
		required:true,
		validType:'length[6,30]',
		missingMessage:'请输入密码',
		invalidMessage:'密码错误',
	});
	
	
	
	//按钮点击登陆
	$('#btn a').click(function(){
		if(!$('#manager').validatebox('isValid')){//判断输入框是否有效
			$('#manager').focus();
		}else if(!$('#password').validatebox('isValid')){//判断输入框是否有效
			$('#password').focus();
		}else{
//			alert('提交中..');
			$.ajax({
				type:"post",
				url:"content.json",
				data:{
					manager:$('#manager').val(),
					password:$('#password').val(),
				},
				beforeSend:function(){
					$.messager.progress({
						text:'正在登陆中....',
					});
					
				},
				success:function(data,response,status){
					$.message.process('close');
					if(data>0){
						loaction.href="index.html";
					}else{
						$.messager.alert('登陆失败!','用户名或密码错误!','warning',
						function(){
							$('#password').select(); 
						});
					}
					}
				});
			}
		});
	
	
	
	
	
});