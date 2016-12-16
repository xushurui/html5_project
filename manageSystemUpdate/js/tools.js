
$(function(){
	
	//给datagrid添加numberspinner控件
	$.extend($.fn.datagrid.defaults.editors, {
			numberspinner : {
			init: function(container, options){
			var input = $('<input type="text">').appendTo(container); options.editable = false;
			input.numberspinner(options);
			return input;
			       },
			       getValue: function(target){
			return $(target).numberspinner('getValue'); },
			setValue: function(target, value){ $(target).numberspinner('setValue', value);
			},
			resize: function(target, width){
			$(target).numberspinner('resize', width); },
			destroy : function (target) { $(target).numberspinner ('destroy');
			}, 
			},
			
});
     //validType验证
	$.extend($.fn.validatebox.defaults.rules, {     
                telNum:{ //既验证手机号，又验证座机号  
                  validator: function(value, param){  
                      return /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\d3)|(\d{3}\-))?(1[358]\d{9})$)/.test(value);  
                     },     
                     message: '请输入正确的电话号码。'  
                },
                phoneNum: { //验证手机号
                    validator: function(value, param){  
                     return /^1[3-8]+\d{9}$/.test(value);  
                    },     
                    message: '请输入正确的手机号码。'    
                }, 
               money:{ 
				   validator: function (value, param) { 
				   return (/^(([1-9]\d*)|\d)(\.\d{1,2})?$/).test(value); 
				   }, 
				   message:'请输入正确的金额'
              },  
              ltTo: {
              	   validator: function (value, param) { 
              	   	return parseInt($(param[0]).val())>=parseInt(value); 
              	   },
              	   	message: '团购价钱必须小于原价'
              	   	}
      
    }); 
    //格式
	$.fn.datebox.defaults.formatter=function(date){
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var d=date.getDate();
		return y+'年'+m+'月'+d+'日';
	}
	
	
	
	
	
	
	
	
	
	
});