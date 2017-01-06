var elem = new Toggler("#section");
var button = document.querySelector("#button");
button.addEventListener("click", function() {
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
}, false);
function Toggler(elem) {
    this.selektor = elem
}
Toggler.prototype.getElem = function() {
    return document.querySelector(this.selektor)
}
Toggler.prototype.show = function() {
    this.getElem().style.display = "block"
}
Toggler.prototype.hide = function() {
    this.getElem().style.display = "none"
}