import { COMMENTS_LOADED } from '../actions/comments';
const comments = (state = [], action) => {
	switch(action.type) {
		case COMMENTS_LOADED:
			return [
				...state,
				...action.comments
			];
		default:
			return state;
	}
};

export default comments;