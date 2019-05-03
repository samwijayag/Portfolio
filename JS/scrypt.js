$(document).ready(function(){



	// $('.contact').waypoint(function(direction){
	// 		if(direction === "down") {
	// 			$('nav').addClass('sticky')
	// 		}else{
	// 			$('nav').removeClass('sticky')
	// 		}
	// 	},{
	// 		offset:'50%'
	// });

	$(".work-btn").click(function(){
			$('html,body').animate({scrollTop:$('.projects')
			.offset().top},1000)
		})

		$(".contact-btn").click(function(){
			$('html,body').animate({scrollTop:$('.contact')
			.offset().top},1000)
	});

 	
	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		           if (target.length) {
		             $('html,body').animate({
		                 scrollTop: target.offset().top
		            }, 1000);
		        	return false;
		    }
	    }
	});
		   
		    // Animations

    $('.js--wp-1').waypoint(function(direction){
    	$('.js--wp-1').addClass('animated fadeIn')
    },{
    	offset:'50%'
    })

    $('.js--wp-2').waypoint(function(direction){
    	$('.js--wp-2').addClass('animated fadeInRight')
    },{
    	offset:'50%'
    })
    
    $('.js--wp-3').waypoint(function(direction){
    	$('.js--wp-3').addClass('animated fadeInLeft')
    },{
    	offset:'90%'
    })

     $('.js--wp-4').waypoint(function(direction){
    	$('.js--wp-4').addClass('animated fadeInUp')
    },{
    	offset:'100%'
    })

       $('.js--wp-5').waypoint(function(direction){
    	$('.js--wp-5').addClass('animated fadeInLeft')
    },{
    	offset:'100%'
    })
   

     $('.js--wp-6').waypoint(function(direction){
    	$('.js--wp-6').addClass('animated fadeInRight')
    },{
    	offset:'100%'
    })
   
   

})