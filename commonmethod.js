function requestmethod(par1,par2,par3,callback) {
    var xhl=new XMLHttpRequest();
//建立连接
    xhl.open('par1','https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+par2)
    //设置头信息，以表单的形式传输
    xhl.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //   向服务端发送请求

    xhl.send(par3);
    xhl.onreadystatechange=function () {
        if(xhl.readyState==4&&xhl.status==200){
            var responsedata = JSON.parse(xhl.responseText);
            var restr=responsedata.data;
            // if(str=="登录成功"){
            //     location.href="dropletservices.html";}
            // else{alert(str)}
            callback(restr)
        }
    }
}