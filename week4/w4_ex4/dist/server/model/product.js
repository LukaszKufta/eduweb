"use strict";
var Product = (function () {
    function Product(id, name, quantity) {
        if (quantity === void 0) { quantity = 0; }
        this.name = name;
        this.quantity = quantity;
        this.id = id;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.updateQuantity = function (newQuantity) {
        this.quantity = newQuantity;
    };
    Product.prototype.addProducts = function (addedQuantity) {
        this.quantity += addedQuantity;
    };
    Product.prototype.subtrackProducts = function (subtrackedQuantity) {
        this.quantity -= subtrackedQuantity;
    };
    return Product;
}());
exports.Product = Product;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL3Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUksaUJBQVksRUFBVSxFQUFTLElBQVksRUFBUyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSx1QkFBSyxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUNNLHlCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00seUJBQU8sR0FBZCxVQUFlLElBQVk7UUFFekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNNLGdDQUFjLEdBQXJCLFVBQXNCLFdBQW1CO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFDTSw2QkFBVyxHQUFsQixVQUFtQixhQUFxQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBQ00sa0NBQWdCLEdBQXZCLFVBQXdCLGtCQUEwQjtRQUM5QyxJQUFJLENBQUMsUUFBUSxJQUFJLGtCQUFrQixDQUFDO0lBQ3hDLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQXhCWSwwQkFBTyIsImZpbGUiOiJtb2RlbC9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgcXVhbnRpdHk6IG51bWJlciA9IDApIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldE5hbWUobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIHB1YmxpYyB1cGRhdGVRdWFudGl0eShuZXdRdWFudGl0eTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBuZXdRdWFudGl0eTtcbiAgICB9XG4gICAgcHVibGljIGFkZFByb2R1Y3RzKGFkZGVkUXVhbnRpdHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnF1YW50aXR5ICs9IGFkZGVkUXVhbnRpdHk7XG4gICAgfVxuICAgIHB1YmxpYyBzdWJ0cmFja1Byb2R1Y3RzKHN1YnRyYWNrZWRRdWFudGl0eTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgLT0gc3VidHJhY2tlZFF1YW50aXR5O1xuICAgIH1cbn1cbiJdfQ==
