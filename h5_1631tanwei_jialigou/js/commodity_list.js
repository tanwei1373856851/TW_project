$(function(){
	//页面登录按钮换为注册的用户名
	if($.cookie("id")){
		$(".login").text($.cookie("id"));
	}
	
	$.ajax({
		url:"../json/commodity_list.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date.length; i++){
				str += "<li><h3><a href = '#'>" + date[i].title + "</a></h3><span>" + date[i].content + "</span></li>"
			}
			$(".c_l_w_l_whole ul").html(str);
		}
	});

	
	$(".c_l_w_l_w_wrapper").click(function(){
		//console.log($(this).siblings().css("display")=="none")
		
		if($(this).siblings().css("display")=="none"){
			$(this).siblings().css("display", "block");
		}else{
			$(this).siblings().css("display", "none");
		}
		
	});
	
	$.ajax({
		url:"../json/floor_2.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date.length; i++){
				str += "<li><a href = '#'><img src =" + date[i].img + "/></a><p>" + date[i].depict + "</p><i>" + date[i].price + "</i></li>"
			}
			$(".c_l_w_l_bottom      ").html(str);
		}
	});
	
	$.ajax({
		url:"../json/classify.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date.length; i++){
				str += "<p>" + date[i].title + "<i><a href = '#'>" + date[i].all + "</a></i>" + date[i].content + "</p>"
			}
			$(".c_l_w_r_top").html(str);
		}
	});
	
	$.ajax({
		url:"../json/commodity_list_1.json",
		type:"GET",
		success:function(date){
			var str = "";   
			for(var i = 0; i < date.length; i++){
				str += "<li><a href = 'javascript:;'><img src =" + date[i].img + "/></a><div class = 'box_id'><a href = 'javascript:;'>" + date[i].depict + "</a><p class = 'box_id_left'>" + date[i].price + "</p><p class = 'box_id_right'>" + date[i].piece + "</p><input class = 'btn_1' type = 'button' value =" + date[i].btn_1 + "><input class = 'btn_2' type = 'button' value =" + date[i].btn_2 + "></div></li>"
			}
			$(".c_l_w_r_bottom ul").html(str);
		}
	});
	
	//跳转购物车按钮点击事件  cookie缓存
	$(".c_l_w_r_bottom ul").delegate('.btn_1', 'click', function(){
		var index =  $(this).parents('li').index();
		$.cookie('index' + index, index, {
			expires: 30, //到期时间
			path: "/" //缓存路径
		});
		window.location.href = 'shopping_cart.html';
	})
	
	//跳转详情页按钮点击事件  cookie缓存
	$(".c_l_w_r_bottom ul").delegate('.btn_2', 'click', function(){
		var index =  $(this).parents('li').index();
		$.cookie('index' + index, index, {
			expires: 30, //到期时间
			path: "/" //缓存路径
		});
		window.location.href = 'details_page.html';
	})
});

























