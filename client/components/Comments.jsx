import React from 'react';

export default class Comments extends React.Component {
    constructor(){
        super();
        this.renderComments = this.renderComments.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    renderComments(comment) {
        return (
            <div className="comment" key={comment._id}>
                <p>
                    {comment.comment}
                </p>
            </div>
        );
    }
    handelSubmit(e) {
        e.preventDefault();
        const postId = this.props.post._id;
        const comment = this.refs.comment.value;
        if (!comment) {
            return false;
        }
        this.props.addComment(postId, comment)
        .then(() => {
            this.props.getPost();
            this.refs.commentForm.reset();
        });
    }
    render() {
        const {commnets = []} = this.props.post;
        return (
            <div className="comments">
                {comments.map(this.renderComments)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handelSubmit}>
                    <input type="text" ref="comment" placeholder="添加一个评论" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
};
