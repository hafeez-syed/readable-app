import POST_ADDED from '../actions/comments';
const posts = (state = [], action) => {
	switch(action.type) {
		case POST_ADDED:
			return action.posts;
		default:
			return state;
	}
};

export default posts;