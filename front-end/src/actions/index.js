import fetchCategories from './categories';
import fetchPosts, { POST_ADDED } from './posts';
import commentsAction, { COMMENTS_ADDED } from './comments';

export const actions = {
	fetchCategories,
	fetchPosts,
	commentsAction
};

export const constants = {
	POST_ADDED,
	COMMENTS_ADDED
};

