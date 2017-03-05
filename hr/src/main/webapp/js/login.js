//查看团购主类型
$.post('goodtype.action',{op:'findMainMenu'},function(data){
	showMainMenu(data);
	
},'json');
//显示主菜单
function showMainMenu(data){
	//alert("显示主菜单");
	$('#navList').empty('');
	var str='';
	for(var i=0;i<data.length;i++){
		str+='<li><a href="javascript:findByGood('+data[i].t_id+')">'+data[i].t_name+'</a></li>';
	}
	$('#navList').append(str);
}








