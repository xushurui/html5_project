
$(function(){
	
	var states=[
		{statesid:'01',name:'通过'},
		{statesid:'02',name:'未通过'},
		{statesid:'03',name:'待审核'},
		];
	//审核列表的情况
	
	var editFlag = undefined;//设置一个编辑标记
	
	//添加，删除，编辑，搜索事件
	gObj={
		gEditRow:undefined,//没有数据
//		search:function(){
//			$("#good").datagrid('load',{
//				goodName:$.trim($('input[name="goodName"]').val()),
//				storeName:$.trim($('input[name="storeName"]').val()),
//				startTime:$.trim($('input[name="startTime"]').val()),
//				endTime:$.trim($('input[name="endTime"]').val()),
//			}); 
//		},
		gAdd:function(){
			//末尾追加一行
//			$('#good').datagrid('appendRow',{
//				ID:'1',
//				
//			});
   			if(this.editRow==undefined){
			$('#good').datagrid('insertRow',{
				index:0,
				row:{
					
				},
			});
			//将第一行变成可编辑的状态
			$('#good').datagrid('beginEdit',0);
			this.editRow=0;
			}
	     },
	    
	    //得到编辑的行的下标
	    gGetRowIndex: function (target){
		var tr=$(target).closest('tr.datagrid-row');
		return parseInt(tr.attr('datagrid-row-index'));
        },
        
        //编辑
	    gEditrow:function (target){
		$("#good").datagrid('beginEdit',gObj.gGetRowIndex(target));
       
	    },
	   
	   //删除
	   gDeleterow:function (target){
		$.messager.confirm('确认','你确定删除嘛',function(r){
			if(r){
				//删除当前这一行this.editRow
				$('#good').datagrid('deleteRow',gObj.gGetRowIndex(target));
			}
		});
	    },
	    
	    
	    
	    //保存
	    gSaverow: function (target){
		$('#good').datagrid('endEdit',gObj.gGetRowIndex(target));
	    },
	    
	    //取消
	    gCancelrow:function (target){
	    	this.editRow=undefined;
		$('#good').datagrid('cancelEdit',gObj.gGetRowIndex(target));
	    }
	  };
	datagrid=$('#good').datagrid({
		width:1200,
		url:'good.json',//数据
		title:'用户列表',
		inconCls:'icon-search',
		nowap: true, //列内容多时自动折至第二行
		idField: 'ID', //主键
		striped:true,//斑马线效果
		fitColumns:false,
		singleSelect:true,//选择单行
		columns:[[
		    {
				field : 'id',
				title : '编号',
				sortable : true,
				width : 100,
				checkbox : true,
			},{
		    	  field:'goodname',
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
		      field:'gGoodBeforePrice',
			  title:'商品原价',
			  sortable:true,
			  align:'center',
			  width:70,
			  editor:{
			  	type:'numberbox',
			  	options:{
			  		required:true,
			  		validType:'money',
			  		missingMessage:'请输入商品原价',
			  	},
			  }
			},{
		      field:'gGoodTuanPrice',
			  title:'商品团购价',
			  sortable:true,
			  align:'center',
			  width:70,
			  editor:{
			  	type:'numberbox',
			  	options:{
			  		required:true,
//			  		validType:'ltTo["#goodBeforePrice"]',
			  		missingMessage:'请输入商品团购价',
			  	},
			  }
			},{
		      field:'gStoreName',
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
			  }
			},{
		      field:'gPhone',
			  title:'店主电话',
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
		      field:'detail',
			  title:'商品信息',	
			  sortable:true,
			  align:'center',
			  width:200,
			  editor:{
			  	type:'textarea',
			  	required:true,
			  	validType:'length[20,50]'
			  	
			  }
			},{
		      field:'picture',
			  title:'商品图片',	
			  sortable:true,
			  align:'center',
			  width:200,
			  formatter:function(value,row){
			  	str = "<img style=\"height: 80px;width: 150px;\" src=\""+value+"\"/>";
			  	 return str;
			  }
			},{
			  field:'goodNumber',
			  title:'商品数量',	
			  sortable:true,
			  align:'center',
			  width:70,
			  editor:{
			  	type:'numberspinner',
			  	options:{
			  		required:true,
			  		min:2,
			  	}
			  },
			},{
		      field:'confirmResult',
			  title:'审核情况',	
			  sortable:true,
			  align:'center',
			  width:70,
			  formatter:function(value,row){
			  	return row.name||value;
			  },
			  editor:{
			  	type:'combobox',
			  	options:{
			  		valueField:'name',
			  		textField:'name',
			  		data:states,
			  		required:true
			  	}
			  }
			}, {
				field:'opt',
				title:'操作',
				width:250,
				align:'center',
            		formatter:function(value,row,index){  
                    if(row.editing){
                    	 var s = '<a href="javascript:void(0)" onclick="gObj.gSaverow(this)">保存</a> ';
					 var c = '<a href="javascript:void(0)" onclick="gObj.gCancelrow(this)">取消</a>';
					 return s+c;
                    }else{
                    	 var e = '<a href="javascript:void(0)" onclick="gObj.gEditrow(this)">编辑</a> ';
					 var d = '<a href="javascript:void(0)" onclick="gObj.gDeleterow(this)">删除</a>';
					 return e+d;
                    }
                 }
            },
            
		

		  ]],
		  toolbar:'#tb',
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
		  	gObj.editRow=undefined;
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
			if(gObj.editRow!=undefined){
				$('#good').datagrid('endEdit',gObj.editRow);
			}
  			if(gObj.editRow==undefined){
			$('#good').datagrid('beginEdit',rowIndex);//编辑数据
			gObj.editRow=rowIndex;//将当前的行的索引给该全局变量
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
	
	
		$('#goodName').validatebox({
		required:true,
		validType:'length[2,10]'

	});
	
	$('#startTime').datebox({
		
	});
	$('#endTime').datebox({
		
	});
	
	$('#gsearch').linkbutton({
		
		text:'搜索',
		iconCls:'icon-search',
	});
	
	
	$('#storeName').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		
	});
	
	
	$('#gAdd').linkbutton({
		plain:'true',
		text:'添加',
		iconCls:'icon-add'
		
	});
//	$('#gRemove').linkbutton({
//		plain:'true',
//		text:'删除',
//		iconCls:'icon-remove'
//	});
//	$('#edit').linkbutton({
//		plain:'true',
//		text:'编辑',
//		iconCls:'icon-edit'
//		
//		
//	});
	
	
	
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
	$("#goodNameText").validatebox({
		required:true,
		validType:'length[6,12]',
		missingMessage:'请输入商品名',
		invalidMessage:'请输入正确的商品名',
	});
	$('#goodBeforePrice').numberbox({
		required:true,
		validType:'money',
        missingMessage:'请输入价格',
		
		
	});
	$('#goodTuanPrice').numberbox({
		required:true,
		validType:'ltTo["#goodBeforePrice"]',
		missingMessage:'请输入价格',
	})
	$("#goodPhone").numberbox({
		required:true,
		validType:'telNum',
		missingMessage:'请输入电话号码',
		invalidMessage:'请输入正确的电话号码',
	});
	$('#goodCount').numberspinner({
		min:2,
		value:'2',
	});
	
	
	
	
	$('#storeName-one').combobox({
		width:'100',
		editable:false,//是否可以输入文本到字段中
		required:true,
		missingMessage:'请选择店铺名',
	});
	
	$('#selectStore-one').appendTo($('#storeName-one').combo('panel'));
	$('#selectStore-one input').click(function(){
		var v=$(this).val();//得到value值
		var s=$(this).next('span').text();//文本的值
		//设置输入的文本框内容,点击过一个后，面板内容隐藏
		$('#storeName-one').combo('setValue',v).combo('setText',s).combo('hidePanel');
		
	});
	
	
	
	
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

	
	
	
	


                      
