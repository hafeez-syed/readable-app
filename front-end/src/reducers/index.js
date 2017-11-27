import { combineReducers } from 'redux';
import comments from './comments';
import posts from './posts';
import categories from './categories';

const reducers = combineReducers({
	categories,
	posts,
	comments
});

export default reducers;