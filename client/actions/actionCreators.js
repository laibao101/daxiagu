import { Http } from "../util";

//increment
export const increment = (id) => async (dispatch) => {
    const res = await Http.get(`/api/v0/pics/likes/${id}`);
	dispatch ({
        type:'INCREMENT_LIKES',
        id,
	})
}

//add commnet
export const addComment = (postId,comment) => async (dispatch) => {
    return await Http.post(`/api/v0/comments/${postId}`, {comment});
}

//remove commnet
export function removeComment (postId,i) {
	return {
		type:'REMOVE_COMMENT',
		postId,
		i
	}
}

export const getPost = () => async (dispatch) => {
    const posts = await Http.get('/api/v0/pics/all');
    dispatch({
        type: 'GET_POSTS',
        posts:posts.data.pics,
        total: posts.data.total,
    });
}
