import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class Photo extends React.Component {
    render() {
		const { post } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.picKey}`}>
						<img src={`http://pic.webtotal.cn/${post.picKey}-daxiagu`} alt={post.picKey} className="grid-photo"/>
					</Link>
					<CSSTransitionGroup
						transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
						<span className="likes-heart" key={post.likes || 0}>{post.likes || 0}</span>
					</CSSTransitionGroup>
				</div>
				<figcaption>
					<div className="control-buttons">
						<button onClick={this.props.increment.bind(null,post._id)} className="likes">&hearts; {post.likes}</button>
						<Link className="button" to={`/view/${post.picKey}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{' '}
								{post.comments.length}
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		)
    }
};
