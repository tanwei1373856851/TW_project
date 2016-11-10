$(function(){
	//页面登录按钮换为注册的用户名
	if($.cookie("id")){
		$(".login").text($.cookie("id"));
	}
	
	//商品缓存到详情页判断
	var str = $.cookie();
	var arr = JSON.stringify(str).split(',');
	if (arr.length > 0) { //当登录注册了  商品的长度要大于2才能得到缓存的商品
		var newgoods = arr[arr.length-1].split('}');
		//console.log(newgoods[0].split('"')[3]);
		var idNum = parseInt(newgoods[0].split('"')[3]);
		if (idNum < 10) {
			var num = '0' + (idNum+1);
		}
		
		$.ajax({
		url:"../json/commodity_list_1.json",
		type:"GET",
			success:function(date){
				var str = "";
				for(var i = 0; i < date.length; i++){
					if (date[i].id == num) {
					var n = i;
					}
				}
				$(".span_1").text(date[n].depict);
				$(".p_w_b_r_top h2").text(date[n].depict);
				$(".p_w_b_l_top .banner").attr('src',date[n].img);
				$(".p_w_b_l_top #banner").attr('src',date[n].img2);
				$(".p_w_b_l_top_1 .banner_1").attr('src',date[n].img);
				$(".p_w_b_l_top_1 #banner_1").attr('src',date[n].img2);
				$(".img_1").attr('src',date[n].img);
				$(".img_2").attr('src',date[n].img2);
				$("#li_i").text(date[n].price2);
			}
		});
	} 
	
	$.ajax({
		url:"../json/floor_2.json",
		type:"GET",
		success:function(date){
			var str = "";
			for(var i = 0; i < date.length; i++){
				str += "<li><a href = '#'><img src =" + date[i].img + "/></a><p><a href = '#'>" + date[i].depict + "</a></p><i>" + date[i].price + "</i></li>"
			}
			$(".match_whole_bottom ul").html(str);
			$(".c_i_l_bottom ul").html(str);
		}
	});
	
	//放大镜
	$(".img_1").click(function(){
		$(".p_w_b_l_top").find("img").eq(0).show();
		$(".p_w_b_l_top").find("img").eq(1).hide();
		$(".p_w_b_l_top_1").find("img").eq(0).show();
		$(".p_w_b_l_top_1").find("img").eq(1).hide();
	});
	$(".img_2").click(function(){
		$(".p_w_b_l_top").find("img").eq(1).show();
		$(".p_w_b_l_top").find("img").eq(0).hide();
		$(".p_w_b_l_top_1").find("img").eq(1).show();
		$(".p_w_b_l_top_1").find("img").eq(0).hide();
	});
	
	//放大镜效果
	var multiple = $(".p_w_b_l_top_1").width() / $(".mask").width();
	//multiple 倍数
	$(".p_w_b_l_top").mousemove(function(evt){ //鼠标移动
		$(".mask").css("display", "block");
		$(".p_w_b_l_top_1").css("display", "block");
		//获取坐标	  小块 mask
		var iX = evt.pageX - $(this).offset().left - $(".mask").width()/2,
			iY = evt.pageY - $(this).offset().top - $(".mask").height()/2,
			MaxX = $(".p_w_b_l_top").width() - $(".mask").width(),
			MaxY = $(".p_w_b_l_top").height() - $(".mask").height();
			
		//判断最大最小值
		iX = iX > 0 ? iX : 0;
		iX = iX < MaxX ? iX : MaxX;
		iY = iY > 0 ? iY : 0;
		iY = iY < MaxY ? iY : MaxY;
				
		$(".mask").css({left: iX + "px", top: iY + "px"});
		$("#none").css({marginLeft: -multiple * iX + "px", marginTop: -multiple * iY + "px"});
	});
	$(".p_w_b_l_top").mouseout(function(){ //鼠标离开
		$(".mask").css("display", "none");
		$(".p_w_b_l_top_1").css("display", "none");
	});
	
	//尺码样式变化
	$(".middle_1 ul li").click(function(){
		$(this).css({"background": "#BF0200", "color": "#FFFFFF"}).siblings().css({"background": "#fff", "color": "#333333"})
	});
	
	//数量递增递减
	$(".minus").click(function(){
		var num = parseInt($(".text").val()); //取整
		num -= 1;
		if(num <= 0){
			num = 1;
			alert("数量不能小于1");
		}
		$(".text").val(num);
	});
	$(".add").click(function(){
		var num = parseInt($(".text").val());
		num += 1;
		if(num >= 10){
			num = 10;
			alert("数量不能大于10");
		}
		$(".text").val(num);
	});
	
	
});
