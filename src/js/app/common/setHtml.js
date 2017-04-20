/**
 * version:	 		    2015.01.01
 * creatTime: 	 		2015.11.11
 * updateTime: 			2016.03.16
 * author:				wuwg
 * name:  				setHtmlSize
 */
// set  html  size
function setHtmlSize() {
	var htmlSize = 0,
		clientWidth = 0,
		clientHeight = 0;
	if ($(window.top.document).find("iframe").length > 0) {
		clientWidth = Math.max($(window.top.window).width(), 1440);//  client  width
		clientHeight = Math.max($(window.top.window).height(), 800); //  client  height
		htmlSize = Math.min(clientWidth * 18 / 1920, clientHeight * 18 / 980);
	} else {
		clientWidth = Math.max($(window).width(), 1440), //  client  width
		clientHeight = Math.max($(window).height(), 800); //  client  height
		htmlSize = Math.min(clientWidth * 18 / 1920, clientHeight * 18 / 980);
	}
	$("html").css({
		"font-size" : htmlSize
	});

}


function getHtmlSize() {
	var htmlSize = 0,
	clientWidth = 0,
	clientHeight = 0;
	clientWidth = Math.max($(window).width(), 1440), //  client  width
	clientHeight = Math.max($(window).height(), 800); //  client  height
	htmlSize = Math.min(clientWidth * 18 / 1920, clientHeight * 18 / 980);
	return htmlSize;
}
setHtmlSize();
// 给window 绑定resize事件
$(function () {
    $(window).on("resize.htmlSize", function () {
        var htmlSize = getHtmlSize();
        $('html').css({
            "font-size" : htmlSize
        });
        if ($('#iframe-index').length > 0) {
            if ($("#iframe-index").contents().find('html').length > 0) {
                $("#iframe-index").contents().find('html').css({
                    "font-size" : htmlSize
                });
            }
            if ($("#iframe-index").contents().find('iframe').contents().find('html').length > 0) {
                $("#iframe-index").contents().find('iframe').contents().find('html').css({
                    "font-size" : htmlSize
                });
            }
        }
    });
});