import React from 'react';

export default class Comments extends React.Component {
    renderComments(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }
    handelSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        if (!author || !comment) {
            return false;
        }
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
        this.refs.author.focus();
    }
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComments)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handelSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }
};
