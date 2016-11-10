$(function(){
	//页面登录按钮换为注册的用户名
	if($.cookie("id")){
		$(".login").text($.cookie("id"));
	}
	
	$(".like_dress").mouseover(function(){
		$(this).css("border", "1px solid #989898");
	});
	$(".like_dress").mouseout(function(){
		$(this).css("border", "1px solid #fff"); 
	});
	
	//商品列表不为空的判断
	if($(".c_l_b_middle").height() > 150){
		$(this).find(".hide").css("display", "none");
	}else{
		$(this).find(".hide").css("display", "block");
	}
	
	//商品缓存到购物车判断
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
					str += "<ul class = 'list_holder'><li class = 'uli_1'><div class='uli_1_box'><span>√</span></div><a href = 'javascript:;'><img src = " + date[n].img + "/></a></li><li class = 'uli_2'><p class = 'li_p_1'><a href = 'javascript:;'>" + date[n].depict + "</a><span>货号：20120066</span></p><p class = 'li_p_2'><span>尺码 ：</span><i>M/170/92A</i></p></li><li class = 'uli_3'>" + date[n].price + "</li><li class = 'uli_4'><div class = 'minus'>-</div><input class = 'text' type = 'text' value = '1' /><div class = 'add'>+</div></li><li class = 'uli_5'>" + date[n].price2 + "</li><li class = 'uli_6'>删除</li></ul>"		}
				}
				$(".c_l_b_middle").html(str);
				
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
			}	
		});	
	}
	
	//结算点击事件
	$(".btn").click(function(){
		alert("结算成功");
	});
});