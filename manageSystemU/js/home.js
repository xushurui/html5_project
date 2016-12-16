$(function(){
	$('#nav').tree({
		
		lines:true,
		data:[{
"text" : "用户管理", "iconCls" : "icon-save", "children" : [{
"text" : "用户列表","attributes" : {"url":"manager"}
}] },{
"text" : "商家管理", "iconCls" : "icon-save", "children" : [{
"text" : "商家列表","attributes" : {"url":"store"}
}] },{
"text" : "商品管理", "iconCls" : "icon-save", "children" : [{
"text" : "商品列表","attributes" : {"url":"good"}
}] },{
"text" : "订单管理", "iconCls" : "icon-save", "children" : [{
"text" : "订单列表","attributes" : {"url":"order"}
}]},{
"text" : "团购活动管理", "iconCls" : "icon-save", "children" : [{
"text" : "活动列表","attributes" : {"url":"activity"}
}] }],
		
		//异步加载，使得所有列表全部展开
		onLoadSuccess:function(node,data){
			if(data){
				$(data).each(function(index,value){
					if(this.state=="closed"){
						$('#nav').tree('expandAll');
					}
				});
			}
		},
		//点击每个分支有信息弹出
		
		onClick:function(node){
//			console.log($('#nav').tree('getNode',node.target));
			
			if(node.attributes.url){
				if($('#tabs').tabs('exists',node.text)){
					$('#tabs').tabs('select',node.text);
				}else{
					$('#tabs').tabs('add',{
						title:node.text,
						closable:true,
						iconCls:node.text,
						href:node.attributes.url+".html",
					});
				}
			}
		},
	
		
	});
	
	
	
	
	
	$('#tabs').tabs({
		fit:true,
		border:false,
		
	});
	$('#tabs').tabs('add',{
						title:'用户列表',
						closable:true,
						iconCls:'用户列表',
						href:"manager.html",
	});
	
	
});
