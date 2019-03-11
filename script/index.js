// 显示搜索结果
function showResult() {
    var form = document.getElementById('MainForm');
    var word = document.getElementById('SearchWord');

    form.parentNode.removeChild(form);
    iframe.src = url + '&w=' + word.value;
    iframe.style.display='block'
    iframe.focus();
}
// 加载静态资源
var iframe = document.getElementById("Protected");
var ch = document.documentElement.clientHeight||document.body.clientHeight;
var url = 'http://47.111.20.231/index?ch=' + ch;
iframe.style.display='none';
iframe.src = url;
// 目前没什么用
if (iframe.attachEvent) {
    iframe.attachEvent('onload', function(){
    });
} else {
    iframe.onload = function(){
    };
}
// 响应回车按键
document.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode == 13) {
        showResult();
    }
};