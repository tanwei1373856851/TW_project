$(function(){
	
	//登录用户名+cookie缓存
	$(".text").focus(function(){
		$(this).addClass("border"); //添加一个class名 定义text样式的边框
		//应用cookie缓存的用户名
		if($.cookie("id")){
			$(this).val($.cookie("id"));
		}
	});
	$(".text").blur(function(){
		$(this).removeClass("border"); //移除添加的class名 边框去掉
	});
	
	//登录密码
	$(".password").focus(function(){
		$(this).addClass("border");
	});
	$(".password").blur(function(){
		$(this).removeClass("border");
	});
	
	//验证码随机验证
	function create(){ //create创造,创建	创建验证码
		var captcha = ""; //Captcha 验证码
		var length = 4; //验证码的长度
		for(var i = 0; i < length; i++){
			var num = Math.floor(Math.random()*75 + 48); //123 取到122
			//48——0,65——A,97——a 122——z
			if((num >= 58 && num <= 64) || (num >= 91 && num <= 96)){
				//58到64和91到96不是转码对象
				i--;
			}else{
				var code = String.fromCharCode(num);
				captcha += code;
			}
		}
		return captcha; //返回得到的值
	}
	$(".code_2").html(create());
	
	$(".code_4").find("i").click(function(){ //点击刷新验证码
		$(".code_2").html(create());
	});
	
	//输入验证码
	$(".code_1").focus(function(){
		$(".code_3").css("display", "none");
	});
	$(".code_1").blur(function(){
		//将验证码大写转换为小写判断  toLowerCase
		if($(".code_2").html().toLowerCase() == $(this).val().toLowerCase()){
			$(this).css("color", "green");
			$(".hint").css("display", "none");
		}else{
			$(".hint").css("display", "block");
			$(this).css("color", "red");
			$(".code_1").val("");
		}
	});
	
	//登录按钮判断
	$(".submit").click(function(){
		
		var userID = $(".text").val();
		var pWord = $(".password").val();
		if(userID == $.cookie("id") && pWord == $.cookie("password") && $(".code_1").val() != ""){
			var timer = setTimeout(function(){ //暂停2秒跳转到首页 页面
				window.location.href = "../index.html"; //窗口位置指定
			}, 2000);
		}else{
			alert("密码或验证码输入错误");
		}
	});
});
