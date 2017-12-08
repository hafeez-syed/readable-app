import _ from 'lodash';
import { 
	POST_LOADED, 
	POST_ADDED, 
	POST_SORTED, 
	POST_FOUND, 
	POST_FOUND_BY_CATEGORY, 
	POST_VOTE_UPDATED, 
	POST_UPDATED,
	POST_DELETED 
} from '../actions/types';

const posts = (state = [], action) => {
	switch(action.type) {
		case POST_LOADED:
			return [
				...action.posts
			];
		case POST_SORTED:
			return [
				...action.posts
			];
		case POST_ADDED:
			return [
				...state,
				{...action.posts}
			];
		case POST_FOUND:
			return [
				...state.filter((post) => {
					return post.id === action.postId
				})
			];
		case POST_FOUND_BY_CATEGORY:
			return [
				state.filter((post) => {
					return post.category === action.category
				})
			];
		case POST_VOTE_UPDATED:
			return [
				...state,
				...state
					.filter((post) => post.id === action.postId)
					.map((post) => {
						post.voteScore = (action.postVote === 'upVote') ? post.voteScore + 1 : post.voteScore - 1;
						return post;
					})
			];
		case POST_UPDATED:
			return [
				...state,
				...state
                    .filter((post) => post.id === action.postId)
					.map((post) => {
                        post.title = action.postTitle;
                        post.body = action.postBody;
                        return post;
                })
			];
		case POST_DELETED:
			const index = _.findIndex(state, ['id', action.postId]);
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];
		default:
			return state;
	}
};

export default posts;