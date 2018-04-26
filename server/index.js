import Koa from 'koa';
import {connect} from "./database";
import {router} from "./middlewares/router";

class App {
    constructor() {
        this.init()
            .catch(console.log)
    }

    async init() {
        await this.connect();
        this.app = new Koa();
        this.initRouter();
        this.listen();
    }

    initRouter() {
        router(this.app);
    }

    async connect() {
        return connect();
    }

    listen() {
        this.app.listen(`4500`, () => console.log(`app is listening at 4500`));
    }
}

const app = new App();
