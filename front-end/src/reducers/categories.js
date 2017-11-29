import { CATEGORY_SUCCESS } from '../actions/categories';

const categories = (state = [], action) => {
	switch(action.type) {
		case CATEGORY_SUCCESS:
			return action.categories;
		default:
			return state;
	}
};

export default categories;