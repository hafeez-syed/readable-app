import fetchCategories, { categoriesAction } from './categories';
import fetchPosts, { postsAction } from './posts';
import commentsAction from './comments';

export const fetchAPIs = {
	fetchCategories,
	fetchPosts
};

export const actions = {
	categoriesAction,
	postsAction,
	commentsAction
};