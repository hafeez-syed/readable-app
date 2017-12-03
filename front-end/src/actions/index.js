import { categoriesAction } from './categories';
import { postsLoadedAction, postsAddedAction, postsSortedAction, postsSingleAction, postsByCategoryAction } from './posts';
import commentsAction from './comments';

export const actions = {
	categoriesAction,
	postsLoadedAction,
	postsAddedAction,
	postsSortedAction,
	postsSingleAction,
	postsByCategoryAction,
	commentsAction
};