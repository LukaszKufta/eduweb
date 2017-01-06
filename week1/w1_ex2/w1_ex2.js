{function($) {
	$.fn.bold = function () {
		console.log(this);
		return this.addClass("bold");
	};

	// as 1
	$(".grid.grid-l2").bold();

	// ad 2
	$(".nav a[href^ ='http'}").attr("target",".blank");

	// ad 3
	$("input:radio, input:checkbox").not(":checked").bold();

	// ad 4
	$("#text p:empty:first").bold().remowe();

	// ad 5 
	$(".pagination-item:not(span)").bold();

}}(jQueey);