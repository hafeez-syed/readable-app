import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from '../../actions/index';
import PostList from '../posts/PostList';

const CategorySingle = (location) => {
	const category = location.match.params.category;
	this.props.getPostsByCategory(category);
	debugger;
	return (
		<div className="single-category">
			<PostList category={category} />
		</div>
	)
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPostsByCategory: (category) => {
			dispatch(actions.postsByCategoryAction(category))
		},
	}
};

const mapStateToProps = ({ posts}) => {
	return {
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategorySingle));