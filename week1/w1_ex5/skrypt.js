
(function($){
	$(document).ready(function(){
		function addList(){
			var ul=$("<ul></ul>").appendTo($(".response")
		);
	}

	function addData(data){
		var ul=$("ul");	
		if(!ul.length){
			addList();
		}
		$.each(data, function(i,obj){			
			var user=[obj.name, obj.username, obj.email, obj.phone];
			var text="Name: "+user[0]+"\nUsername: "+user[1]+"\nEmail: "+user[2]+"\nPhone: "+user[3];
			$("<li></li>",{
				"text": text}
				).appendTo($("ul"));
		});
	}

	function removeData(){
		$("li").remove();
	}
		$(".button").on("click",function(){
		$.get("https://jsonplaceholder.typicode.com/users",function(data){
			
			if(!$(data).length){
				return;
			}
			removeData();
			addData(data);
	
			});
		});
	});
})(jQuery);