(function($){
	$(document).ready(function(){
		var form=$(".form");
		var members=$(".members");
		function createList(){
			var list=$("<ul></ul>",{
				"class":"ul-list"
			}
			).appendTo(members);
			return list;
		}
		function createElement(name,list){
			$("<li></li>",{
				"class":"li-list",
				"text":name
			}
			).appendTo(list);
		}
		function addElement(name){
			var list=$("ul.ul-list");
			if(!list.length)
			{
				list=createList();
			}
			createElement(name,list);	
		}
		form.on("submit",function(e){
			e.preventDefault();
			var input=$("input");
			if(!input.val()){
				return;
			}
			else{
				name=$.trim(input.val());
			}
			addElement(name);
			input.val("");
		}
		);
	});
})(jQuery);