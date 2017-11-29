import * as searchApis from '../utils/apis';

export const POST_ADDED = 'POST_ADDED';

export const fetchPosts = () => {
	searchApis.fetchPosts()
		.then((data) => {return data});
};


export const postsAction = (posts) => {
    return {
        type: POST_ADDED,
	    posts
    };
};

export default fetchPosts;