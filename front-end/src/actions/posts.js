import {
	POST_LOADED, 
	POST_ADDED, 
	POST_SORTED, 
	POST_FOUND, 
	POST_FOUND_BY_CATEGORY, 
	POST_VOTE_UPDATED, 
	POST_UPDATED, 
	POST_DELETED 
} from './types';

export const postsLoadedAction = (posts) => {
    return {
        type: POST_LOADED,
	    posts
    };
};


export const postsAddedAction = (posts) => {
    return {
        type: POST_ADDED,
	    posts
    };
};

export const postsSortedAction = (posts) => {
    return {
        type: POST_SORTED,
	    posts
    };
};

export const postsSingleAction = (postId) => {
	return {
		type: POST_FOUND,
		postId
	};
};

export const postsByCategoryAction = (category) => {
	return {
		type: POST_FOUND_BY_CATEGORY,
		category
	};
};

export const postVoteUpdatedAction = (postId, postVote) => {
	return {
		type: POST_VOTE_UPDATED,
		postId,
		postVote
	};
};

export const postUpdatedAction = (postId, postTitle, postBody) => {
	return {
		type: POST_UPDATED,
		postId,
		postTitle,
		postBody,
	};
};

export const postDeletedAction = (postId) => {
	return {
		type: POST_DELETED,
		postId
	};
};