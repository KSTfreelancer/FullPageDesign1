$(document).ready(function(){
    $(".three_tab").click(function(){
        $(".nav ul").show(-1000);
        $(".nav ul").css("right","0px");
        $(".three_tab").hide();
        $(".x").show();
                          
    });
    $(".x").click(function(){
        $(".nav ul").css("right","100%");
        $(".x").hide();
        $(".three_tab").show();
                          
    });
    $(".nav ul li").click(function(){
        $(".nav ul").hide();
        $(".x").hide();
        $(".three_tab").show();
    });
});
