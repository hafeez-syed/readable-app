import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import comments from './comments';
import posts from './posts';
import categories from './categories';

const reducers = combineReducers({
	categories,
	posts,
	comments,
	routing: routerReducer
});

export default reducers;