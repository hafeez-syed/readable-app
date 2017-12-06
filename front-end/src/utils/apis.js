const API_HOST = process.env.REACT_APP_API_HOST;
const API_PORT = process.env.REACT_APP_API_SERVER_PORT;
const API_PROTOCOL = process.env.REACT_APP_API_PROTOCOL;
const URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;
const HEADERS = {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer ' + Date.now()
};

/******************************************
 ************** CATEGORIES ****************
 *****************************************/


const fetchCategories = () => {
    return fetch(`${URL}/categories`, {
    	method: 'GET',
    	headers: HEADERS
    })
        .then(res => res.json())
        .then(data => data.categories);

};

/******************************************
 ***************** POSTS ******************
 *****************************************/


const fetchPosts = () => {
    return fetch(`${URL}/posts`, {
	    method: 'GET',
	    headers: HEADERS
    })
        .then(res => res.json())
	    .then(data => data);
};

const addPost = (data) => {
	return fetch(`${URL}/posts`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => data);
};

const fetchPostsByCategory = (category) => {
    return fetch(`${URL}/${category}/posts`, {
	    method: 'GET',
	    headers: HEADERS
    })
        .then(res => res.json())
	    .then(data => data);
};

const updatePostVote = (data) => {
	return fetch(`${URL}/posts/${data.id}`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify(data.voteData)
	})
		.then(res => res.json())
		.then(data => data);
};

const updatePost = (data) => {
	return fetch(`${URL}/posts/${data.id}`, {
		method: 'PUT',
		headers: HEADERS,
		body: JSON.stringify(data.postData)
	})
		.then(res => res.json())
		.then(data => data);
};

/******************************************
 *************** COMMENTS *****************
 *****************************************/


const fetchCommentsById = (commentId) => {
    return fetch(`${URL}/posts/${commentId}/comments`, {
	    method: 'GET',
	    headers: HEADERS
    })
        .then((res) => res.json())
        .then(data => data)
};

const addComment = (data) => {
	return fetch(`${URL}/comments`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => data);
};

const updateCommentVote = (data) => {
	return fetch(`${URL}/comments/${data.id}`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify(data.voteData)
	})
		.then(res => res.json())
		.then(data => data);
};

const updateComment = (data) => {
	return fetch(`${URL}/comments/${data.id}`, {
		method: 'PUT',
		headers: HEADERS,
		body: JSON.stringify(data)
	})
		.then(res => res.json())
		.then(data => data);
};

export {
    fetchCategories,
    fetchPosts,
	fetchPostsByCategory,
	fetchCommentsById,
	addPost,
	updatePostVote,
	updatePost,
	addComment,
	updateCommentVote,
	updateComment
};