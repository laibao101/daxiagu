import {controller, get, service} from "../lib/decorator";
import PicService from '../service/picService';

@controller('/api/v0/pics')
export class PicController {
    @service(PicService)
    picService;

    @get('/all')
    async getAllPics(ctx, next) {
        return ctx.body = {
            msg: 'success',
        };

        // try {
        //     const pics = await this.picService.getAllPics();
        //     const total = await this.picService.getPicsTogal();
        //     ctx.body = {
        //         code: 0,
        //         data: {
        //             pics,
        //             total,
        //         },
        //         msg: 'success',
        //     };
        // } catch (error) {
        //     ctx.body = {
        //         code: 1,
        //         data: {},
        //         msg: '服务器错误',
        //     };
        // }
    }

    @get('/:id')
    async getPic(ctx, next) {
        try {
            const {id} = ctx.params;
            const pic = await this.picService.getPic(id);
            ctx.body = {
                code: 0,
                data: {
                    pic,
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
