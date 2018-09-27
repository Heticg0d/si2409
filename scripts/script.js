var mySVG = $('#animated_logo_dryp').drawsvg({
  duration : 2000
});
mySVG.drawsvg('animate');

let body = document

<<<<<<< HEAD
$(window).on("scroll", function() 
{
    if($(window).scrollTop() > ) 
    {
=======

let header = document.getElementsByClassName('header')
$(window).on("scroll", function() {
    if($(window).scrollTop() >10) {
>>>>>>> d328db672d127eb31a124f5a606c81de447c1c02
        header[0].classList.add("appear");
    } else 
    {
       header[0].classList.remove("appear");
    }
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
