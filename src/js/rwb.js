
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
    $(".fd-content li").draggable({
        helper: "clone"
    });
    $("#fd-drop-con").droppable({
        drop: function( event, ui ) {

        }
    });
    $(document).on("click",".fd-pages a",function(){
        debugger
        var xh = $(this).attr("xh");
        var showUl =  $(this).closest(".fd-rwb-item").find("ul");
        $(this).closest(".fd-rwb-item").addClass("fd-over-hide");
        $(showUl).animate({
            left: "216px",
            opacity:0
        },100,function(){
            $(showUl).removeClass("show");
            $(showUl[xh-1]).addClass("show");
            $(showUl[xh-1]).animate({
                left: "0",
                opacity:1
            },100,function(){
                $(this).closest(".fd-rwb-item").removeClass("fd-over-hide");
            });
        });




        var allA = $(this).closest(".fd-pages").find("a");
        $(allA).removeClass("select");
        $(this).addClass("select");
    });
});
