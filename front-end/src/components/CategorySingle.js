import React from 'react';
import PostList from './PostList';

const CategorySingle = (location) => {
	const category = location.match.params.category;
	return (
		<div className="single-category">
			<PostList category={category} />
		</div>
	)
};

export default CategorySingle;