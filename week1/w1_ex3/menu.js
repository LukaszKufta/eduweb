(function($) {

    $(document).ready(function() {
		
	
		var button = $(".button"),
			menu = $(".nav");
		
		button.on("click", function(){
			
			menu.fadeToggle();
		})

    });

})(jQuery);