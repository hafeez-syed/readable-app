import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from '../actions/';
import PostSingle from './PostSingle';
import SortList from './SortList';
import * as searchApis from '../utils/apis';

const PostList = ({posts, category, updateSort}) => {
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
};

const mapDispatchToProps = (dispatch, location) => {
	const category = location.match.params.category;
	const api = !category ? searchApis.fetchPosts : searchApis.fetchPostsByCategory;

	return {
		getPosts: (() => {
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
	debugger;
	return {
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));