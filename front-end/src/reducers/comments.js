import { COMMENTS_LOADED, COMMENT_ADDED, COMMENT_VOTE_UPDATED } from '../actions/comments';
const comments = (state = [], action) => {
	switch(action.type) {
		case COMMENTS_LOADED:
			return [
				...state,
				...action.comments
			];
		case COMMENT_ADDED:
			return [
				...state,
				{...action.comments}
			];
		case COMMENT_VOTE_UPDATED:
			state.map((comment) => {
				if (comment.id === action.commentId) {
					comment.voteScore = (action.commentVote === 'upVote') ? comment.voteScore + 1 : comment.voteScore - 1;
				}
			});
			return [
				...state
			];
		default:
			return state;
	}
};

export default comments;