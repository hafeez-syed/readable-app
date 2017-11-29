import fetchCategories, { categoriesAction } from './categories';
import fetchPosts, { POST_ADDED } from './posts';
import commentsAction, { COMMENTS_ADDED } from './comments';

export const fetchAPIs = {
	fetchCategories,
	fetchPosts
};

export const constants = {
	POST_ADDED,
	COMMENTS_ADDED
};

export const actions = {
	categoriesAction,
	commentsAction
};