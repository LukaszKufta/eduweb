"use strict";
var computer = (function () {
    function computer(id, title, author, publicationDate) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.id = id;
    }
    computer.prototype.getId = function () {
        return this.id;
    };
    computer.prototype.getTitle = function () {
        return this.title;
    };
    computer.prototype.getAuthor = function () {
        return this.author;
    };
    computer.prototype.getPublicationDate = function () {
        return this.publicationDate;
    };
    computer.prototype.setTitle = function (title) {
        this.title = title;
    };
    computer.prototype.setAuthor = function (author) {
        this.author = author;
    };
    computer.prototype.setPublicationDate = function (publicationDate) {
        this.publicationDate = publicationDate;
    };
    return computer;
}());
exports.computer = computer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2NvbXB1dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUVJLGtCQUFZLEVBQVUsRUFBUyxLQUFhLEVBQVMsTUFBYyxFQUFTLGVBQXVCO1FBQXBFLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFDL0YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLHdCQUFLLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ00sMkJBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTSw0QkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxxQ0FBa0IsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sMkJBQVEsR0FBZixVQUFnQixLQUFhO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSw0QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxxQ0FBa0IsR0FBekIsVUFBMEIsZUFBdUI7UUFFL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDekMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLDRCQUFRIiwiZmlsZSI6Im1vZGVsL2NvbXB1dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGNvbXB1dGVyIHtcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgcHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyBhdXRob3I6IHN0cmluZywgcHVibGljIHB1YmxpY2F0aW9uRGF0ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG4gICAgcHVibGljIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG4gICAgcHVibGljIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgcHVibGljIGdldEF1dGhvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHVibGljYXRpb25EYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJsaWNhdGlvbkRhdGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKVxuICAgIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgcHVibGljIHNldEF1dGhvcihhdXRob3I6IHN0cmluZylcbiAgICB7XG4gICAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICB9XG4gICAgcHVibGljIHNldFB1YmxpY2F0aW9uRGF0ZShwdWJsaWNhdGlvbkRhdGU6IG51bWJlcilcbiAgICB7XG4gICAgICB0aGlzLnB1YmxpY2F0aW9uRGF0ZSA9IHB1YmxpY2F0aW9uRGF0ZTtcbiAgICB9XG59XG4iXX0=
