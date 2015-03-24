$(document).ready(function(){
	$('h3').hide();
	$('h2').hide();
  	$('h1').hide().fadeIn(2000,'linear',function(){
  		$('h2').fadeIn(1000,'linear',function(){
  			$('h1').fadeOut(5000);
  			$('h2').fadeOut(5000,'linear',function(){
  				$('h3').fadeIn(1000);
  			});

  		});	
  	});

  	


    	
	
});