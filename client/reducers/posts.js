//a reducer takes in two things:
//1.the action (info about what happend)
//2.copy of current state

function posts (state=[],action) {
	switch (action.type) {
		case 'INCREMENT_LIKES':
            const id = action.id;
            const posts = state.posts.map((item) => {
                if(item._id === id) {
                    return {
                        ...item,
                        likes: item.likes + 1,
                    }
                }
            });
			return {
                ...state,
                posts,
            };
            break;
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.posts,
                total: action.total,
            }
		default:
		return state;
	}
}

export default posts;
