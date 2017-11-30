import { POST_ADDED, POST_SORTED } from '../actions/posts';
const posts = (state = [], action) => {
	switch(action.type) {
		case POST_ADDED:
			return [
				...state,
				...action.posts
			];
		case POST_SORTED:
			return [
				...action.posts
			];
		default:
			return state;
	}
};

export default posts;