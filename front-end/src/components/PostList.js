import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from '../actions/';
import PostSingle from './PostSingle';
import SortList from './SortList';
import * as searchApis from '../utils/apis';

const PostList = ({posts, order, type, category}) => {
    const allPosts = posts;
	const sorting = !category ? <SortList/> : '';
	const postType = type ? type : 'title';
	const postOrder = order === 'up' ? 'asc' : 'desc';
    return (
        <div>
	        {sorting}
            <div className='posts-wrapper'>
                <ul>
			        {
				        allPosts && allPosts.length && _.orderBy(allPosts, postType, postOrder).map((post) => (
                            <li className='posts-list' key={post.id}>
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
				.then((data) => dispatch(actions.postsAction(data)));
		})()
	}
};

const mapStateToProps = ({ posts }) => {
	return {
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));