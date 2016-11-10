$(function(){
	//主页面登录按钮换为注册的用户名
	if($.cookie("id")){
		$(".login").text($.cookie("id"));
	}
	
	//轮播图开始
	var index = 0;
	var timers = null; //声明定时器为空
	$(".banner_img img").eq(index).fadeIn(1000).siblings().hide();
	//img 下标  褪色  兄弟节点  隐藏
				
	//开始定时器
	timers = setInterval(function(){
		index++;
		index %= 4;
		$(".banner_num_list li").eq(index).addClass("active").siblings().removeClass("active"); //li 下标  添加class 兄弟节点  移动class
		$(".banner_img img").eq(index).fadeIn(1000).siblings().hide();
	}, 3000);
				
	//鼠标移到目标上触发事件
	$(".banner_num_list li").mouseover(function(){
		clearInterval(timers); //关闭定时器
		$(".banner_num_list li").eq($(this).index()).addClass("active").siblings().removeClass("active");
		$(".banner_img img").eq($(this).index()).fadeIn(1000).siblings().hide();
				
		_index = $(this).index();
		//鼠标离开
		$(".banner_num_list li").mouseout(function(){
			clearInterval(timers);
			timers = setInterval(function(){
				_index++;
				_index %= 4;
				$(".banner_num_list li").eq(_index).addClass("active").siblings().removeClass("active");
				$(".banner_img img").eq(_index).fadeIn(1000).siblings().hide();
			}, 3000);
		});
	});


//二级菜单鼠标事件
	$(".b_a_l_info_1").hover(function(){
		$(this).css("background", "#FFFFFF");
		$(".b_a_l_info_1 h2 a").css("color", "#3B2C33");
		$(".b_a_l_info_1 p a").css("color", "#3B2C33");
	},function(){
		$(this).css("background", "#3B2C33");
		$(".b_a_l_info_1 h2 a").css("color", "#FFFFFF");
		$(".b_a_l_info_1 p a").css("color", "#FFFFFF");
	});


	$(".banner_above_left").find(".b_a_l_info_2").hover(function(){
		$(this).css("background", "#FFFFFF");
		$(this).find($("h2")).find($("a")).css("color", "#3B2C33");
		$(this).find(".b_a_l_second").css("display", "block");
	},function(){
		$(this).css("background", "#3B2C33");
		$(this).find($("h2")).find($("a")).css("color", "#FFFFFF");
		$(this).find(".b_a_l_second").css("display", "none");
	});


	$(".b_a_l_second").hover(function(){
		$(this).find(".b_a_l_second").css("display", "block");
		$(this).parent(".b_a_l_info_2").css("background", "#FFFFFF");
	},function(){
		$(this).find(".b_a_l_second").css("display", "none");
	});
	
	
	$.ajax({
		url:"json/erji.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date[0].obj.length; i++){
				str += "<div><a href = 'html/commodity_list.html'>" + date[0].obj[i].title + "</a><span>" + date[0].obj[i].nr + "</span></div>"
			}
			$(".b_a_l_second").html(str);
		}
	});


	$.ajax({
		url:"json/broadcast.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date[0].obj.length; i++){
				str += "<li><span>" + date[0].obj[i].time + "</span><a href = 'html/commodity_list.html'><img src = " + date[0].obj[i].img + "/></a><p>" + date[0].obj[i].zb + "</p><div><a href = 'html/commodity_list.html'>" + date[0].obj[i].depict + "</a><i>" + date[0].obj[i].price + "</i></div></li>"  
			}
			$(".broadcast_right ul").html(str);
			
			//点击轮播(热播商品)
			$('.right').click(function(){
				$(".broadcast_right").find("ul").animate({left: -983}, 1000)
			});
			$('.left').click(function(){
				$(".broadcast_right").find("ul").animate({left: 0}, 1000)
			});
		}
	});
	
	
	$(".broadcast_right").hover(function(){
		$(this).find(".left").css("display", "block");
		$(this).find(".right").css("display", "block");
	},function(){
		$(this).find(".left").css("display", "none");
		$(this).find(".right").css("display", "none");
	});
	
	
	$.ajax({
		url:"json/hot_sell.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date.length; i++){
				str += "<li><a href = 'html/commodity_list.html'><img src = " + date[i].img + "/></a><div><a href = 'html/commodity_list.html'>" + date[i].depict + "</a><p>" + date[i].price + "</p><p class = 'piece'>" + date[i].piece + "</p></div></li>"
			}
			$(".hot_sell_right ul").html(str);	
		}
	});
	
	
	$.ajax({
		url:"json/floor.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date.length; i++){
				str += "<li><a href = 'html/commodity_list.html'><img src = " + date[i].img + "/></a><p class = 'p_depict'><a href = 'html/commodity_list.html'>" + date[i].depict + "</a></p><p class = 'p_price'>" + date[i].price + "</p></li>"
			}
			$(".ground_floor_right ul").html(str);
		}
	});
});



























