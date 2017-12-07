import {CATEGORY_LOADED} from './types';

const categoriesAction = (categories) => {
    return {
        type: CATEGORY_LOADED,
	    categories
    };
};

export default categoriesAction;