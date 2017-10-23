import { combineReducers } from 'redux';

const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
const POST_SUCCESS = 'POST_SUCCESS';
const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';

const categories = (state = [], action) => {
	switch(action.type) {
		case CATEGORIES_SUCCESS:
			return action.categories;
		default:
			return state;
	}
};

const posts = (state = [], action) => {
	switch(action.type) {
		case POST_SUCCESS:
			return action.posts;
		default:
			return state;
	}
};

const comments = (state = [], action) => {
	switch(action.type) {
		case COMMENTS_SUCCESS:
			return action.comments;
		default:
			return state;
	}
};

export default combineReducers({
	categories,
	posts,
	comments
})