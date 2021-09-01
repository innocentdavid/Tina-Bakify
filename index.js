$(".close").click(function(){
    $(".title-text").hide(1000);
    $(".welcome").show(1000);
});

$(".slider-div2, .slider-div3").hide();

$(".toggle-icon-right1").click(function(){
    $(".slider-div2").show();
    $(".slider-div1").hide();
});

$(".toggle-icon-right2").click(function(){
    $(".slider-div3").show();
    $(".slider-div2").hide();
});

$(".toggle-icon-right3").click(function(){
    $(".slider-div1").show();
    $(".slider-div3").hide();
});

$(".toggle-icon-left2").click(function(){
    $(".slider-div1").show();
    $(".slider-div2").hide();
});

$(".toggle-icon-left3").click(function(){
    $(".slider-div2").show();
    $(".slider-div3").hide();
});

$(".toggle-icon-left1").click(function(){
    $(".slider-div3").show();
    $(".slider-div1").hide();
});
  
// Mobile Version
$(".slide2, .slide3, .slide4, .slide5, .slide6").hide();

$(".toggle-icon-right1").click(function(){
    $(".slide2").show();
    $(".slide1").hide();
});

$(".toggle-icon-right2").click(function(){
    $(".slide3").show();
    $(".slide2").hide();
});

$(".toggle-icon-right3").click(function(){
    $(".slide4").show();
    $(".slide3").hide();
});
$(".toggle-icon-right4").click(function(){
    $(".slide5").show();
    $(".slide4").hide();
});

$(".toggle-icon-right5").click(function(){
    $(".slide6").show();
    $(".slide5").hide();
});

$(".toggle-icon-right6").click(function(){
    $(".slide1").show();
    $(".slide6").hide();
});

$(".toggle-icon-left2").click(function(){
    $(".slide1").show();
    $(".slide2").hide();
});

$(".toggle-icon-left3").click(function(){
    $(".slide2").show();
    $(".slide3").hide();
});

$(".toggle-icon-left4").click(function(){
    $(".slide3").show();
    $(".slide4").hide();
});
$(".toggle-icon-left5").click(function(){
    $(".slide4").show();
    $(".slide5").hide();
});

$(".toggle-icon-left6").click(function(){
    $(".slide5").show();
    $(".slide6").hide();
});

$(".toggle-icon-left1").click(function(){
    $(".slide6").show();
    $(".slide1").hide();
});

$(".close-burger").hide();
$(".open-burger").click(function(){
    $(".close-burger").show();
    $(".open-burger").hide();
    $(".nav-list").show();
});
$(".close-burger").click(function(){
    $(".open-burger").show();
    $(".close-burger").hide();
    $(".nav-list").hide();
})

$(".all").click(function(){
    $(".birth, .wedding, .parf, .cup, .snack").show();
});
$(".birth-click").click(function(){
    $(".birth").show();
    $(".wedding, .parf, .cup, .snack").hide();
});

$(".wed-click").click(function(){
    $(".wedding").show();
    $(".birth, .parf, .cup, .snack").hide();
});

$(".parf-click").click(function(){
    $(".parf").show();
    $(".wedding, .birth, .cup, .snack").hide();
});

$(".cup-click").click(function(){
    $(".cup").show();
    $(".wedding, .parf, .birth, .snack").hide();
});

$(".snack-click").click(function(){
    $(".snack").show();
    $(".wedding, .parf, .cup, .birth").hide();
});
$('.gal h5, .title-text-h2-2').click(function(){
    window.location.href='order.html';
   });
   $('.cont-contents h4').click(function(){
    window.location.href='order.html';
   });
  






