const API_HOST = process.env.REACT_APP_API_HOST;
const API_PORT = process.env.REACT_APP_API_SERVER_PORT;
const API_PROTOCOL = process.env.REACT_APP_API_PROTOCOL;
const URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;
const HEADERS = {
    headers: new Headers({
        'Authorization': 'Bearer ' + Date.now()
    })
};

const fetchCategories = () => {
    return fetch(`${URL}/categories`, HEADERS)
        .then((res) => res.json());
};

const fetchPosts = () => {
    return fetch(`${URL}/posts`, HEADERS)
        .then((res) => res.json())
};

const fetchComments = () => {
    return fetch(`${URL}/categories`)
        .then((res) => res.json())
};

export {
    fetchCategories,
    fetchPosts,
    fetchComments
}