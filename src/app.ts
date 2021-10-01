import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';

import { keys } from './config';
import { UsersRoute } from './routes';


export default class App {
    private app:Application;

    constructor() {
        this.app = express();

        this.app.set('port', keys.PORT);

        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes() {
        this.app.use('/users', UsersRoute);
    }

    public async listen() {
        await this.app.listen(this.app.get('port'), () => {
            console.log(`Server listening on port ${this.app.get('port')}`);     
        });
    }
}