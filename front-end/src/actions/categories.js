export const CATEGORY_CHANGED = 'CATEGORY_CHANGED';

const categoriesAction = (index) => {
    return {
        type: CATEGORY_CHANGED,
        index
    };
};

export default categoriesAction;
