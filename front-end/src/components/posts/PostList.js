import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from '../../actions/index';
import PostSingle from './PostSingle';
import SortList from '../SortList';

class PostList extends Component {
	state = {
		currentCategory: ''
	};
	setCurrentCategory(category) {
		this.setState({currentCategory: category});
	}
	getCurrentCategory() {
		return this.state.currentCategory;
	}
	getComments(postId) {
		return this.props.comments.filter((comment) => comment.parentId === postId);
	}
	render() {
		let {posts, category, updateSort} = this.props;
		const sorting = !category ? <SortList posts={posts} updateSort={updateSort}/> : '';
		if(category && this.getCurrentCategory() !== category) {
			posts = posts.filter(function(post) {
				debugger;
				return post.category === category;
			});
			this.setCurrentCategory(category);
			//this.props.getPostsByCategory(category);
		}
		debugger;
		return (
			<div>
				{sorting}
				<div className='posts-wrapper'>
					<ul>
						{
							posts && posts.length && posts.map((post, ind) => (
								<li className='posts-list' key={ind}>
									<PostSingle post={post} comments={this.getComments(post.id)} />
								</li>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch, location) => {
	return {
		/*getPostsByCategory: (category) => {
			dispatch(actions.postsByCategoryAction(category))
		},*/
		updateSort: (posts, type, order) => {
			order = (order === 'up') ? 'asc' : 'desc';
			posts = _.orderBy(posts, type, order);
			dispatch(actions.postsSortedAction(posts))
		}
	}
};

const mapStateToProps = ({ posts, comments }) => {
	return {
		posts,
		comments
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));