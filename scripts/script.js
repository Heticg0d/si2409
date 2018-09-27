var mySVG = $('#animated_logo_dryp').drawsvg({
  duration : 2000
});
mySVG.drawsvg('animate');




//if (document.pageYOffset > 10) {
//  console.log('hello world')
//}


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


function getCoordinates(elem) 
{
    var LeftPos = elem.offsetLeft;
    var TopPos = elem.offsetTop;
    return {X:LeftPos,Y:TopPos};
}   

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
  
  if (window.pageYOffset > sticky-95)

  if (window.pageYOffset > sticky -100)
  {
    if (window.pageYOffset > sticky +900)
    {

    	$(iphonepic).fadeOut("slow");

    }
    else
    {
      $(iphonepic).fadeIn("slow");
    	iphonepic.classList.add("sticky");
    }

  }
  else
  {
    iphonepic.classList.remove("sticky");
  }
}
