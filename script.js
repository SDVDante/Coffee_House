$(document).ready(function() {
    $(".tagline").ready(function() {
        $(".tagline").css("display", "block").animate({
            marginLeft: "0px",
        });  
    })
});

$(window).scroll(function() {
    var h = $(window).scrollTop();
    var story= $(".story").offset().top;
    if (h > story) {
        $('.story').fadeIn(700).css("display", "flex");
    }
})

/* 
$(window).scroll(function() {
    var h = $(window).scrollTop();
    var yourElementHeight= $("#yourElement").offset().top; // координаты высоты верхнего края yourElement
    if (h > yourElementHeight) {
        //do...
    } 

//т.е. при высоте прокрутки > чем высота верхнего края yourElementHeight
*/