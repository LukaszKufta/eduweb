import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as IndexRoute from './routes/index';
import * as ProductsRoute from './routes/products';
import * as computersRoute from './routes/computers';

export class Server {
    private app: express.Express;
    public static bootstrap(): Server {
        return new Server;
    }
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.SetRoutes();
    }
    public SetRoutes() {
        let router: express.Router = express.Router();
        router.use(IndexRoute.Index.routes());
        router.use(ProductsRoute.Products.routes());
        router.use(computersRoute.computers.routes());
        this.app.use(router);
    }
    public StartServer() {
        this.app.listen(3000, function() {
            console.log('App listening on port 3000');
        })

    }


}
