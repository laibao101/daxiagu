import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
// import {connect, initSchemas} from "./database";
import {router} from "./middlewares/router";
// import {startUpload} from "./upload";

const port = process.env.PORT || 4500;

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
        // initSchemas();
        // return connect();
    }

    listen() {
        this.app.listen(port, () => console.log(`app is listening at ${port}`));
    }
}

const app = new App();

// startUpload();
