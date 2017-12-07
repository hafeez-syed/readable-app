import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postsSortedAction } from '../../actions/posts';
import PostSingle from './PostSingle';
import SortList from '../SortList';

class PostList extends Component {
	getComments(postId) {
		return this.props.comments.filter((comment) => comment.parentId === postId);
	}
	render() {
		let {posts, category, updateSort} = this.props;
		const sorting = !category ? <SortList posts={posts} updateSort={updateSort}/> : '';
		return (
			<div>
				{sorting}
				<div className='posts-wrapper'>
					{
						posts && posts.length ?
							<ul>
								{
									posts && posts.length && posts
										.filter(function(post) {
											return category ? post.category === category : post;
										})
										.map((post, ind) => (
											<li className='posts-list' key={ind}>
												<PostSingle post={post} comments={this.getComments(post.id)} />
											</li>
										))
								}
							</ul>
							:
							<div>Sorry! No records found.</div>
					}
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSort: (posts, type, order) => {
			order = (order === 'up') ? 'asc' : 'desc';
			posts = _.orderBy(posts, type, order);
			dispatch(postsSortedAction(posts))
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