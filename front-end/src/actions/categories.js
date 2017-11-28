import * as searchApis from '../utils/apis';

export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';

export const fetchCategories = () => (dispatch) => {
	searchApis.fetchCategories()
		.then(categories => dispatch(categoriesAction(categories)));
};

const categoriesAction = (categories) => {
    return {
        type: CATEGORY_SUCCESS,
	    categories
    };
};

export default fetchCategories;
