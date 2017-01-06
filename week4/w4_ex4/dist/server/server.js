"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var IndexRoute = require("./routes/index");
var ProductsRoute = require("./routes/products");
var computersRoute = require("./routes/computers");
var Server = (function () {
    function Server() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.SetRoutes();
    }
    Server.bootstrap = function () {
        return new Server;
    };
    Server.prototype.SetRoutes = function () {
        var router = express.Router();
        router.use(IndexRoute.Index.routes());
        router.use(ProductsRoute.Products.routes());
        router.use(computersRoute.computers.routes());
        this.app.use(router);
    };
    Server.prototype.StartServer = function () {
        this.app.listen(3000, function () {
            console.log('App listening on port 3000');
        });
    };
    return Server;
}());
exports.Server = Server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW1DO0FBQ25DLHdDQUEwQztBQUMxQywyQ0FBNkM7QUFDN0MsaURBQW1EO0FBQ25ELG1EQUFxRDtBQUVyRDtJQUtJO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQy9CLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFWYSxnQkFBUyxHQUF2QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBU00sMEJBQVMsR0FBaEI7UUFDSSxJQUFJLE1BQU0sR0FBbUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTSw0QkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBR0wsYUFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qlksd0JBQU0iLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0ICogYXMgSW5kZXhSb3V0ZSBmcm9tICcuL3JvdXRlcy9pbmRleCc7XG5pbXBvcnQgKiBhcyBQcm9kdWN0c1JvdXRlIGZyb20gJy4vcm91dGVzL3Byb2R1Y3RzJztcbmltcG9ydCAqIGFzIGNvbXB1dGVyc1JvdXRlIGZyb20gJy4vcm91dGVzL2NvbXB1dGVycyc7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICAgIHByaXZhdGUgYXBwOiBleHByZXNzLkV4cHJlc3M7XG4gICAgcHVibGljIHN0YXRpYyBib290c3RyYXAoKTogU2VydmVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXI7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuU2V0Um91dGVzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBTZXRSb3V0ZXMoKSB7XG4gICAgICAgIGxldCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICAgICAgcm91dGVyLnVzZShJbmRleFJvdXRlLkluZGV4LnJvdXRlcygpKTtcbiAgICAgICAgcm91dGVyLnVzZShQcm9kdWN0c1JvdXRlLlByb2R1Y3RzLnJvdXRlcygpKTtcbiAgICAgICAgcm91dGVyLnVzZShjb21wdXRlcnNSb3V0ZS5jb21wdXRlcnMucm91dGVzKCkpO1xuICAgICAgICB0aGlzLmFwcC51c2Uocm91dGVyKTtcbiAgICB9XG4gICAgcHVibGljIFN0YXJ0U2VydmVyKCkge1xuICAgICAgICB0aGlzLmFwcC5saXN0ZW4oMzAwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXBwIGxpc3RlbmluZyBvbiBwb3J0IDMwMDAnKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG59XG4iXX0=
