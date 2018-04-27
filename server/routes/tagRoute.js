import {controller, post, service} from "../lib/decorator";
import TagService from '../service/tagService';

@controller('/api/v0/tags')
export class TagController {
    @service(TagService)
    tagService;

    @post('/:picId')
    async addTag(ctx, next) {
        try {
            const {picId} = ctx.params;
            const {tag} = ctx.request.body;
            await this.tagService.addTag(tag, picId);
            ctx.body = {
                code: 0,
                data: {},
                msg: '添加标签评论成功',
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
