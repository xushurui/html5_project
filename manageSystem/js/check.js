$(document).ready(function() {
	$('#save').bind("click",function(){
		/*活动名*/
		var activityName=$('#activityName');
		var name=$('#activityName').val();
		var nameRexg=/^.{8,16}$/;
		
		/*活动时间*/
		var validTimeOne=$('#vaildTime-1');
		var validTimeTwo=$('#vaildTime-2');
		var timeOne=validTimeOne.val();
		var timeTwo=validTimeTwo.val();
		var timeRexg=/^\d{4}-\d{1,2}-\d{1,2}/;
		
		/*满额减*/
		//金额
		var moneyShow=$('#money').is(":visible");
		var moneyNum=$('#moneyNum').val();
		var moneyNumOne=$('#moneyNum-1').val();
		//次数
		var numOne=$("#num-1").val();
		var numTwo=$("#num-2").val();
		var numRexg=/^[0-9].*$/;
		//活动标签
		var nameTag=$("#activity-tag-name").val();
		var nameTagRexg=/^[\u4e00-\u9fa5]{2,5}$/;
		
		/*限时折扣*/
		//折扣
		var timeDiscountShow=$('#timeDiscount').is(":visible");
		var timeDiscountNum=$("#discountNum-timeDiscount").val();
		var timeDiscountNumRexg=/^[1-9]$/;
		var timeDiscountTag=$("#activity-tag-name-timeDiscount").val();
		var timeDiscountNameTagRexg=/^[\u4e00-\u9fa5]{2,5}$/;
		var num=$("#num").val();
		var timeDiscoutNumRexg=/^[0-9].*$/;
		
		/*折扣*/
		var discountShow=$('#discount').is(":visible");
		var discountMoneyNumOne=$('#moneyNum-discount-1').val();
		var discountMoneyNumTwo=$('#moneyNum-discount-2').val();
		var discountMoneyNumThree=$('#moneyNum-discount-3').val();
		var discountMoneyNumFour=$('#moneyNum-discount-4').val();
		var discountMoneyRexg=/^[0-9].*$/;
		//折扣
		var discountNumOne=$("#num-one-discount").val();
		var discountNumTwo=$("#num-two-discount").val();
		alert("dis"+discountNumTwo);
		var discountNumRexg=/^[1-9]$/;
		//标签
		var discountTag=$("#activity-tag-name-discount").val();
		var discountNameTagRexg=/^[\u4e00-\u9fa5]{2,5}$/;
		
		
		
		
		/*
		 * 活动名称的判断
		 * 判断是否为空
		 * 名称的格式是否正确
		 * 
		 */
		
		if(name=="")
		  alert("活动名称不能为空");
		else if(!nameRexg.test(name))
		  alert("活动名称字符串长度不够");
		 else{
		 	
		 }
		

		 
		/*
		 * 活动时间的判断
		 * 判断是否为空
		 * 时间的格式是否正确
		 * 开始时间不能大于结束时间
		 */
		if(timeOne==""||timeTwo=="")
		  alert("时间不能为空")
		else if(!timeRexg.test(timeOne)||!timeRexg.test(timeTwo))
		  alert("时间输入的格式不正确");
		else{
		  var d1=new Date(timeOne.replace(/\-/g,"\/"));
		  var d2=new Date(timeTwo.replace(/\-/g,"\/"));
		  if(d1>=d2){
		  	  alert("开始时间不能大于结束时间！");  
		  }
		}
		
		
		/*
		 * 活动类型的选择
		 */
		if(!moneyShow&&!timeDiscountShow&&!discountShow)
		   alert("请选择活动类型");
		
		/*
		 * 满额减
		 * 判断是否为空，是否为数字
		 * 消费金额的判断以及和减的金额数的比较
		 * 享有次数复选框是否点击以及次数之间的比较：所有次数不能小于单个平台的次数
		 */
		if(moneyShow){
			//复选框
			var obj=$('input[name="countNumber"]');
			var s=new Array();
			for(var i=0;i<obj.length;i++){
			   if(obj[i].checked){
			     s.push(obj[i].value);
			    }
			 }
			
			
			if(moneyNum==""||moneyNumOne=="")
			  alert("金额不能为空");
			if(!numRexg.test(moneyNum)){
			  alert("金额必须为正数");
			}
			if(!numRexg.test(moneyNumOne)){
				alert("金额必须为正数");
			}
			if(numRexg.test(moneyNum)&&numRexg.test(moneyNumOne)){
			   if(parseInt(moneyNumOne)>parseInt(moneyNum))
			  alert("立减值不能大于消费额");				
			}
			  
			if(s.length==0)
			  alert("请选择活动限制")
			else if(s.length==1){
				
				if(s[0]==0){
					
					if(numOne=="")
					  alert("单个门店可享受的次数不能为空");
					else if(numRexg.test(numOne))
					  alert("请输入数字");
				}
				if(s[1]==1){
					if(numTwo=="")
					 alert("所有门店可享受的次数不能为空");
					else if(numRexg.test(numTwo))
					 alert("请输入数字");
				}	  
			}
			else{
				if(numRexg.test(numOne)||numRexg.test(numTwo)){
					alert("请输入数字");
				}
				else if(parseInt(numOne)>parseInt(numTwo)){
					alert("所有平台可享有的次数必须大于单个平台的");
				}else{}
			}
			
			
			if(nameTag=="")
			   alert("活动标签不能为空");
			else if(!nameTagRexg.test(nameTag)){
				alert("活动标签输入不正确");
			}
			  
	}
		
		
		
		/*
		 * 限时折扣
		 * 判断折扣，活动标签是否为空，格式是否正确
		 * 判断单选框的选择，做对应的操作
		 */
		if(timeDiscountShow){
			//判断折扣
			if(timeDiscountNum=="")
			  alert("折扣不能为空");
			 else if(!timeDiscountNumRexg.test(timeDiscountNum))
			  alert("1到9折之间");
			  
			  
			//活动标签
			if(timeDiscountTag=="")
			   alert("活动标签不能为空");
			else if(!timeDiscountNameTagRexg.test(timeDiscountTag))
			   alert("活动标签格式不正确");
			   
			   
			 //复选框
			 var obj=$('input[name="count"]');
			 var s=new Array();
			for(var i=0;i<obj.length;i++){
			   if(obj[i].checked){
			     s.push(obj[i].value);
			    }
			 }
			if(s[0]==1){
				if(num=="")
				alert("请输入次数");
				else if(!timeDiscoutNumRexg.test(num))
				alert("输入的格式不正确");
			}
			
		}
		
		
		
		
		/*
		 * 折扣
		 * 
		 */
		
		
		if(discountShow){
			var item=(discountMoneyNumOne==""||discountMoneyNumTwo==""||discountMoneyNumThree==""||discountMoneyNumFour=="");
			var one=discountMoneyRexg.test(discountMoneyNumOne);
			var two=discountMoneyRexg.test(discountMoneyNumTwo);
			var three=discountMoneyRexg.test(discountMoneyNumThree);
			var four=discountMoneyRexg.test(discountMoneyNumFour);
			if(item)
			   alert("金额不能为空");
			else{
			if(!one)
				alert("金额必须为正数");
			if(!two)
				alert("金额必须为正数");
			if(!three)
				alert("金额必须为正数");

			if(!four)
			   alert("金额必须为正数");
			if(one&&two){
				if(discountMoneyNumOne<discountMoneyNumTwo)
				   alert("减金额数要小于消费数额");
			}
			if(three&&four){
				if(discountMoneyNumThree&&discountMoneyNumFour)
				   alert("减金额数要小于消费数额");
			}
			}
			
			if(discountNumOne=="")
			   alert("折扣不能为空");
			 else{
			if(!discountNumRexg.test(discountNumOne))
			   alert("1到9折之间");
			}
			
			if(discountNumTwo=="")
			   alert("折扣不能为空");
			else{
				if(!discountNumRexg.test(discountNumTwo))
				  alert("1到9折之间");
			}
			
			//复选框
			 var obj=$('input[name="activityControl"]');
			 var s=new Array();
			 alert()
			for(var i=0;i<obj.length;i++){
			   if(obj[i].checked){
			     s.push(obj[i].value);
			     alert(obj[i].value)
			    }
			 }
			
			if(s.length==0)
			  alert("请选择活动限制")
			else if(s.length==1){
				
				if(s[0]==0){
					
					if(discountNumOne=="")
					  alert("单个门店可享受的次数不能为空");
					else if(discountNumRexg.test(discountNumTwo))
					  alert("请输入数字");
				}
				if(s[1]==1){
					if(discountNumTwo=="")
					 alert("所有门店可享受的次数不能为空");
					else if(discountNumRexg.test(discountNumTwo))
					 alert("请输入数字");
				}	  
			}
			else{
				if(discountNumRexg.test(discountNumOne)||discountNumRexg.test(discountNumTwo)){
					alert("请输入数字");
				}
				else if(parseInt(discountNumOne)>parseInt(discountNumTwo)){
					alert("所有平台可享有的次数必须大于单个平台的");
				}else{}
			}
			
		    
		}
		
	});
	
	
	
	

});