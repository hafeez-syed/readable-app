export const COMMENTS_LOADED = 'COMMENTS_LOADED';
export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENT_VOTE_UPDATED = 'COMMENT_VOTE_UPDATED';

export const commentsLoadedAction = (comments) => {
    return {
        type: COMMENTS_LOADED,
        comments
    };
};

export const commentsAddedAction = (comments) => {
	return {
		type: COMMENT_ADDED,
		comments
	};
};

export const commentVoteUpdatedAction = (commentId, commentVote) => {
	return {
		type: COMMENT_VOTE_UPDATED,
		commentId,
		commentVote
	};
};