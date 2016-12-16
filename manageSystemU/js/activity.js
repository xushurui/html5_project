$(function(){
	
	//审核
	var activityStates=[
		{statesid:'01',name:'开始'},
		{statesid:'02',name:'未通过'},
		{statesid:'03',name:'待审核'},
		];
	
	//添加，删除，编辑，搜索事件
	aObj={
		aEditRow:undefined,//没有数据
//		search:function(){
//			$("#good").datagrid('load',{
//				goodName:$.trim($('input[name="goodName"]').val()),
//				storeName:$.trim($('input[name="storeName"]').val()),
//				startTime:$.trim($('input[name="startTime"]').val()),
//				endTime:$.trim($('input[name="endTime"]').val()),
//			}); 
//		},
		aAdd:function(){
			//末尾追加一行
//			$('#good').datagrid('appendRow',{
//				ID:'1',
//				
//			});
   			if(this.editRow==undefined){
			$('#activity').datagrid('insertRow',{
				index:0,
				row:{
					
				},
			});
			//将第一行变成可编辑的状态
			$('#activity').datagrid('beginEdit',0);
			this.editRow=0;
			}
	     },
	    
	    //得到编辑的行的下标
	    aGetRowIndex: function (target){
		var tr=$(target).closest('tr.datagrid-row');
		return parseInt(tr.attr('datagrid-row-index'));
        },
        
        //编辑
	    aEditrow:function (target){
		$("#activity").datagrid('beginEdit',aObj.aGetRowIndex(target));
       
	    },
	   
	   //删除
	   aDeleterow:function (target){
		$.messager.confirm('确认','你确定删除嘛',function(r){
			if(r){
				//删除当前这一行this.editRow
				$('#activity').datagrid('deleteRow',aObj.aGetRowIndex(target));
			}
		});
	    },
	    
	    
	    
	    //保存
	    aSaverow: function (target){
		$('#activity').datagrid('endEdit',aObj.aGetRowIndex(target));
	    },
	    
	    //取消
	    aCancelrow:function (target){
//	    	this.editRow=undefined;
	    	alert(aObj.aGetRowIndex(target));
		$('#activity').datagrid('cancelEdit',aObj.aGetRowIndex(target));
	    }
	  };
	
	
	$('#activity').datagrid({
		width:1030,
		url:'good.json',//数据
		title:'订单列表',
		inconCls:'icon-search',
		rownumbers:true,
		striped:true,//斑马线效果
		columns:[[
		     {
			field:'ck',
			checkbox:true,
			
		    },{
		      field:'activityName',
			  title:'活动名称',
			  sortable:true,
			  align:'center',
			  width:80,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入活动名称',
			  		invalidMessage:'请输入正确的活动名',
			  	},
			  }
			},{
		      field:'storeName',
			  title:'店铺名称',	
			  sortable:true,
			  align:'center',
			  width:80,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入店铺名称',
			  		invalidMessage:'请输入正确的店铺名',
			  	},
			  }
			},{
		      field:'activityPhone',
			  title:'联系人手机号',	
			  sortable:true,
			  align:'center',
			  width:80,
			   editor:{
			  	type:'numberbox',
			  	options:{
			  		required:true,
			  		validType:'telNum',
			  		missingMessage:'请输入电话号码',
			  		invalidMessage:'请输入正确的电话号码',
			  }
			  },
			},{
		      field:'goodName',
			  title:'商品名称',
			  sortable:true,
			  align:'center',
			  width:80,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入商品名称',
			  		invalidMessage:'请输入正确的商品名',
			  	},
			  }
			},{
		      field:'goodCount',
			  title:'商品数量',
			  sortable:true,
			  align:'center',
			  width:80,
			  editor:{
			  	type:'numberspinner',
			  	options:{
			  		required:true,
			  		min:2,
			  	}
			  },
			},{
		      field:'startTime',
			  title:'开团时间',	
			  sortable:true,
			  align:'center',
			  width:150,
			  editor:{
			  	type:'datebox',
			  	options:{
			  		required:true
			  	}
			  }
			},{
		      field:'endTime',
			  title:'到期时间',	
			  sortable:true,
			  align:'center',
			  width:150,
			  editor:{
			  	type:'datebox',
			  	options:{
			  		required:true
			  	}
			  }
			},{
			  field:'enterCount',
			  title:'参团人数',	
			  sortable:true,
			  align:'center',
			  width:80,
			  editor:{
			  	type:'numberspinner',
			  	options:{
			  		required:true,
			  		min:2,
			  	}
			  },
			},{
			  field:'activityState',
			  title:'活动状态',	
			  sortable:true,
			  align:'center',
			  width:80,
			   formatter:function(value,row){
			  	return row.name||value;
			  },
			  editor:{
			  	type:'combobox',
			  	options:{
			  		valueField:'name',
			  		textField:'name',
			  		data:activityStates,
			  		required:true
			  	}
			  }
			},{
				field:'opt',
				title:'操作',
				width:100,
				align:'center',
            		formatter:function(value,row,index){  
                    if(row.editing){
                    	 var s = '<a href="javascript:void(0)" onclick="aObj.aSaverow(this)">保存</a> ';
					 var c = '<a href="javascript:void(0)" onclick="aObj.aCancelrow(this)">取消</a>';
					 return s+c;
                    }else{
                    	 var e = '<a href="javascript:void(0)" onclick="aObj.aEditrow(this)">编辑</a> ';
					 var d = '<a href="javascript:void(0)" onclick="aObj.aDeleterow(this)">删除</a>';
					 return e+d;
                    }
                 }
            },
		
		
		]],
		toolbar:'#atb',
		onEndEdit:function(index,row){
		  	var ed=$(this).datagrid('getEditor',{
		  		index:index,
		  		field:'statesid'
		  	});
		  	row.confirmResult=$(ed.target).combobox('getText');
		  },
		  onBeforeEdit:function(index,row){
		  	row.editing=true;
		  	$(this).datagrid('refreshRow',index);//改变行值
		  },
		  onAfterEdit:function(index,row){
		  	row.editing=false;
		  	aObj.editRow=undefined;
		  	$(this).datagrid('refreshRow',index);//改变行值
		  },
		  onCancelEdit:function(index,row){
		  	row.editing=false;
		  	$(this).datagrid('refreshRow',index);//改变行值
		  },
		  //rowIndex:点击行的索引值，该索引从0开始
		  
		  
		  //双击也可以编辑
		  onDblClickRow:function(rowIndex,rowData){
//		  	console.log(rowIndex);//打印出所选行的数据
			if(aObj.editRow!=undefined){
				$('#activity').datagrid('endEdit',aObj.editRow);
			}
  			if(aObj.editRow==undefined){
			$('#activity').datagrid('beginEdit',rowIndex);//编辑数据
			aObj.editRow=rowIndex;//将当前的行的索引给该全局变量
			}
		  },
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
	
	$('#startTime,#endTime').datebox({
		
	});
	//日期
	$('#aSearch').linkbutton({
		plain:'true',
		text:'搜索'
	});
	

	$('#aType,#aStoreName,#activityState').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		
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
	
	
	
	
	//添加编辑删除按钮
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
	
	
	
	
	
	
	
	
	/*添加操作*/
	//添加表单
	$('#activityWindow').window({
		title:'添加活动',
		closed:true,
	}); 
	$('#aName').validatebox({
		required:true,
		validType:'length[3,8]',
		missingMessage:'请输入活动名称',
		invalidMessage:'请输入正确活动名称',
	});
	
	$('#aGoodName').validatebox({
		required:true,
		validType:'length[3,8]',
		missingMessage:'请输入商品名称',
		invalidMessage:'请输入正确商品名称',
	});
	//时间
	$('#aStartTimeOne,#aEndTimeOne').datebox({
		required:true,
		missingMessage:'请输入日期',
	});
	//商品数量
	$("#activityGoodCount,#enterPeople").numberspinner({
		min:2,
		value:'2',
	});
	//手机号码
	$('#activityPhone').numberbox({
		required:true,
		validType:'telNum',
		missingMessage:'请输入手机号',
		invalidMessage:'请输入正确的手机号',
		
	});
	//活动状态+店铺
	
	$('#aStoreNameOne,#activityStateOne').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		required:true,
	});
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
	
	
	
	
	
	
	});