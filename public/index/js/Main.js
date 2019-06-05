/**
 * Created by Administrator on 2019/04/26.
 */
<!--ajax 请求地址-->
//var apiurl = "192.168.5.21:53801";
var apiurl = "218.108.45.6:1112";

<!--判断token是否为空-->
var token = sessionStorage.getItem("token");
if(token == "" || token == null){
    window.location.href = "../Index/index.html";
}
<!--注销按钮-->
function exit(){
    sessionStorage.removeItem("token");
    window.location.reload();
}
<!--页面长时间未操作自动退出-->
//var lastTime = new Date().getTime();
//var currentTime = new Date().getTime();
//var timeOut = 10 * 60 * 1000; //设置超时时间： 10分
//$(function(){
//    /* 鼠标移动事件 */
//    $(document).mouseover(function(){
//        lastTime = new Date().getTime(); //更新操作时间
//    });
//});
//function testTime(){
//    currentTime = new Date().getTime(); //更新当前时间
//    if(currentTime - lastTime > timeOut){ //判断是否超时
//        sessionStorage.removeItem("token");
//        alert("您已超过十分钟未操作,请重新登录");
//        window.location.reload();
//    }
//}
/* 定时器  间隔1秒检测是否长时间未操作页面  */
//window.setInterval(testTime(), 1000);

<!--解析通过url传过来的参数-->
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

<!--去除输入框前后空格-->
function tim(s){
    return s.replace(/(^\s*)|(\s*$)/g, "").replace(/(^\s*)|(\s*$)/g, "");
}
function nbsp(n){  //去除前后空白直接调用此方法即可。   n：为输入框的id名
    $("#"+n).val(tim($("#"+n).val()));
}

//维修 -> 维修记录查询：物料管理
function QueryErrCode(name,no,page,per){
    var ret;
    var url = "http://"+apiurl+"/api/Repair/QueryErrCode?name="+name+"&no="+no+"&page="+page+"&per="+per+"";
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  //必须写在open和send中间
    xhr.send();
    xhr.onreadystatechange = function(data){
       return xhr = data.responseText;
    };
    return xhr
}
//获取维修记录
function QueryRepair(page,per,prodNo,stateNo,errCode,Date1,Date2){
    //"MoID":"WKT-18071000000001",//工单id
    //    "Bel_NO":"01090411",//产线，从获取产线接口获取
    //    "RepairDate":"2018-07-25 09:00:00",//维修时间
    //    "Sta_NO":"113",//维修点，工位no
    //    "RepairName":"陈雪",//维修人，员工名称
    //    "Pro_barcode":"PRO-00000001",//产品条码，从获取对应产品接口获取
    //    "Pro_NO":"PRO-00000001",//产品no，从获取对应产品获取
    //    "StateNo":"01",//维修状态，01：待修02：已维修03：无法维修
    //    "Err_code":"2-1",//错误编码
    //    "Err_name":"Error2"//错误名称

    //必传项：Err_code：错误编码  page 当前页  per：每页显示数据   Pro_NO：产品no    Date1：开始时间  repairDate2：结束时间
    if(errCode == 'undefined'){
        errCode =''
    }
    if(stateNo == 'undefined'){
        stateNo = ''
    }
    var ret;
    var url = "http://"+apiurl+"/api/Repair/QueryRepair?page="+page+"&per="+per+"&prodNo="+prodNo+"&stateNo="+stateNo+"&errCode="+errCode+"&repairDate1="+Date1+"&repairDate2="+Date2+"";
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  //必须写在open和send中间
    xhr.send();
    xhr.onreadystatechange = function(data){
        return xhr = data.responseText;
    };
    return xhr
}
//维修录入->获取树状信息
function getErrCodes(){
    var ret;
    $.ajax({
        url:"http://"+ apiurl +"/api/Repair/getErrCodes",
        header:"Content-Type: application/json",
        //data:{"page":pages,"per":count,"plinenub":text},
        type:"GET",
        dataType:"json",
        async:false,
        success:function(data){
            ret = data
        }
    });
    return ret;
}

