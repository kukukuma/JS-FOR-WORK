var Sys = {};

var ua = navigator.userAgent.toLowerCase();

if (window.ActiveXObject)

    Sys.ie = ua.match(/msie ([\d.]+)/)[1]

else if (document.getBoxObjectFor)

    Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1]

else if (window.MessageEvent && !document.getBoxObjectFor)

    Sys.chrome = ua.match(/chrome\/([\d.]+)/)[1]

else if (window.opera)

    Sys.opera = ua.match(/opera.([\d.]+)/)[1]

else if (window.openDatabase)

    Sys.safari = ua.match(/version\/([\d.]+)/)[1];

if (Sys.firefox==null){
var mymessage = confirm("当前浏览器不是可支持版本，需下载火狐浏览器，是否下载？");
if(mymessage==true){
window.location.href="https://download-ssl.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe"

}

}

//以下进行测试

if(Sys.ie) document.write('IE: '+Sys.ie);

if(Sys.firefox) document.write('Firefox: '+Sys.firefox);

if(Sys.chrome) document.write('Chrome: '+Sys.chrome);

if(Sys.opera) document.write('Opera: '+Sys.opera);

if(Sys.safari) document.write('Safari: '+Sys.safari);
