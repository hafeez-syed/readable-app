import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MdLibraryBooks from 'react-icons/lib/md/library-books';
import { connect } from 'react-redux';
import categoriesAction from '../actions/categories';
import { postsLoadedAction } from '../actions/posts';
import { commentsLoadedAction } from '../actions/comments';

import * as searchApis from '../utils/apis';

import '../App.css';

import Home from '../components/Home';
import CategoryList from './categories/CategoryList';
import Inner from '../components/Inner';

class Wrapper extends Component {
	componentWillMount() {
		if(this.props.location.pathname === '/') {
			this.props.getAllCategories();
			this.props.getAllPosts();
		}
	}
	render() {
	    const {categories, comments} = this.props;
        return (
            <div className="container">
                <header className="App-header">
                    <Link to="/">
                        <MdLibraryBooks size={60} />
                        <h1 className="App-title">Readable</h1>
                    </Link>
                </header>

                <Home />

                <CategoryList categories={categories} />

                <Inner comments={comments} />

            </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllCategories: () => {
			return searchApis.fetchCategories()
				.then((data) => dispatch(categoriesAction(data)));
		},
		getAllPosts: () => {
			return searchApis.fetchPosts()
				.then(function(data) {
				    dispatch(postsLoadedAction(data));
				    data.map( ({id}) => {
				        return searchApis.fetchCommentsById(id)
                            .then(function(comment) {
	                            dispatch(commentsLoadedAction(comment));
                            })
				    });
				});
		}
	}
};

const mapStateToProps = ({ categories, posts, comments }) => {
	return {
		categories,
		posts,
        comments
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));
