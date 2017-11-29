import * as searchApis from '../utils/apis';

export const CATEGORY_ALL_SUCCESS = 'CATEGORY_ALL_SUCCESS';
export const CATEGORY_SINGLE_SUCCESS = 'CATEGORY_SINGLE_SUCCESS';

export const fetchCategories = () => {
    searchApis.fetchCategories()
        .then((data) => {return data});
};
    

export const categoriesAction = (categories) => {
    return {
        type: CATEGORY_ALL_SUCCESS,
	    categories
    };
};

export default fetchCategories;
