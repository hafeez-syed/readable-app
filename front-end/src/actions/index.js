import categoriesAction, { CATEGORY_CHANGED } from './categories';
import postsAction, { POST_ADDED } from './posts';
import commentsAction, { COMMENTS_ADDED } from './comments';

export const actions = {
	categoriesAction,
	postsAction,
	commentsAction
};

export const constants = {
	CATEGORY_CHANGED,
	POST_ADDED,
	COMMENTS_ADDED
};

