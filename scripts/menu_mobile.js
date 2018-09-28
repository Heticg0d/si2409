$(document).ready(function(){ 

	$('.menuMobile').click(function(){
		$('#navigation').toggleClass('active');
	})

	$('.cross').click(function(){
		$('#navigation').removeClass('active');
	})

});