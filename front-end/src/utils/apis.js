const API_HOST = process.env.REACT_APP_API_HOST;
const API_PORT = process.env.REACT_APP_API_SERVER_PORT;
const API_PROTOCOL = process.env.REACT_APP_API_PROTOCOL;
const URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;
const HEADERS = {
	'Authorization': 'Bearer ' + Date.now()
};

const fetchCategories = () => {
    return fetch(`${URL}/categories`, {
    	method: 'GET',
    	headers: HEADERS
    })
        .then(res => res.json())
        .then(data => data.categories);

};

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

const fetchComments = () => {
    return fetch(`${URL}/categories`)
        .then((res) => res.json())
};

export {
    fetchCategories,
    fetchPosts,
	fetchPostsByCategory,
    fetchComments,
	addPost
}