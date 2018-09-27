var mySVG = $('#animated_logo_dryp').drawsvg({
  duration : 2000
});
mySVG.drawsvg('animate');


let body = document.getElementsByTagName('body')
let header = document.getElementsByClassName('header')
let logo = document.getElementsByClassName('logo')
logo[0].style.opacity = 0

$(window).on("scroll", function() {
    if($(window).scrollTop() >10)
    {
        $(header).fadeIn("slow");
        header[0].classList.add("appear");
        header[0].style.transition = "1.5s";
        logo[0].style.opacity = 1;
        logo[0].style.transition = "1.5s";
    } else {
       header[0].classList.remove("appear");
       logo[0].style.opacity = 0;
    }
});



//for the first iphone to move in a stick/destick way

function inputcallback()
{
	var iphonepic = document.getElementById("iphone_first");
	var sticky = iphonepic.offsetTop;

}

window.onscroll = function()
{
	myFunction()
};

var iphonepic = document.getElementById("iphone_first");
var flowers=document.getElementsByClassName("animated_plants")
var sticky = iphonepic.offsetTop;


function myFunction()
{
  if (window.pageYOffset > 100)
  {
    $(flowers).fadeOut();
  }
  else
  {
    $(flowers).fadeIn();
  }
}

var limit = document.body.offsetHeight - window.innerHeight;
