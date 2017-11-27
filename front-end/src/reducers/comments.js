import COMMENTS_ADDED from '../actions/comments';
const comments = (state = [], action) => {
	switch(action.type) {
		case COMMENTS_ADDED:
			return action.comments;
		default:
			return state;
	}
};

export default comments;