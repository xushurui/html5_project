$(function(){
	
	$.fn.datebox.defaults.formatter=function(date){
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var d=date.getDate();
		return y+'年'+m+'月'+d+'日';
	}
	$('#activity').datagrid({
		width:1000,
//		url:'good.json',//数据
		title:'订单列表',
		inconCls:'icon-search',
		rownumbers:true,
		striped:true,//斑马线效果
		columns:[[
		     {
			field:'ck',
			checkbox:true,
			
		    },{
		      field:'goodName',
			  title:'活动名称',
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'storeName',
			  title:'店铺名称',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'goodName',
			  title:'商品名称',
			  sortable:true,
			  align:'center',
			  width:80,
			},{
		      field:'goodCount',
			  title:'商品数量',
			  sortable:true,
			  align:'center',
			  width:80,
			  editor:'numberbox'
			},{
		      field:'startTime',
			  title:'开团时间',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
		      field:'endTime',
			  title:'到期时间',	
			  sortable:true,
			  align:'center',
			  width:150,
			},{
			  field:'enterCount',
			  title:'参团人数',	
			  sortable:true,
			  align:'center',
			  width:150,
			  editor:'numberbox'
			},{
			  field:'activityState',
			  title:'活动状态',	
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
	$('#activityName').validatebox({
		
		validType:'length[8,12]'
//		missingMessage:'请输入活动名称',
//		invalidMessage:'活动名称错误',
	});
	
	$('#startTime').datebox({
		
	});
	$('#endTime').datebox({
		
	});
	
	
	$('#aSearch').linkbutton({
		plain:'true',
		text:'搜索'
	});
	
	
	$('#aType,#aStoreName,#activityState').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		
	});
	
	$('#aStoreNameOne,#activityStateOne').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		required:true
	});

	
	
	$('#activityAdd').linkbutton({
		plain:'true',
		text:'添加',
		iconCls:'icon-add'
		
	});
	$('#activityRemove').linkbutton({
		plain:'true',
		text:'删除',
		iconCls:'icon-remove'
	});
	$('#activityEdit').linkbutton({
		plain:'true',
		text:'编辑',
		iconCls:'icon-edit'
		
		
	});
	
	$('#activityWindow').window({
		title:'添加活动',
		closed:true,
	});
	
	$('#aSelectType').appendTo($('#aType').combo('panel'));
	$('#aSelectType input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#aType').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	$('#aSelectStore').appendTo($('#aStoreName').combo('panel'));
	$('#aSelectStore input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#aStoreName').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	$('#aSelectState').appendTo($('#activityState').combo('panel'));
	$('#aSelectState input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#activityState').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	/*表单*/
	//添加表单里面的选择店铺
	$('#aSelectStoreOne').appendTo($('#aStoreNameOne').combo('panel'));
	$('#aSelectStoreOne input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#aStoreNameOne').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	$('#aSelectStateOne').appendTo($('#activityStateOne').combo('panel'));
	$('#aSelectStateOne input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#activityStateOne').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	
	//表单的时间
	$('#startTimeOne').datebox({
		require:'true'
	});
	$('#endTimeOne').datebox({
		require:'true'
	});
	
	
	
	
	
	});