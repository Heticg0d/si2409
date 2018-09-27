$(window).scroll(function(){
  $("#particles-js").css({"margin-top": -($(window).scrollTop()) + "px"});
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


//for the first iphone to move in a stick/destick way

function inputcallback()
{
	var iphonepic = document.getElementById("iphone_container");
	var sticky = iphonepic.offsetTop;

}

window.onscroll = function() {
	myFunction()};

var iphonepic = document.getElementById("iphone_container");
var sticky = iphonepic.offsetTop;

function myFunction() 
{
  if (window.pageYOffset > sticky -100) 
  {
    if (window.pageYOffset > sticky +900)
    {

    	iphonepic.style.animation = "opa-out 2s infinite";
    	iphonepic.classList.remove("sticky");
    }
    else
    {
    	iphonepic.classList.add("sticky");
    }

  } 
  else 
  {
    iphonepic.classList.remove("sticky");
  }
}