import React from 'react';
import { withRouter } from 'react-router-dom';
import PostList from '../posts/PostList';

const CategorySingle = (props) => {
	const category = props.match.params.category;
	return (
		<div className="single-category">
			<PostList category={category} />
		</div>
	)
};

export default withRouter(CategorySingle);