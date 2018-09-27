$(window).scroll(function(){
  $("#particles-js").css({"margin-top": -0.8($(window).scrollTop()) + "px"});
});

$(window).scroll(function(){
  $("article").css({"margin-top": -1.2*($(window).scrollTop()) + "px"});
});


$(window).scroll(function(){
    $(".texto").css("opacity", 1 - $(window).scrollTop() / 250);
  });

$(window).scroll(function(){
    $("article").css("opacity", 0 + $(window).scrollTop() / 250);
  });

$(window).scroll(function(){
    $(".logo").css("opacity", 0 + $(window).scrollTop() / 250);
  });
