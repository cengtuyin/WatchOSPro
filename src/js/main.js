
/**
* 根据变量名获取匹配值
*/
//调用
//alert(GetQueryString("name"));
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
} 
