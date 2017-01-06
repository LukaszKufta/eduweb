"use strict";
var express = require("express");
var Index = (function () {
    function Index() {
    }
    Index.routes = function () {
        var router = express.Router();
        var indexRoute = new Index();
        router.get('/', indexRoute.index.bind(indexRoute));
        return router;
    };
    Index.prototype.index = function (request, response) {
        response.send("Hello world!!!");
    };
    return Index;
}());
exports.Index = Index;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW1DO0FBRW5DO0lBQUE7SUFVQSxDQUFDO0lBVGlCLFlBQU0sR0FBcEI7UUFDSSxJQUFJLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlDLElBQUksVUFBVSxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTSxxQkFBSyxHQUFaLFVBQWEsT0FBd0IsRUFBRSxRQUEwQjtRQUM3RCxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLHNCQUFLIiwiZmlsZSI6InJvdXRlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBjbGFzcyBJbmRleCB7XG4gICAgcHVibGljIHN0YXRpYyByb3V0ZXMoKTogZXhwcmVzcy5Sb3V0ZXIge1xuICAgICAgICBsZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgICAgIGxldCBpbmRleFJvdXRlOiBJbmRleCA9IG5ldyBJbmRleCgpO1xuICAgICAgICByb3V0ZXIuZ2V0KCcvJywgaW5kZXhSb3V0ZS5pbmRleC5iaW5kKGluZGV4Um91dGUpKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG4gICAgcHVibGljIGluZGV4KHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICAgICAgcmVzcG9uc2Uuc2VuZChcIkhlbGxvIHdvcmxkISEhXCIpO1xuICAgIH1cbn1cbiJdfQ==
