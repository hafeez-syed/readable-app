const categories = (state = [], action) => {
	switch(action.type) {
		case CATEGORIES_SUCCESS:
			return action.categories;
		default:
			return state;
	}
};

export default categories;