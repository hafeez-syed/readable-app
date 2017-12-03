import { POST_LOADED, POST_ADDED, POST_SORTED, POST_FOUND, POST_FOUND_BY_CATEGORY } from '../actions/posts';
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
			return [
				...state,
				{...action.posts}
			];
		case POST_FOUND:
			return [
				...state.filter((post) => {
					return post.id === action.postId
				})
			];
		case POST_FOUND_BY_CATEGORY:
			return [
				...state.filter((post) => {
					return post.category === action.category
				})
			];
		default:
			return state;
	}
};

export default posts;