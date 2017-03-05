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

window.onload=function(){
	//获取商品编号s
	var gid =$('input[name="g_id"]').val().split(',');
	
	if(gid.length>0){
		for(var i=0;i<gid.length;i++){
			$.post('goodinfo.action',{op:'findById',g_id:gid[i]},function(data){
				var image =data[0].g_temp1.split(',')[0];//图片的路径 
				//alert(data+"data");
				$('div.gb_details').prepend('<h3>'+data[0].g_name+'</h3>'+
						'<img class="lazyload" height="460" width ="300" src="../'+image+'" visibility="hidden">'
						+'<div class="context"></div>');
			},'json');
			
		}
	}
	$('div.gb_details').append(' <p class="gs-info">以上图片仅供参考，请以商家实际提供为准</p>')
}
