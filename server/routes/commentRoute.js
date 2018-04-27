import {controller, post, service} from "../lib/decorator";
import CommentService from '../service/commentService';

@controller('/api/v0/comments')
export class TagController {
    @service(CommentService)
    commentService;

    @post('/:picId')
    async addComment(ctx, next) {
        try {
            const {picId} = ctx.params;
            const {comment} = ctx.request.body;
            await this.commentService.addComment(comment, picId);
            ctx.body = {
                code: 0,
                data: {},
                msg: '评论成功',
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
