import { categoriesAction } from './categories';
import { postsLoadedAction, postsAddedAction, postsSortedAction, postsSingleAction, postsByCategoryAction, postVoteUpdatedAction, postUpdatedAction } from './posts';
import { commentsLoadedAction, commentsAddedAction, commentVoteUpdatedAction, commentUpdatedAction } from './comments';

export const actions = {
	categoriesAction,
	postsLoadedAction,
	postsAddedAction,
	postsSortedAction,
	postsSingleAction,
	postsByCategoryAction,
	postVoteUpdatedAction,
	postUpdatedAction,
	commentsLoadedAction,
	commentsAddedAction,
	commentVoteUpdatedAction,
	commentUpdatedAction
};