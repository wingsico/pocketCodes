function validB() {
    var u_agent = navigator.userAgent;
    var B_name = "不是想用的主流浏览器!";
    if (u_agent.indexOf("Firefox") > -1) {
        B_name = "Firefox";
    } else if (u_agent.indexOf("Chrome") > -1) {
        B_name = "Chrome";
    } else if (u_agent.indexOf("MSIE") > -1 && u_agent.indexOf("Trident") > -1) {
        B_name = "IE(8-10)";
    }
    document.write("浏览器:" + B_name + "<br>");
    document.write("u_agent:" + u_agent + "<br>");
}