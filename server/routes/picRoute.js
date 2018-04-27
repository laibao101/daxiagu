import {controller, get, service} from "../lib/decorator";
import picService from '../service/picService';

@controller('/api/v0/pics')
export class PicController {
    @service(picService)
    picService

    @get('/')
    async getAllPic(ctx, next) {
        try {
            const pics = await this.picService.getAllPics();
            ctx.body = {
                code: 0,
                data: {
                    pics,
                },
                msg: 'success',
            };
        } catch (error) {
            ctx.body = {
                code: 1,
                data: {},
                msg: '服务器错误',
            };
        }
    }
}
