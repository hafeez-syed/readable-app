import * as searchApis from '../utils/apis';

export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';

/*export const fetchCategories = () => (dispatch) => {
debugger;
    searchApis.fetchCategories()
		.then(categories => dispatch(categoriesAction(categories)));
};*/

export const fetchCategories = () => {
    searchApis.fetchCategories()
        .then((data) => {return data; });
};
    

export const categoriesAction = (categories) => {
    return {
        type: CATEGORY_SUCCESS,
	    categories
    };
};

export default fetchCategories;
