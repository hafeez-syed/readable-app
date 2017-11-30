export const POST_ADDED = 'POST_ADDED';
export const POST_SORTED = 'POST_SORTED';

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