$(function(){
	//用户名验证
	/*if($.cookie("id")){
		$(".login").text($.cookie("id"));
	}*/
	var user = /^[a-zA-Z]\w{5,11}$/; // \w小写s 可以比配字母.数字下划线
	
	$(".text").focus(function(){
		$(this).val("").addClass("border");//添加一个class名 定义text样式的边框
		$(this).parent().find("#p_id").show(); //显示p
		
	});
	$(".text").blur(function(){
		
		var value = $(this).val();
		
		if(!user.test(value)){
			$(this).parent().find("#p_id").css("display", "block").html("用户名长度要为6~12位之间的字母、数字、字符组成,(不能以数字、字符开头)");
		}else if(value == $.cookie("id")){
			$(this).parent().find("#p_id").css("display", "block").html("用户已注册");
		}else{
			$(this).parent().find("#p_id_1").css("display", "block")
;
			$(this).parent().find("#p_id").hide(); //隐藏p
		}
		
	});
	
	//密码验证
	var pword = /^\w{6,20}$/;
	$(".password").focus(function(){
		$(this).val("").addClass("border");
		$(this).parent().find("#p_id").show();
	});
	$(".password").blur(function(){
		
		var value = $(this).val();
		if(!pword.test(value)){
			$(this).parent().find("#p_id").css("display", "block").html("密码要求在6~20位之间,不建议使用纯字母、纯数字、纯符号");
		}else{
			$(this).parent().find("#p_id_1").css("display", "block");
			$(this).parent().find("#p_id").hide();
		}
		
	});
	
	//确认密码验证
	$(".password_affirm").focus(function(){
		$(this).val("").addClass("border");
		$(this).parent().find("#p_id").show();
	});
	$(".password_affirm").blur(function(){
		
		var affirmval = $(this).val();
		var value = $(".password").val();
		if(affirmval == value && affirmval != "" && value != ""){
			$(this).parent().find("#p_id_1").css("display", "block");
			$(this).parent().find("#p_id").hide();
		}else{
			$(this).parent().find("#p_id").css("display", "block").html("密码不一致,请重新输入密码");
			$(this).val("");
		}
	});
	
	//注册验证+cookie缓存
	$(".submit").click(function(){
		if($(".password_affirm").val() != "" && $(".password").val() != "" && $(".text").val() != ""){
			
			var userID = $(".text").val();
			var pWord = $(".password").val();
			//cookie缓存
			$.cookie("id", userID, {
				expires: 30, //到期时间
				path: "/" //缓存路径
			});
			$.cookie("password", pWord, {
				expires: 30, //到期时间
				path: "/" //缓存路径
			});
			
			//页面跳转
			var timer = setTimeout(function(){ //暂停2秒跳转到登录页面
				window.location.href = "../html/login.html"; //窗口位置指定
			}, 2000);
		}else{
			alert("请完善信息");
		}
	});
});
