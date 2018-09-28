// code associated to logo drawing animation

var mySVG = $('#animated_logo_dryp').drawsvg({
  duration : 2000
});
mySVG.drawsvg('animate');


var body = document.getElementsByTagName('body')
var header = document.getElementsByClassName('header')
var logo = document.getElementsByClassName('logo')
logo[0].style.opacity = 0

// to show or hide the header and the dryp logo

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

// show or hide the top flowers images

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

var announce = document.getElementById("fadein_intro")
announce.style.opacity = 0
announce.style.transition = "2s"

function fade_text(){
  announce.style.opacity = 1;
}
setTimeout(fade_text, 2000)

function countdown()
{
    var end_date = document.getElementById("end_date");

    var actual_date = new Date();
    var event_date = new Date("Sep 29 00:00:00 2018");
    var total_seconds = (event_date - actual_date) / 1000;

    var prefixe = "The crowdfunding ends in : ";

    if (total_seconds > 0)
    {
        var days = Math.floor(total_seconds / (60 * 60 * 24));
        var hours = Math.floor((total_seconds - (days * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_seconds - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);
        seconds = Math.floor(total_seconds - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));

        var et = "et";
        var day_world = "days,";
        var hour_world = "hours,";
        var minutes_world = "minutes,";
        var seconds_world = "seconds";

        if (days == 0)
        {
            days = '';
            day_world = '';
        }
        else if (days == 1)
        {
            day_world = "day,";
        }

        if (hours == 0)
        {
            hours = '';
            hour_world = '';
        }
        else if (hours == 1)
        {
            hour_world = "hour,";
        }

        if (minutes == 0)
        {
            minutes = '';
            minutes_world = '';
        }
        else if (minutes == 1)
        {
            minutes_world = "minute,";
        }

        if (seconds == 0)
        {
            seconds = '';
            seconds_world = '';
            et = '';
        }
        else if (seconds == 1)
        {
            seconds_world = "second";
        }

        if (minutes == 0 && hours == 0 && days == 0)
        {
            et = "";
        }

        end_date.innerHTML = prefixe + days + ' ' + day_world + ' ' + hours + ' ' + hour_world + ' ' + minutes + ' ' + minutes_world + ' ' + et + ' ' + seconds + ' ' + seconds_world;
    }
    else
    {
        end_date.innerHTML = 'The crowdfunding has ended, thank you for your help! Now Discover what Dryp is going to be!';
    }

    var actualisation = setTimeout("countdown();", 1000);
}
countdown();
