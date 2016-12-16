$(function(){
	//审核列表的情况
	var orderStates=[
		{statesid:'01',name:'通过'},
		{statesid:'02',name:'未通过'},
		{statesid:'03',name:'待审核'},
		];
	var oSendStates=[
	    {
	    	 sendid:'01',sendname:'待发货'},
	    	 {sendid:'02',sendname:'待收货'},
	    	 {sendid:'03',sendname:'收货成功'},

	];
	//审核列表的情况
	
	var editFlag = undefined;//设置一个编辑标记
	
	//添加，删除，编辑，搜索事件
	oObj={
		editRow:undefined,//没有数据
//		search:function(){
//			$("#good").datagrid('load',{
//				goodName:$.trim($('input[name="goodName"]').val()),
//				storeName:$.trim($('input[name="storeName"]').val()),
//				startTime:$.trim($('input[name="startTime"]').val()),
//				endTime:$.trim($('input[name="endTime"]').val()),
//			}); 
//		},
		oAdd:function(){
			//末尾追加一行
//			$('#good').datagrid('appendRow',{
//				ID:'1',
//				
//			});
   			if(this.editRow==undefined){
			$('#order').datagrid('insertRow',{
				index:0,
				row:{
					
				},
			});
			//将第一行变成可编辑的状态
			$('#order').datagrid('beginEdit',0);
			this.editRow=0;
			}
	     },
	    
	    //得到编辑的行的下标
	    oGetRowIndex: function (target){
		var tr=$(target).closest('tr.datagrid-row');
		return parseInt(tr.attr('datagrid-row-index'));
        },
        
        //编辑
	    oEditrow:function (target){
		$("#order").datagrid('beginEdit',oObj.oGetRowIndex(target));
       
	    },
	   
	   //删除
	   oDeleterow:function (target){
		$.messager.confirm('确认','你确定删除嘛',function(r){
			if(r){
				//删除当前这一行this.editRow
				$('#order').datagrid('deleteRow',oObj.oGetRowIndex(target));
			}
		});
	    },
	    
	    
	    
	    //保存
	    oSaverow: function (target){
		$('#order').datagrid('endEdit',oObj.oGetRowIndex(target));
	    },
	    
	    //取消
	    oCancelrow:function (target){
	    	this.editRow=undefined;
		$('#order').datagrid('rejectChanges',oObj.oGetRowIndex(target));
	    }
	  };

	$('#order').datagrid({
		width:1050,
		url:'good.json',//数据
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
			  width:70,
			  editor:{
			  	type:'numberbox',
			  	require:true,
			  },
			},{
			  field:'orderGoodName',
			  title:'商品名称',
			  sortable:true,
			  align:'center',
			  width:100,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入商品名',
			  		invalidMessage:'请输入正确的商品名',
			  	},
			  }
			},{
			  field:'orderStoreName',
			  title:'店铺名称',
			  sortable:true,
			  align:'center',
			  width:100,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入店铺名',
			  		invalidMessage:'请输入正确的店铺名',
			  	},
			  },
			},{
			  field:'orderStorePhone',
			  title:'店家电话',
			  sortable:true,
			  align:'center',
			  width:70,
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
		      field:'orderUser',
			  title:'参团用户',	
			  sortable:true,
			  align:'center',
			  width:70,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入用户名',
			  		invalidMessage:'请输入正确的用户名',
			  	},
			  },
			},{
		      field:'phone',
			  title:'联系人电话',
			  sortable:true,
			  align:'center',
			  width:70,
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
		      field:'address',
			  title:'收货地址',	
			  sortable:true,
			  align:'center',
			  width:120,
			},{
		      field:'state',
			  title:'发货状态',	
			  sortable:true,
			  align:'center',
			  width:120,
			  formatter:function(value,row){
			  	return row.sendname||value;
			  },
			  editor:{
			  	type:'combobox',
			  	options:{
			  		valueField:'sendname',
			  		textField:'sendname',
			  		data:oSendStates,
			  		required:true
			  	}
			  },
			},{
			   field:'sendTime',
			  title:'发货时间',	
			  sortable:true,
			  align:'center',
			  width:70,
			  editor:{
			  	type:'datebox',
			  	options:{
			  		required:true
			  	}
			  }
			},{
			  field:'getTime',
			  title:'收货时间',	
			  sortable:true,
			  align:'center',
			  width:70,
			  editor:{
			  	type:'datebox',
			  	options:{
			  		required:true
			  	}
			  }
		  },{
		      field:'confirmState',
			  title:'审核情况',	
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
			  		data:orderStates,
			  		required:true
			  	}
			  },
			},
			{
				field:'opt',
				title:'操作',
				width:80,
				align:'center',
            		formatter:function(value,row,index){  
                    if(row.editing){
                    	 var s = '<a href="javascript:void(0)" onclick="oObj.oSaverow(this)">保存</a> ';
					 var c = '<a href="javascript:void(0)" onclick="oObj.oCancelrow(this)">取消</a>';
					 return s+c;
                    }else{
                    	 var e = '<a href="javascript:void(0)" onclick="oObj.oEditrow(this)">编辑</a> ';
					 var d = '<a href="javascript:void(0)" onclick="oObj.oDeleterow(this)">删除</a>';
					 return e+d;
                    }
                 }
            },
		
		]],
		toolbar:'#otb',
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
		  	oObj.editRow=undefined;
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
			if(oObj.editRow!=undefined){
				$('#order').datagrid('endEdit',obj.editRow);
			}
  			if(oObj.editRow==undefined){
			$('#order').datagrid('beginEdit',rowIndex);//编辑数据
			oObj.editRow=rowIndex;//将当前的行的索引给该全局变量
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
	
	
	$('#orderName,#orderUserName').validatebox({
		validType:'length[6,12]',
		invalidMessage:'请输入正确格式',
	});
	
	$('#sendTime,#getTime').datebox({
		
	});
	$('#osearch').linkbutton({
		plain:'true',
		text:'搜索'
	});
	
	
	
	//添加+删除+编辑三个按钮
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
	
	
	
	
	
	//添加的弹出窗口
	$('#orderAddWindow').window({
		width:'500',
		height:'400',
		closed:true,
		title:'添加订单',
		
	});
	//订单号
	$("#orderNumber").numberbox({
		required:true,
		validType:'length[2,8]',
		missingMessage:'请输入订单号',
	    invalidMessage:'请输入正确的订单号',
		
	});
	//商品名
	$("#orderGood").validatebox({
		required:true,
		validType:'length[2,8]',
	});
	//店主电话
	$('#orderStoreTelNumber').numberbox({
		required:true,
		validType:'telNum',
		missingMessage:'请输入电话号码',
	    invalidMessage:'请输入正确的电话号码',
	});
	//店铺选择
	$('#orderStore').combobox({
			width:'100',
		editable:false,//是否可以输入文本到字段中
	});
	 $('#selectOrderStore').appendTo($('#orderStore').combo('panel'));
	$('#selectOrderStore input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#orderStore').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});

	
	//用户手机号
	$('#orderUserPhone').numberbox({
		required:true,
		validType:'phoneNum',
		missingMessage:'请输入手机号',
	    invalidMessage:'请输入正确的手机号',
	});
	//发货时间.收货时间
	$('#orderSendTime,#orderEndTime').datebox({
		required:true,
		missingMessage:'请输入收货日期',
	});
    //发货状态
    $('#orderSendState').combobox({
      	width:'100',
		editable:false,//是否可以输入文本到字段中
    });
   $('#selectOrderSendState').appendTo($('#orderSendState').combo('panel'));
	$('#selectOrderSendState input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#orderSendState').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	
	
	
	
	
	
	
	
	});