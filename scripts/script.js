var mySVG = $('#animated_logo_dryp').drawsvg({
  duration : 2000
});
mySVG.drawsvg('animate');




//if (document.pageYOffset > 10) {
//  console.log('hello world')
//}


let body = document.getElementsByTagName('body')

let header = document.getElementsByClassName('header')
$(window).on("scroll", function() {
    if($(window).scrollTop() >10) {
        header[0].classList.add("appear");
    } else {
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
