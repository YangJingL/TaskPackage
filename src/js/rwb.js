
/**
 * Created by yangjing on 2017/4/21.
 */
$(document).ready(function(){
    $(".fd-rwb-item li").draggable({
        helper: "clone"
    });
    $(".fd-rwb-item").draggable({
        helper: "clone"
    });
    $(document).on("click",".fd-pages a",function(){
        debugger
        var xh = $(this).attr("xh");
        var showUl =  $(this).closest(".fd-rwb-item").find("ul");

        $(showUl).animate({
            left: "216px",
            opacity:0
        },100);
        $(showUl).removeClass("show");
        $(showUl[xh-1]).addClass("show");
        $(showUl[xh-1]).animate({
            left: "0",
            opacity:1
        },100);



        var allA = $(this).closest(".fd-pages").find("a");
        $(allA).removeClass("select");
        $(this).addClass("select");
    });
});
