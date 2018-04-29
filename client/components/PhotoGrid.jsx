
import React from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component {
    componentWillMount() {
        this.props.getPost();
    }
    render() {
        const { posts = [] } = this.props.posts;
        return (
            <div className="photo-grid">
                {posts.map((post, i) => (<Photo {...this.props} key={post.picKey}  post={post}></Photo>))}
            </div>
        )
    }
};
