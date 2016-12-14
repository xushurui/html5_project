$(function(){
	$('#order').datagrid({
		width:1200,
//		url:'good.json',//数据
		title:'订单列表',
		inconCls:'icon-search',
		rownumbers:true,
		striped:true,//斑马线效果
		columns:[[
			{
		      field:'ordernumber',
			  title:'订单号',
			  sortable:true,
			  align:'center',
			  width:170,
			},{
		      field:'user',
			  title:'参团用户',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'phone',
			  title:'联系人电话',
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'address',
			  title:'收货地址',	
			  sortable:true,
			  align:'center',
			  width:250,
			},{
		      field:'state',
			  title:'发货状态',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
			   field:'sendTime',
			  title:'发货时间',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
			  field:'getTime',
			  title:'收货时间',	
			  sortable:true,
			  align:'center',
			  width:150,
		   }
		
		]],
		pagination:true,
		pageSize:6,//显示5条
		pageList:[10,20,30],//更改条数
		pageNumber:1,
		pagePosition:'bottom',
		
		sortName:'date',//根据时间排序
		sortOrder:'DESC',
		remoteSort:false,//自定义的情况下服务器端没有用的
//		multiSort:true,//设置多个排序
		method:'get',
		queryParams:{
			id:1,//设置请求远程的数据发送的额外的数据，默认为null
		},
		
	});
	
	
	$('#orderName').validatebox({
		required:true,
		validType:'length[2,10]'
//		missingMessage:'请输入活动名称',
//		invalidMessage:'活动名称错误',
	});
	
	$('#user').validatebox({
		required:true,
		validType:'length[2,10]'

	});
	
	$('#sendTime').datebox({
		
	});
	$('#getTime').datebox({
		
	});
	
	$('#search').linkbutton({
		plain:'true',
		text:'搜索'
	});
	
	
	
	
	$('#orderAdd').linkbutton({
		plain:'true',
		text:'添加',
		iconCls:'icon-add'
		
	});
	$('#orderRemove').linkbutton({
		plain:'true',
		text:'删除',
		iconCls:'icon-remove'
		
	});
	$('#orderEdit').linkbutton({
		plain:'true',
		width:'100',
		height:'100',
		iconCls:'icon-edit'
		
	});
	
	
	
	
	});