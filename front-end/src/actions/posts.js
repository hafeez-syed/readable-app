export const POST_ADDED = 'POST_ADDED';
export const POST_LOADED = 'POST_LOADED';
export const POST_SORTED = 'POST_SORTED';
export const POST_FOUND = 'POST_FOUND';

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