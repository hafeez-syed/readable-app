import { CATEGORY_LOADED } from '../actions/categories';

const categories = (state = [], action) => {
	switch(action.type) {
		case CATEGORY_LOADED:
			return action.categories;
		default:
			return state;
	}
};

export default categories;