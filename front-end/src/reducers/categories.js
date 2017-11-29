import { CATEGORY_ALL_SUCCESS } from '../actions/categories';

const categories = (state = [], action) => {
	switch(action.type) {
		case CATEGORY_ALL_SUCCESS:
			return action.categories;
		default:
			return state;
	}
};

export default categories;