export const COMMENTS_ADDED = 'COMMENTS_ADDED';

const commentsAction = (index) => {
    return {
        type: COMMENTS_ADDED,
        index
    };
};

export default commentsAction;