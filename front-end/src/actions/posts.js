export const POST_ADDED = 'POST_ADDED';

const postsAction = (index) => {
    return {
        type: POST_ADDED,
        index
    };
};

export default postsAction;