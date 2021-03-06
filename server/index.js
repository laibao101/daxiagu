import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import {connect, initSchemas} from "./database";
import {router} from "./middlewares/router";
// import {startUpload} from "./upload";
import logger from 'koa-logger';
const port = process.env.PORT || 4500;
import fs from 'fs';
import path from 'path';
import serve from 'koa-static';

class App {
    constructor() {
        this.init()
            .catch(console.log)
    }

    async init() {
        await this.connect();
        this.app = new Koa();
       
        this.initParser();
        this.initRouter();
        this.app.use(serve(path.resolve('client/dist/')));
        this.listen();
    }

    setLogger() {
        if (process.env.NODE_ENV === 'dev') {
            this.app.use(logger());
        }
    }

    initParser() {
        this.app.use(bodyParser());
    }

    initRouter() {
        router(this.app);
    }


    async connect() {
        initSchemas();
        return connect();
    }

    listen() {
        this.app.listen(port, () => console.log(`app is listening at ${port}`));
    }
}

const app = new App();


// startUpload();
