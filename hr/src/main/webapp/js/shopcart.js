$(function(){
	showprice();
})
function showprice(){
	var num =$('tbody>tr').size();
	var totalprice=0;
	var price=0;
	for(var i=0;i<num;i++){
		totalprice =$('.yprice').eq(i).text().substring(1);
		price=Number(totalprice)+Number(price);
	}
	$('#totalPrice').text('￥'+price);
}
//清空购物车
$('#nextbtn1').click(function(){
		$.post('member.action',{op:'aaaaa'},function(data){
			if(data==1){
				alert("清空成功")
			}else{
				alert("清空失败")
			}
		});
		$('tbody').empty('');
		$('#totalPrice').text('￥'+0);
});
//清除某一个订单
$('#nextbtn3').click(function(){
	$('.ck:checked').each(function(i){
		var gb_id=$(this).attr("name");
		var size=$('tbody>tr').size();
		for(var j=0;j<size;j++){
			var id=$('.ck').eq(j).attr("name");
			if(id==gb_id){
				$.post('member.action',{op:'aaaaa',id:gb_id},function(data){
					if(data==1){
						$('tbody').datagrid('reload');;
						alert("清空成功")
					}else{
						alert("清空失败")
					}
				});
			}
			
		}
	});

});
/*var totalprice=0;
var price=0;
$('.ck:checked').each(function(i){
	var gb_id=$(this).attr("name");
	var size=$('tbody>tr').size();
	for(var j=0;j<size;j++){
		var id=$('.ck').eq(j).attr("name");
		if(id==gb_id){
			totalprice =$('.yprice').eq(j).text().substring(1);
			price=Number(totalprice)+Number(price);
			alert(totalprice+"totalprice"+"price"+price);
			$.post('member.action',{op:'findmoney',price:price},function(data){		
				if('1'==data){		
						showprice();
						$.post('member.action',{op:'aaaaa',id:id},function(data){
							alert(data+"data");
							if(data==1){
								alert("支付成功");
							}else if(data==0){
								alert("请再买些东西吧");
							}else if(data==2){
								alert("余额不足！支付失败");
							}
						});
					
				}else{
					alert("支付失败")
					
				}
					
				},'json');
		}
		
	}
});*/
//购买
$('#nextbtn0').click(function(){
	var totalprice =$('#totalPrice').eq(0).text().substring(1);
	$.post('member.action',{op:'findmoney',totalprice:totalprice},function(data){		
	if('1'==data){		
		$('tbody').empty('');
			$('#totalPrice').text('￥'+0);
			$.post('member.action',{op:'aaaaa'},function(data){
				//alert(data+"data");
				if(data==1){
					alert("支付成功");
				}else if(data==0){
					alert("请再买些东西吧");
				}else if(data==2){
					alert("余额不足！支付失败");
				}
			});
		
	}else{
		$.messager.show({
			title:'温馨提示',
			msg:'支付失败',
			timeout:5000,	
			showType:'slide'
		});
		
	}
		
	},'json');
});
function sure(){
	//alert(1);
	$('.ck:checked').each(function(i){
		var gb_id=$(this).attr("name");
		//alert("gb_id:"+gb_id);
		var size=$('tbody>tr').size();
		for(var j=0;j<size;j++){
			var id=$('.ck').eq(j).attr("name");
			//alert("di:"+id);
		}
	});
}
//输入购买数量
$('.yahei').each(function(i){
	$(this).blur(function(){
		var number=$(this).val();//获取文本框中的值
		//alert(number+"number");
		if(isNaN(number)){
			$(this).val(1);
			var gd_price=$('.price1').eq(i).text().substring(1);
			$('.yprice').eq(i).text(gd_price).prepend('￥');
			showprice();
		}else{
			/*$.post('member.action',{op:'bbb',number:number},function(data){
				if(data==1){
					alert("清空成功")
				}
			});*/
			var gd_price=$('.price1').eq(i).text().substring(1);
			$('.yprice').eq(i).text(number*gd_price).prepend('￥');
			showprice();
		}
	});
});
