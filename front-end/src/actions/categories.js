export const CATEGORY_LOADED = 'CATEGORY_LOADED';

export const categoriesAction = (categories) => {
    return {
        type: CATEGORY_LOADED,
	    categories
    };
};