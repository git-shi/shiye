<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:60:"E:\jielian\public/../application/index\view\index\index.html";i:1559701346;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MES考勤管理系统</title>
    <link rel="shortcut icon" href="/index/i/favicon.png" type="image/x-ico">
    
    <!--<script src="/index/js/jquery-3.1.0.min.js"></script>-->
    <script type="text/javascript" src="/index/js/jquery-3.1.0.min.js"></script>
    <style>
        body{margin: 0;padding: 0;overflow-y: hidden}
        .left{
            float: left;
            width: 65%;
            height: 40rem;
        }
        .right{
            float: left;
            width: 35%;
        }
        .right_tit{
            color: #242a30;
            font-size: 28px;
            margin-top: 15%;
        }
        .right_login{
            text-align: center;
            line-height: 40px;
            margin-top: 7%;
        }
        .text{
            width: 60%;
            height: 20px;
            border-radius: 5px;
            border: 1px solid #ccd0d4;
            font-size: 12px;
            padding: 10px 16px;
            outline:none
        }
        .text:hover{
            border-color: #6b6b6b;
        }
        .top{
            margin-top: 5%;
        }
        .select{
            width: 67%;
            height: 41px;
            border-radius: 5px;
            line-height: 20px;
            padding-left: 5px;
            font-size: 12px;
            color: #555;
            border: 1px solid #ccd0d4;
            outline:none
        }
        .btn{
            width: 67%;
            height: 41px;
            border-radius: 5px;
            background: #348fe2;
            font-size: 18px;
            font-weight: 300;
            border: none;color: #FFFFFF;
        }
        .btn:hover{
            background:#7c9dbb ;
        }
        .bottom{
            width: 60%;
            text-align: center;
            margin: 0 auto;
            margin-top: 5%;
            font-size: 13px;
            color: #2d353c !important;
            padding-bottom: 3%;
            border-bottom: 1px solid #e4e5e6;
        }
    </style>
