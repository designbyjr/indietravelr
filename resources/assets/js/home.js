'use strict';
$(document).ready(function(){
var dropdown = false;

	$(".nav-more, .nav-menu").click(function(){
		if(dropdown == false){
			$('.nav-items-dropdown').css('display','flex');
			dropdown = true;
		}
		else{
			$('.nav-items-dropdown').css('display','none');
			dropdown = false;
		}

		console.log('hello');
	})

});