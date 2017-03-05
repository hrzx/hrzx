//查看团购主类型
$.post('goodtype.action',{op:'findMainMenu'},function(data){
	showMainMenu(data);
	
},'json');
//显示主菜单
function showMainMenu(data){
	$('#navList').empty('');
	var str='';
	for(var i=0;i<data.length;i++){
		str+='<li><a href="javascript:findByGood('+data[i].t_id+')">'+data[i].t_name+'</a></li>';
	}
	$('#navList').append(str);
}
//查看团购信息
$.post('groupbuy.action',{op:'findByPage',page:'1',rows:'10'},function(data){
	data=data.rows;
	showGroupBuy(data);
	
},'json');


//显示团购信息
function showGroupBuy(data){
	$('ul.goods-allInd').empty('');
	var str='';
	for(var i=0;i<data.length;i++){
		var image=data[i].gd_image.split(',')[0];
		str+='<li class="good-list"><h2 class="good-title">'
			+'<a href="#" target="_blank" title="'+data[i].gd_describe+'" class="biaoa">'
			+'<strong>'+data[i].gd_name+'</strong>'+data[i].gd_describe+'</a></h2><div class="index-smalllogo">'
			+'<a class="yuy" target="_blank" href="#">免预约</a></div>'
			+'<a class="picture" target="_blank" href="#">'
			+'<img width="348" height="232" visibility="hidden"  src="../'+image+'" original="../'+image+'" rel="nofollow" class="lazyload">'
			+'</a><div class="buy-boxInd clearfix"><a class="bh buy_a" rel="nofollow" href="groupbuy.action?op=findById&gb_id='
			+data[i].gb_id+'" target="_blank" status="0">去看看</a>'
			+'<span class="num">¥'+data[i].gd_price+'</span><span class="past">价值 ¥'+data[i].gd_hottip+'</span></div></li>';
	}
	$('ul.goods-allInd').append(str);
}