</head>
<body onkeydown="keyLogin();">
<div>
    <div style="width: 100%">
        <div class="left">
            <!--<img src="/index/i/Bg_log.png" style="width: 100%;height: 98%;margin: 0;padding: 0">-->
            <img src="../public//i/Bg_log.png" style="width: 100%;height: 98%;margin: 0;padding: 0">
        </div>
        <div class="right">
            <div>
                <div class="right_tit" style="text-align: center">MES考勤系统</div>
                <div class="right_login">
                    <div class="top"><input id="user" class="text" type="text" placeholder="用户账号" onblur="checkuser()" oninput="nbsp('user')"></div>
                    <div class="top"><input id="pass" class="text" type="password" placeholder="登录密码" onblur="checkpass()"></div>
                    <div class="top">
                        <select class="select" id="selects">
                            <option disabled="disabled" selected="selected">选择产线</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="A3">A3</option>
                            <option value="A4">A4</option>
                            <option value="A5">A5</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="B3">B3</option>
                            <option value="B4">B4</option>
                            <option value="B5">B5</option>
                            <option value="B6">B6</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>
                            <option value="C3">C3</option>
                            <option value="C4">C4</option>
                            <option value="C5">C5</option>
                            <option value="D1">D1</option>
                            <option value="D2">D2</option>
                            <option value="D3">D3</option>
                            <option value="D4">D4</option>
                            <option value="D5">D5</option>
                            <option value="D6">D6</option>
                            <option value="D7">D7</option>
                            <option value="E1">E1</option>
                            <option value="E2">E2</option>
                            <option value="E3">E3</option>
                            <option value="E4">E4</option>
                            <option value="E5">E5</option>
                            <option value="E6">E6</option>
                            <option value="F1">F1</option>
                            <option value="F2">F2</option>
                            <option value="F3">F3</option>
                            <option value="F4">F4</option>
                            <option value="F5">F5</option>
                            <option value="YA1">YA1</option>
                            <option value="YA2">YA2</option>
                            <option value="YA3">YA3</option>
                            <option value="YA4">YA4</option>
                            <option value="YA5">YA5</option>
                            <option value="YB1">YB1</option>
                            <option value="YB2">YB2</option>
                            <option value="YB3">YB3</option>
                            <option value="YB4">YB4</option>
                            <option value="YB5">YB5</option>
                            <option value="YB6">YB6</option>
                            <option value="YC1">YC1</option>
                            <option value="YC2">YC2</option>
                            <option value="YC3">YC3</option>
                            <option value="YC4">YC4</option>
                            <option value="YC5">YC5</option>
                            <option value="YD1">YD1</option>
                            <option value="YD2">YD2</option>
                            <option value="YD3">YD3</option>
                            <option value="YD4">YD4</option>
                            <option value="YD5">YD5</option>
                            <option value="YD6">YD6</option>
                            <option value="YD7">YD7</option>
                            <option value="YE1">YE1</option>
                            <option value="YE2">YE2</option>
                            <option value="YE3">YE3</option>
                            <option value="YE4">YE4</option>
                            <option value="YE5">YE5</option>
                            <option value="YE6">YE6</option>
                            <option value="YF1">YF1</option>
                            <option value="YF2">YF2</option>
                            <option value="YF3">YF3</option>
                            <option value="Yf4">YF4</option>
                            <option value="YF5">YF5</option>
                        </select>
                    </div>
                    <div class="top"><input id="btn" class="btn" type="button" value="登 录" onclick="checkAll()"></div>
                    <!--<div class="top"><input           class="btn" type="button" value="测 试" onclick="checkAlll()"></div>-->
                </div>
                <div class="bottom">
                    © 版权所有
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script>
    //获取屏幕分辨率
    var _width = $(window).width();
    if(_width > 1366){
        alert("分辨率为"+_width)
    }else if(_width == 1920){
        alert("当前分辨率为"+_width)
    }
    <!--去除输入框前后空格-->
    function tim(s){
        return s.replace(/(^\s*)|(\s*$)/g, "").replace(/(^\s*)|(\s*$)/g, "");
    }
    function nbsp(n){  //去除前后空白直接调用此方法即可。   n：为输入框的id名
        $("#"+n).val(tim($("#"+n).val()));
    }
    function checkuser(){
        var user = $("#user").val();
        if(user == ""){
            $("#user").css("border-color","red");
            return false;
        }else {
            $("#user").css("border-color","#ccd0d4");
            return true;
        }
    }
    function checkpass(){
        var pass = $("#pass").val();
        if(pass == ""){
            $("#pass").css("border-color","red");
            return false;
        }else {
            $("#pass").css("border-color","#ccd0d4");
            return true;
        }
    }
    function checkAll(){
        var apiurl = "218.108.45.6:1112";
        var user = $("#user").val();
        var pass = $("#pass").val();
        var select = $("#selects").val();
        if(checkuser(user) && checkpass(pass)){
            if(select != null){
                $("#btn").val("登录中...");
                $.ajax({
                    header:"Content-Type: application/json",
                    url:"http://" +apiurl+ "/api/User/Login",
                    data:JSON.stringify({"LoginName":user,"Password":pass,"Plinenub":select}),
                    contentType: 'application/json;charset=utf-8',
                    type:"POST",
                    async:true,
                    dataType:"json",
                    success:function(data){
//                        console.log(data)
                        if(data.code == "200"){
                            sessionStorage.setItem("plan",select);
                            sessionStorage.setItem("user",user);
                            sessionStorage.setItem("nickname",data.result.User.Name);
                            sessionStorage.setItem("token",data.result.Token);
                            window.location.href = "<?php echo url('Repair/inset_repair'); ?>";
                        }else {
                            $("#btn").val("登录");
                            alert("用户名或密码错误,请重新输入")
                            $("#user").val();
                        }
                    },error(XMLHttpRequest){
                        alert(XMLHttpRequest.status);
                        $("#btn").val("登录");
                    }
                });
            }else{
                $("#selects").css("border-color","red");
            }
        }
    }
    function keyLogin(){
        if( event.keyCode == 13){
            checkAll();
        }
    }
</script>
</html>