import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import {connect, initSchemas} from "./database";
import {router} from "./middlewares/router";
import {startUpload} from "./upload";

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
        this.listen();
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
        this.app.listen(`4500`, () => console.log(`app is listening at 4500`));
    }
}

const app = new App();

// startUpload();
