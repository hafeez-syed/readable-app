import { categoriesAction } from './categories';
import { postsLoadedAction, postsAddedAction, postsSortedAction, postsSingleAction, postsByCategoryAction, postVoteUpdatedAction, postUpdatedAction, postDeletedAction } from './posts';
import { commentsLoadedAction, commentsAddedAction, commentVoteUpdatedAction, commentUpdatedAction, commentDeletedSingleAction, commentDeletedAllAction } from './comments';

export const actions = {
	categoriesAction,
	postsLoadedAction,
	postsAddedAction,
	postsSortedAction,
	postsSingleAction,
	postsByCategoryAction,
	postVoteUpdatedAction,
	postUpdatedAction,
	postDeletedAction,
	commentsLoadedAction,
	commentsAddedAction,
	commentVoteUpdatedAction,
	commentUpdatedAction,
	commentDeletedSingleAction,
	commentDeletedAllAction
};