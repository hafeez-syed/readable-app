import { categoriesAction } from './categories';
import { postsLoadedAction, postsAddedAction, postsSortedAction, postsSingleAction } from './posts';
import commentsAction from './comments';

export const actions = {
	categoriesAction,
	postsLoadedAction,
	postsAddedAction,
	postsSortedAction,
	postsSingleAction,
	commentsAction
};