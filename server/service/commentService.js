import mongoose from 'mongoose';
const Comment = mongoose.model('Comment');
const Pic = mongoose.model('Pic');

export default class CommentService {
    async addComment(content, picId) {
        const comment = new Comment({
            comment: content,
            pic: picId,
        });
        const commentRes = await comment.save();
        const pic = await Pic.findOne({_id: picId});
        const comments = pic.comments.concat(commentRes._id);
        return await pic.update({comments})
    }
}