//获取维修记录列表
function getReplays(pages,count,code){
    var ret;
    $.ajax({
        url:"http://"+ apiurl +"/api/Repair/getReplays",
        header:"Content-Type: application/json",
        data:{"page":pages,"per":count,"code":code},
        type:"GET",
        dataType:"json",
        async:false,
        success:function(data){
            ret = data
        }
    });
    return ret;
}
//获取工单
function Manufacture(page,per){
    var ret;
    $.ajax({
        url:"http://"+ apiurl +"/api/Manufacture/Query",
        header:"Content-Type: application/json",
        data:{"page":page,"per":per,"teamNo":''},
        type:"GET",
        dataType:"json",
        async:false,
        success:function(data){
            ret = data
        }
    });
    return ret;
}
//获取所有用户
function getuserinfo(page,per){
    //api/Userinfo/Query?badgenumber=&name=&no=&page=1&pager=&per=500
    var ret;
    $.ajax({
        url:"http://"+ apiurl +"/api/Userinfo/Query?",
        header:"Content-Type: application/json",
        data:{badgenumber:'',name:'',no:'',page:page,pager:'',per:per},
        type:"GET",
        dataType:"json",
        async:false,
        success:function(data){
            ret = data
        }
    });
    return ret;
}
//获取维修点
function getStation(page,per){
    var ret;
    $.ajax({
        url:"http://"+ apiurl +"/api/Station/Query?content=&lineNo=&no=&page=1&per=500&workshopNo=",
        data:{content:'',lineNo:'',no:'',page:page,per:per,workshopNo:''},
        type:"get",
        dataType:"json",
        async:false,
        success:function(data){
            ret = data;
        }
    });
    return ret;
}

//修改维修记录
function modifyRepairs(Rp_ID,MoID,Pro_NO,Pro_barcode,Sta_NO,Err_code,Err_name,Bel_NO,RepairName,RepairDate,StateNo){
    var ret;
    $.ajax({
        url:"http://"+ apiurl +"/api/Repair/ModifyRepair",
        type:"PUT",
        data:JSON.stringify({Rp_ID:Rp_ID,MoID:MoID,Pro_NO:Pro_NO,Pro_barcode:Pro_barcode,Sta_NO:Sta_NO,Err_code:Err_code,
            Err_name:Err_name,Bel_NO:Bel_NO,RepairName:RepairName,RepairDate:RepairDate,StateNo:StateNo,_method:'PUT'}),
        dataType:"json",
        contentType:"application/json; charset=utf-8",
        async:false,
        success:function(data){
            //console.log(data.data)
            ret = data;
            //console.log(data)
        }
    });
    return ret;
}
//新增维修
function AddRepair(MoID,Bel_NO,RepairDate,Sta_NO,RepairName,Pro_barcode,Pro_NO,StateNo,Err_code,Err_name){
    /*
         "MoID":"WKT-18071000000001",//工单id
         "Bel_NO":"01090411",//产线，从获取产线接口获取
         "RepairDate":"2018-07-25 09:00:00",//维修时间
         "Sta_NO":"113",//维修点，工位no
         "RepairName":"陈雪",//维修人，员工名称
         "Pro_barcode":"PRO-00000001",//产品条码，从获取对应产品接口获取
         "Pro_NO":"PRO-00000001",//产品no，从获取对应产品获取
         "StateNo":"01",//维修状态，01：待修02：已维修03：无法维修
         "Err_code":"2-1",//错误编码
         "Err_name":"Error2"//错误名称
     */
    var ret;
    $.ajax({
        url:"http://"+apiurl+"/api/Repair/AddRepair",
        //data:JSON.stringify(result),
        data: {"MoID":MoID,"Bel_NO":Bel_NO,"RepairDate":RepairDate,"Sta_NO":Sta_NO,"RepairName":RepairName,
                "Pro_barcode":Pro_barcode,"Pro_NO":Pro_NO,"StateNo":StateNo,"Err_code":Err_code,"Err_name":Err_name},
        type:"post",
        //contentType: 'application/json;charset=utf-8',
        dataType:"json",
        async:false,
        cache:true,
        success:function(data){
            ret = data
        },
        error:function(jqXHR){
            alert("错误"+jqXHR.status)
        }
    });
    return ret;
}

//删除维修记录
function DeleteRepair(id){
    var url = "http://"+ apiurl +"/api/Repair/DeleteRepair?id="+id+"";
    var xhr = new XMLHttpRequest();
    xhr.open('delete',url,false);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  //必须写在open和send中间
    xhr.send();
    xhr.onreadystatechange=function(data)
    {
       return xhr = data.responseText;
    };
    return xhr;
}

<!-- 生产时间计划->查询生产时间->查询 -->
function manualPlan(pages,count,text){
    var ret;
    $.ajax({
        url:"http://"+apiurl+"/api/manualPlan/getPlineTime",
        header:"Content-Type: application/json",
        data:{"page":pages,"per":count,"plinenub":text},
        type:"GET",
        dataType:"json",
        async:false,
        success:function(data){
            ret = data
        }
    });
    return ret;
}

