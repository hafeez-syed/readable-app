import  CATEGORY_CHANGED from '../actions/categories';

const categories = (state = [], action) => {
	switch(action.type) {
		case CATEGORY_CHANGED:
			return action.categories;
		default:
			return state;
	}
};

export default categories;