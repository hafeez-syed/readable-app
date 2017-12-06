export const COMMENTS_LOADED = 'COMMENTS_LOADED';
export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENT_VOTE_UPDATED = 'COMMENT_VOTE_UPDATED';
export const COMMENT_UPDATED = 'COMMENT_UPDATED';
export const COMMENT_DELETED_SINGLE = 'COMMENT_DELETED_SINGLE';
export const COMMENT_DELETED_ALL = 'COMMENT_DELETED_ALL';

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


export const commentUpdatedAction = (commentId, commentBody, commentAuthor, commentTimestamp) => {
	return {
		type: COMMENT_UPDATED,
		commentId,
		commentBody,
		commentAuthor,
		commentTimestamp
	};
};

export const commentDeletedSingleAction = (commentId) => {
	return {
		type: COMMENT_DELETED_SINGLE,
		commentId
	};
};

export const commentDeletedAllAction = (parentId) => {
	return {
		type: COMMENT_DELETED_ALL,
		parentId
	};
};