
import React from 'react';
import Photo from './Photo';

export default class PhotoGrid extends React.Component {
    componentWillMount() {
        this.props.getPost();
    }
    render() {
        const { posts = [] } = this.props.posts;
        console.log(posts);
        return (
            <div className="photo-grid">
                {posts.map((post, i) => (<Photo {...this.props} key={i} i={i} post={post}></Photo>))}
            </div>
        )
    }
};
