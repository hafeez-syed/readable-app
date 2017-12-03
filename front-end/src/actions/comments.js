export const COMMENTS_LOADED = 'COMMENTS_LOADED';

const commentsAction = (comments) => {
    return {
        type: COMMENTS_LOADED,
        comments
    };
};

export default commentsAction;