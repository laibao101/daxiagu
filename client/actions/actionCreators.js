import { Http } from "../util";

//increment
export const increment = (id) => async (dispatch) => {
    const res = await Http.get(`/api/v0/pics/like/${id}`)
	dispatch ({
        type:'INCREMENT_LIKES',
        id,
	})
}

//add commnet
export function addComment (postId,author,comment) {
	return {
		type:'ADD_COMMENT',
		postId,
		author,
		comment
	}
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
