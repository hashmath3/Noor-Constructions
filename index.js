$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".menu").css({"background-color":"blue"});   
        }
        else{
            $(".menu").css({"background-color":"white"});
        }

    })
})