//  生产时间计划->查询生产时间->删除
function removePlineTime(no,time_s,time_e,liine_nub,plan_date){
    var ret;
    var result = {timeList:[{ "no":no, "time_s": time_s, "time_e": time_e,"pline_nub": liine_nub, "plan_date": plan_date }]};
    $.ajax({
        url:"http://"+apiurl+"/api/manualPlan/removePlineTime",
        data:JSON.stringify(result),
        type:"post",
        contentType: 'application/json;charset=utf-8',
        dataType:"json",
        async:false,
        cache:true,
        success:function(data){
            ret = data
        },error:function(jqXHR){
            alert("错误"+jqXHR.status)
        }
    });
    return ret;
}

<!--生产时间计划->查询生产时间->新增 -->
function savePlineTime(no,startTime,endTime,productNbm,planDate,count){  //开始时间、结束时间、车间、时间、数量
    //获取原来数据，在原来的序号上增加1
    var result = { timeList:
        [{"no":no, "time_s": startTime, "time_e": endTime, "pline_nub": productNbm, "plan_date": planDate}],
        "count": count //记录条数
    };
    var ret;
    $.ajax({
        header:"Content-Type: application/json",
        url:"http://"+ apiurl +"/api/manualPlan/savePlineTime",
        contentType: 'application/json;charset=utf-8',
        data:JSON.stringify(result),
        type:"POST",
        dataType:"json",
        async:false,
        cache:true,
        success:function(data){
            ret = data;
        }
    });
    return ret;
}

//手工录入 -> 产品数量计划：新增
function saveQuantityPlan(pdate,orderno,pcode,pname,ptype,pdatetime,stdjp,ordernub,type,workers,workers_real,pnum,plinenub,team){  //pdate 开始时间
    var result = { pplanList: [{ pdate: pdate,orderno: orderno, pcode: pcode, pname: pname, ptype: ptype, pdatetime: pdatetime, stdjp: stdjp,
            ordernub: ordernub, type: type, workers: workers, workers_real: workers_real, pnum: pnum, plinenub: plinenub, team: team}]};
    var ret;
    $.ajax({
        url:"http://" + apiurl + "/api/manualPlan/saveQuantityPlan",
        type:'POST',
        contentType: 'application/json; charset=UTF-8',
        async:false,
        dataType:'json',
        data:JSON.stringify(result),
        success: function (data) {
            ret = data;
        }
    });
    return ret;
}















































































































<!--分页-->
function paging (currentpage,count,mtd,murl,mtotalcount,list){
//currentpage:当前页  count:当前页显示的笔数 mtb:拼接的标签名  murl:拼接的URL地址  mtotalcount：总count条记录 list:每个表有多少列
    var totalCount = mtotalcount;
    var prepage = parseInt(currentpage)-1;
    var nextpage = parseInt(currentpage)+1;
    var bootpage = parseInt(Math.ceil(totalCount/count));//( 总数据条数 - 1 )/每页显示数据 + 1
    var totalPages = bootpage;
    mtd += "<tr style='text-align: center'>"+
        "<td colspan='"+list+"'>" +
            '<a href=\"'+ murl +'page=1\">首页</a>';
                if(currentpage == 1){
                    mtd += "<span style='padding-left: 30px;'>上一页</span>"
                }else {
                    mtd += '<a style="padding-left: 30px;" href="'+ murl +'page='+ prepage +'">上一页</a>';
                }
                if(currentpage == bootpage){
                    mtd += "<span style='padding-left: 30px;'>下一页</span>"
                }else {
                    mtd += '<a style="padding-left: 30px;" href="'+ murl +'page='+ nextpage +'">下一页</a>';
                }
            mtd +='<a style="padding-left: 30px;" href="'+ murl +'page='+ bootpage +'">尾页</a>'+
            '<apan style="padding-left: 30px;">&nbsp;&nbsp;共'+ totalPages +'页</apan>'+
            '<span style="padding-left: 30px;" href="">&nbsp;&nbsp;合计：'+ totalCount +'条数据</span>'+
        "</td>"+
   "</tr>";
    return mtd;
}

    //查询和搜索人员
function getuserlist(apiurl,currentpage,count,like) {   //必传参数：搜索框id
    var ret;
    var start = (currentpage-1)*count;
    if (typeof(like) == "undefined") {
        var mydata = {"access_token": sessionStorage.getItem("token"),"start":start,"count":count};
    }
    else {
        var mydata = {"access_token": sessionStorage.getItem("token"),"start":start,"count":count, "like": like};
    }
    $.ajax({
        url: "http://" + apiurl + "/Open/App/getusers",
        data: mydata,
        type: "post",
        async:false,
        dataType: "json",
        success: function (data) {
            ret = data
        }
    });
    return ret;
}

//数组之间相减
function arrChange(a,b){
    for (var i = 0; i < b.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[j].user_name == b[i].user_name) { //如果是id相同的，那么a[ j ].id == b[ i ].id
                a.splice(j,1);
                j = j - 1;
            }
        }
    }
    return a;
}