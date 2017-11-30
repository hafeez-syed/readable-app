import { POST_LOADED, POST_ADDED, POST_SORTED } from '../actions/posts';
const posts = (state = [], action) => {
	switch(action.type) {
		case POST_LOADED:
			return [
				...action.posts
			];
		case POST_SORTED:
			return [
				...action.posts
			];
		case POST_ADDED:
			debugger;
			return [
				...state,
				{...action.posts}
			];
		default:
			return state;
	}
};

export default posts;