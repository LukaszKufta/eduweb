if (typeof String.prototype.repeatt !== "function") {
	String.prototype.repeatt = function(count) {
		var date = ""
		for (var i = 0; i <= count; i++) {
			date += this
		}
		return date
	}
}
console.log("Polifill String.prototype.repeatt " + "siemka".repeatt(3))
console.log("String.prototype.repeat " + "siemka".repeat(3))