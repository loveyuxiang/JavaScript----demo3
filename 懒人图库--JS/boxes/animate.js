$(document).ready(function(){
				//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
				//Vertical Sliding
        
          
		    $(".boxgrid.slidedown").click(function(){ 
	     	
	     		
				$(this).stop().animate({width:"325"}).siblings().animate({width:"30px"}).unbind("mouseenter");
			
				$(this).hover(function(){						   
			 		$(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:1000});
				}, function() {
					$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:600});
				}).trigger("mouseenter");

				
			});
			 $(".boxgrid.slideright").click(function(){
				$(this).stop().animate({width:"325"}).siblings().animate({width:"30px"}).unbind("mouseenter");
				
				
				//Horizontal Sliding
				
				$(this).hover(function(){
						 									
						$(".cover", this).stop().animate({left:'325px'},{queue:false,duration:1000});
					}, function() {
						$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:600});
					}).trigger("mouseenter");
												
			 })
				//Diagnal Sliding
			$(".boxgrid.thecombo").click(function(){
				$(this).stop().animate({width:"325"}).siblings().animate({width:"30px"}).unbind("mouseenter");
				
				
				$(this).hover(function(){						  
						$(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:1000});
					}, function() {
						$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:600});
					}).trigger("mouseenter");
				   
				
			})
				//Partial Sliding (Only show some of background)
			$('.boxgrid.peek').click(function(){
						
				$(this).stop().animate({width:"325"}).siblings().animate({width:"30px"}).unbind("mouseenter");
				
				$(this).hover(function(){						  
						$(".cover", this).stop().animate({top:'90px'},{queue:false,duration:1000});
					}, function() {
						$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
					}).trigger("mouseenter");
				  
				
			})
				//Full Caption Sliding (Hidden to Visible)
			$('.boxgrid.captionfull').click(function(){
				
				$(this).stop().animate({width:"325"}).siblings().animate({width:"30px"}).unbind("mouseenter");	
				
				$(this).hover(function(){								 
						$(".cover", this).stop().animate({top:'160px'},{queue:false,duration:1000});
					}, function() {
						$(".cover", this).stop().animate({top:'260px'},{queue:false,duration:160});
				}).trigger("mouseenter");
				   
			})
				//Caption Sliding (Partially Hidden to Visible)
			$(".boxgrid.caption").click(function(){
				
				$(this).stop().animate({width:"325"}).siblings().animate({width:"30px"}).unbind("mouseenter");									 
				
				$(this).hover(function(){							
						$(".cover", this).stop().animate({top:'160px'},{queue:false,duration:1000});
					}, function() {
					
						$(".cover", this).stop().animate({top:'220px'},{queue:false,duration:160});
					}).trigger("mouseenter");
				
				
			})
		});