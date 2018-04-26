import {controller, get} from "../lib/decorator";

@controller('/api/v0/pics')
export class movieController {
    @get('/')
    async getAllPics(ctx, next) {
        ctx.body = {
            msg: 'success',
        }
    }
}
