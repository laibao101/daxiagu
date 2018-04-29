
import React from 'react';
import Photo from './Photo';

//import comments
import Comments from './Comments';


export default class Single extends React.Component{
    render() {
        //postId
		const { postId } = this.props.match.params;
		const post = this.props.posts.posts.find(item => item.picKey === postId);
		return (
			<div className="single-photo">
				<Photo post={post} {...this.props} ></Photo>
				<Comments {...this.props} post={post} />
			</div>
		)
    }
};
