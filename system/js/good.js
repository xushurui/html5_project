$(function(){
	$.fn.datebox.defaults.formatter=function(date){
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var d=date.getDate();
		return y+'年'+m+'月'+d+'日';
	}
	$('#good').datagrid({
		width:1000,
		url:'good.json',//数据
		title:'用户列表',
		inconCls:'icon-search',
		rownumbers:true,
		striped:true,//斑马线效果
		columns:[[
		    {
			field:'ck',
			checkbox:true,
			
		    },{
		      field:'goodname',
			  title:'商品名称',
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'storename',
			  title:'商店名称',	
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
		      field:'detail',
			  title:'商品信息',	
			  sortable:true,
			  align:'center',
			  width:300,
			},{
		      field:'picture',
			  title:'商品图片',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'confirmResult',
			  title:'审核情况',	
			  sortable:true,
			  align:'center',
			  width:75,
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
	
	
	$('#goodName').validatebox({
		required:true,
		validType:'length[2,10]'

	});
	
	$('#startTime').datebox({
		
	});
	$('#endTime').datebox({
		
	});
	
	$('#search').linkbutton({
		plain:'true',
		text:'搜索'
	});
	
	
	$('#storeName').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		
	});
	
	
	$('#add').linkbutton({
		plain:'true',
		text:'添加',
		iconCls:'icon-add'
		
	});
	$('#remove').linkbutton({
		plain:'true',
		text:'删除',
		iconCls:'icon-remove'
	});
	$('#edit').linkbutton({
		plain:'true',
		text:'编辑',
		iconCls:'icon-edit'
		
		
	});
	
	
	
	$('#selectStore').appendTo($('#storeName').combo('panel'));
	$('#selectStore input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#storeName').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	
	
	//添加窗口
	$('#addGood').window({
		title:'添加商品',
		closed:'true'
		
	});
//	$('#confirmState').combobox({
//		width:'100',
//		editable:false,//是否可以输入文本到字段中
//		required:true
//	});
	
	
	$('#storeName-one').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		required:true,
	});
	
	$('#selectStore-one').appendTo($('#storeName-one').combo('panel'));
	$('#selectStore-one input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#storeName-one').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	
	
	
	
	
});