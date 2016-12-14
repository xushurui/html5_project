$(function(){
	$('#manager').datagrid({
		width:800,
		url:'manager.json',//数据
		title:'用户列表',
		inconCls:'icon-search',
		rownumbers:true,
		striped:true,//斑马线效果
		columns:[[
		   {
			field:'ck',
			checkbox:true,
			
		    },{
		      field:'user',
			  title:'用户名',
			  sortable:true,
			  align:'center',
			  width:100,
			},{
		      field:'password',
			  title:'密码',	
			  sortable:true,
			  align:'center',
			  width:100,
			},{
		      field:'phone',
			  title:'联系电话',
			  sortable:true,
			  align:'center',
			  width:100,
			},{
		      field:'startdate',
			  title:'注册时间',	
			  sortable:true,
			  align:'center',
			  width:100,
			},{
		      field:'confirmdate',
			  title:'审核时间',	
			  sortable:true,
			  align:'center',
			  width:100,
			},{
		      field:'enterCount',
			  title:'参团次数',	
			  sortable:true,
			  align:'center',
			  width:80,
			},{
		      field:'confirmState',
			  title:'审核情况',	
			  sortable:true,
			  align:'center',
			  width:80,
			},
		
		
		
		]],
//		data:[{
//			user:'手工用户',
//			password:'*****',
//			phone:'123232323',
//			startdate:'2014-10-11',
//			confirmdate:'2014-10-11',
//			enterCount:'20',
//		},{
//			user:'手工用户',
//			password:'*****',
//			phone:'123232323',
//			startdate:'2014-10-11',
//			confirmdate:'2014-10-11',
//			enterCount:'20',
//		}],
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
	$('#user').validatebox({
		required:true,
		validType:'length[2,10]'

	});
	
	$('#loginTime').datebox({
		
	});
	$('#confirmTime').datebox({
		
	});
	
	$('#search').linkbutton({
		plain:'true',
		text:'搜索'
	});
	
	
	$('#managerRemove').linkbutton({
		plain:'true',
		text:'删除',
		iconCls:'icon-remove'
	});
	$('#managerEdit').linkbutton({
		plain:'true',
		text:'编辑',
		iconCls:'icon-edit'
		
		
	});
	
	
	//添加窗口
	$('#w').window({
		
	});
	
	
	
	});