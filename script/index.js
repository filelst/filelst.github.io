__main_i = 0;
function showResult() {
    var form = document.getElementById('MainForm');
    var word = document.getElementById('SearchWord');
    if(__main_i) {
        clearInterval(__main_i);
        form.parentNode.removeChild(form);
        iframe.src = url + '&w=' + word.value;
        iframe.style.display='block'
        iframe.focus();
    }
}
var iframe = document.getElementById("Protected");
var ch = document.documentElement.clientHeight||document.body.clientHeight;
var url = 'http://47.111.20.231/index?ch=' + ch;
iframe.style.display='none';
iframe.src = url;
if (iframe.attachEvent) {
 iframe.attachEvent('onload', function(){
 });
} else {
 iframe.onload = function(){
 };
}
document.onkeydown = function (event) {
    var e = event || window.event;
    if (e && e.keyCode == 13) {
        showResult();
    }
};
__main_i = setInterval(function() {
    var ttc = document.getElementById("TitleC")
    ttc.innerHTML=(ttc.innerHTML=='C' ? 'O' : 'C');
}, 1000);
