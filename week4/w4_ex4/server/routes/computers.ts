import * as express from 'express';
import * as computer from '../model/computer';
import * as computersModel from '../model/computers';

export class computers {
    private computerList: computersModel.computers;
    public static routes(): express.Router {
        let router: express.Router = express.Router();
        let computersRoute: computers = new computers();
        router.get('/computers/', computersRoute.index.bind(computersRoute));
        router.post('/computers/', computersRoute.create.bind(computersRoute));
        router.put('/computers/:computer_id', computersRoute.update.bind(computersRoute));
        router.delete('/computers/:computer_id', computersRoute.delete.bind(computersRoute));
        router.get('/computers/:computer', computersRoute.find.bind(computersRoute));
        router.post('/computers/delete/:computer_id', computersRoute.delete.bind(computersRoute));
        router.post('/computers/update/:computer_id', computersRoute.update.bind(computersRoute));
        return router;
    }

    constructor() {
        this.computerList = new computersModel.computers([
            new computer.computer(1, 'SURFACE 4 PRO', 'Marcel ProustMICROSOFT', 1),
            new computer.computer(2, 'YOGA', 'LENOVO', 10),
            new computer.computer(3, 'MACBOOK PRO', 'APPLE', 100),
            new computer.computer(4, 'MACBOOK AIR', 'APPLE', 50)
        ])
    }

    public index(request: express.Request, response: express.Response) {
        response.json(this.computerList.list());
    }
    public create(request: express.Request, response: express.Response) {
        let computerTitle: string = request.body.computer_title;
        let computerAuthor: string = request.body.computer_author;
        let computerQuantit: number = request.body.computer_pdate;
        if (!computerTitle) {
            response.status(500).send('computer model not found');
            return;
        }
        if (!computerAuthor) {
            response.status(500).send('computer producent not found');
            return;
        }
        if (!computerQuantit) {
            response.status(500).send('computer quantity not found');
            return;
        }
        response.json(this.computerList.add(computerTitle, computerAuthor, computerQuantit));
    }
    public update(request: express.Request, response: express.Response)
    {
        let computerId: number = parseInt(request.params.computer_id);
        let computer: computer.computer = this.computerList.fetch(computerId);
        let computerTitle: string = request.body.computer_title;
        let computerAuthor: string = request.body.computer_author;
        let computerQuantit: number = request.body.computer_pdate;

        if (!computer) {
            response.status(404).send('computer not found');
            return;
        }

        if(computerTitle !== undefined)
        {
          computer.setTitle(computerTitle);
        }
        if(computerAuthor !== undefined)
        {
          computer.setAuthor(computerAuthor);
        }
        if(computerQuantit !== undefined)
        {
          computer.setcomputerQuantit(computerQuantit);
        }

        response.json(computer);
    }
    public delete(request: express.Request, response: express.Response) {
        let computerId: number = parseInt(request.params.computer_id);
        let wasDeleted: Boolean = this.computerList.delete(computerId);

        if (!wasDeleted) {
            response.status(404).send('computer not found');
            return;
        }
        else
        {
          response.json({success: true});
        }

    }
    public find(request: express.Request, response: express.Response) {
        let computerQuery: string = request.params.computer;
        let computer: computer.computer = this.computerList.find(computerQuery);

        if (!computer) {
            response.status(404).send('computer not found');
            return;
        }
        response.json(computer);

    }
}
