import React from 'react';
import PostList from './PostList';

const Category = (location) => {
	const category = location.match.params.category;
	return (
		<div className="single-category">
			<PostList category={category} />
		</div>
	)
};

export default Category;