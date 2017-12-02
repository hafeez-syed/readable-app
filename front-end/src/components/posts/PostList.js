import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from '../../actions/index';
import PostSingle from './PostSingle';
import SortList from '../SortList';
import * as searchApis from '../../utils/apis';

class PostList extends Component {
	render() {
		const {posts, category, updateSort} = this.props;
		const sorting = !category ? <SortList posts={posts} updateSort={updateSort}/> : '';
		return (
			<div>
				{sorting}
				<div className='posts-wrapper'>
					<ul>
						{
							posts && posts.length && posts.map((post, ind) => (
								<li className='posts-list' key={ind}>
									<PostSingle post={post}/>
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
	const category = location.match.params.category;
	const api = !category ? searchApis.fetchPosts : searchApis.fetchPostsByCategory;

	return {
		getAllPosts: (() => {
			return api(category)
				.then((data) => dispatch(actions.postsLoadedAction(data)));
		})(),
		updateSort: (posts, type, order) => {
			order = (order === 'up') ? 'asc' : 'desc';
			posts = _.orderBy(posts, type, order);
			dispatch(actions.postsSortedAction(posts))
		}
	}
};

const mapStateToProps = ({ posts }) => {
	return {
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));