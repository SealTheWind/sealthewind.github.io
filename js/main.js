$(document).ready(function(){



    //mobile menu toggling
    $("#menu_icon").click(function(){
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });

    

    //Contact Page Map Centering
    var hw = $('header').width() + 50;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
        "max-width" : mw,
        "height" : wh
    });

    if(ww>1100){
         $('#map').css({
            "margin-left" : hw
        });
    }

   



    //Tooltip
$("a").mouseover(function(){
    var attr_title = $(this).attr("data-title");
    if(!attr_title) return false;

    // �����ǰ a �����Ѵ��� tooltip����������
    if ($(this).next('.tooltip').length === 0) {
        $(this).after('<span class="tooltip"></span>');
    }
    var tooltip = $(this).next(".tooltip");
    tooltip.text(attr_title);

    var tipwidth = tooltip.outerWidth();
    var a_width = $(this).width();
    var a_height = $(this).height() + 7;

    if (tipwidth < a_width) {
        tipwidth = a_width;
        tooltip.outerWidth(tipwidth);
    }
    var left = -((tipwidth - a_width)/2);
    tooltip.css({
        'left' : left + 'px',
        'bottom' : a_height + 'px',
        'opacity': 0
    }).stop().animate({
        opacity : 1
    }, 200);
});

    $("a").mouseout(function(){
        var tooltip = $(".tooltip");       
        tooltip.remove();
    });


});





