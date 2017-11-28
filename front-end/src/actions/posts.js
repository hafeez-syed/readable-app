import * as searchApis from '../utils/apis';

export const POST_ADDED = 'POST_ADDED';

export const fetchPosts = () => (dispatch) => {
	searchApis.fetchPosts()
		.then(posts => dispatch(postsAction(posts)));
};


const postsAction = (posts) => {
    return {
        type: POST_ADDED,
	    posts
    };
};

export default fetchPosts;