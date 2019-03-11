// 展示动态资源
var url = 'http://47.111.20.231/index';
var iframe = initFrame(url);
// 显示搜索结果
function showResult() {
    var form = document.getElementById('MainForm');
    var word = document.getElementById('SearchWord');
    form.parentNode.removeChild(form);
    iframe.src = url + '?w=' + word.value;
    iframe.style.display='block'
    iframe.focus();
}
// 加载静态资源
function initFrame(url) {
    var frame = document.getElementById("Protected");
    frame.style.display='none';
    frame.src = url;
    // 目前没什么用
    if (frame.attachEvent) {
        frame.attachEvent('onload', function(){
        });
    } else {
        frame.onload = function(){
        };
    }
    return frame;
}
// 响应回车按键
document.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode == 13) {
        showResult();
    }
};
