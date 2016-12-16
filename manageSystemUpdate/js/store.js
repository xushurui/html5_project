$(function(){
	//审核列表的情况
	var storeStates=[
		{statesid:'01',name:'通过'},
		{statesid:'02',name:'未通过'},
		{statesid:'03',name:'待审核'},
		];
	//审核列表的情况
	var sProvince=[
	{provinceid:'01',name:'浙江'},
	{provinceid:'02',name:'江苏'},
	{provinceid:'03',name:'安徽'},
	];
	
	var sCity=[
	{cityid:'01',name:'浙江'},
	{cityid:'02',name:'江苏'},
	{cityid:'03',name:'安徽'},
	];
	
	
	
	
	
	
	
	
	
	
	var editFlag = undefined;//设置一个编辑标记
	
	//添加，删除，编辑，搜索事件
	sObj={
		sEditRow:undefined,//没有数据
//		search:function(){
//			$("#good").datagrid('load',{
//				goodName:$.trim($('input[name="goodName"]').val()),
//				storeName:$.trim($('input[name="storeName"]').val()),
//				startTime:$.trim($('input[name="startTime"]').val()),
//				endTime:$.trim($('input[name="endTime"]').val()),
//			}); 
//		},
		sAdd:function(){
			//末尾追加一行
//			$('#good').datagrid('appendRow',{
//				ID:'1',
//				
//			});
   			if(this.editRow==undefined){
			$('#store').datagrid('insertRow',{
				index:0,
				row:{
					
				},
			});
			//将第一行变成可编辑的状态
			$('#store').datagrid('beginEdit',0);
			this.editRow=0;
			}
	     },
	    
	    //得到编辑的行的下标
	    sGetRowIndex: function (target){
		var tr=$(target).closest('tr.datagrid-row');
		return parseInt(tr.attr('datagrid-row-index'));
        },
        
        //编辑
	    sEditrow:function (target){
		$("#store").datagrid('beginEdit',sObj.sGetRowIndex(target));
       
	    },
	   
	   //删除
	   sDeleterow:function (target){
		$.messager.confirm('确认','你确定删除嘛',function(r){
			if(r){
				//删除当前这一行this.editRow
				$('#store').datagrid('deleteRow',sObj.sGetRowIndex(target));
			}
		});
	    },
	    
	    
	    
	    //保存
	    sSaverow: function (target){
		$('#store').datagrid('endEdit',sObj.sGetRowIndex(target));
	    },
	    
	    //取消
	    sCancelrow:function (target){
	    	this.editRow=undefined;
		$('#store').datagrid('rejectChanges',sObj.sGetRowIndex(target));
	    }
	  };
	$('#store').datagrid({
		width:1070,
		url:'store.json',//数据
		title:'商店列表',
		inconCls:'icon-search',
		rownumbers:true,
		striped:true,//斑马线效果
		columns:[[
		   {
			field:'ck',
			checkbox:true,
			
		    },{
		      field:'storeName',
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
		      field:'storeUser',
			  title:'商家名',
			  sortable:true,
			  align:'center',
			  width:100,
			  editor:{
			  	type:'validatebox',
			  	options:{
			  		required:true,
			  		validType:'length[6,12]',
			  		missingMessage:'请输入商家名',
			  		invalidMessage:'请输入正确的商家名',
			  	},
			  },
			},{
		      field:'storePhone',
			  title:'联系电话',
			  sortable:true,
			  align:'center',
			  width:100,
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
		      field:'stroreStartDate',
			  title:'注册时间',	
			  sortable:true,
			  align:'center',
			  width:100,
			  editor:{
			  	type:'datebox',
			  	required:true,
			  },
			},{
		      field:'storeConfirmDate',
			  title:'审核时间',	
			  sortable:true,
			  align:'center',
			  width:100,
			  editor:{
			  	type:'datebox',
			  	required:true,
			  },
			},{
		      field:'storeAddress',
			  title:'商店地址',
			 
			  sortable:true,
			  align:'center',
			  width:350,
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
			  		data:storeStates,
			  		required:true
			  	}
			  },
			},{
				field:'opt',
				title:'操作',
				width:80,
				align:'center',
            		formatter:function(value,row,index){  
                    if(row.editing){
                    	 var s = '<a href="javascript:void(0)" onclick="sObj.sSaverow(this)">保存</a> ';
					 var c = '<a href="javascript:void(0)" onclick="sObj.sCancelrow(this)">取消</a>';
					 return s+c;
                    }else{
                    	 var e = '<a href="javascript:void(0)" onclick="sObj.sEditrow(this)">编辑</a> ';
					 var d = '<a href="javascript:void(0)" onclick="sObj.sDeleterow(this)">删除</a>';
					 return e+d;
                    }
                 },
            },
		
		
		
		]],

        toolbar:'#stb',
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
		  	sObj.editRow=undefined;
		  	$(this).datagrid('refreshRow',index);//改变行值
		  },
		  onCancleEdit:function(index,row){
		  	row.editing=false;
		  	$(this).datagrid('refreshRow',index);//改变行值
		  },
		  //rowIndex:点击行的索引值，该索引从0开始
		  
		
		  
		  
		  
		  
		  
		  //双击也可以编辑
		  onDblClickRow:function(rowIndex,rowData){
//		  	console.log(rowIndex);//打印出所选行的数据
			if(sObj.editRow!=undefined){
				$('#manager').datagrid('endEdit',sObj.editRow);
			}
  			if(obj.editRow==undefined){
			$('#manager').datagrid('beginEdit',rowIndex);//编辑数据
			sObj.editRow=rowIndex;//将当前的行的索引给该全局变量
			}
		  },
		 onLoadSuccess:function(data){
		 	 for(var i=0; i<$(this).datagrid('getRows').length; i++){
             $(this).datagrid('mergeCells',{
             index: i,
            field: 'storeAddress',
            width : 100, 
             colspans: 4,
           });
		 }},
       
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
	$('#storeUser').validatebox({
		required:true,
		validType:'length[2,10]'

	});
	
	$('#storeLoginTime').datebox({
		
	});
	$('#storeConfirmTime').datebox({
		
	});
	
	$('#storeSearch').linkbutton({
		
		text:'搜索',
		iconCls:'icon-search',
		
	});
	
	
	$('#storeRemove').linkbutton({
		plain:'true',
		text:'删除',
		iconCls:'icon-remove'
	});
	$('#storeEdit').linkbutton({
		plain:'true',
		text:'编辑',
		iconCls:'icon-edit'
		
		
	});
	
	
	//添加窗口
	$('#w').window({
		
	});
	
	
	
	});