import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MdLibraryBooks from 'react-icons/lib/md/library-books';

import '../App.css';

import CategoryList from '../components/CategoryList';
import Inner from '../components/Inner';
import SortList from './SortList';
import { actions } from '../actions/';
import * as searchApis from '../utils/apis';

class Wrapper extends Component {
    state = {
        postOrder: 'asc',
        categories: [],
        posts: [],
        comment: [],

    };

    /*,

     fetchCategories()
     .then((data) => {
     console.log('data');
     console.log(data);
     this.setState({categories: data.categories});
     });

     fetchPosts()
     .then((posts) => {
     console.log('posts');
     console.log(posts);
     this.setState({post: posts});
     })*/

    componentDidMount() {
	    /*this.setState({categories: this.props.categories()});
        const posts = this.props.posts();*/


	    searchApis.fetchCategories()
		    .then((data) => {
			    console.log('data');
			    console.log(data);
			    this.setState({categories: data});
		    });

	    searchApis.fetchPosts()
		    .then((posts) => {
			    console.log('posts');
			    console.log(posts);
			    this.setState({posts: posts});
		    })
    };

    updateSort = (type, order) => {
        console.log(type, order);
        this.setState({postOrder: order});
    };

    render() {
        return (
            <div className="container">

                <header className="App-header">
                    <Link to="/">
                        <MdLibraryBooks size={60} />
                        <h1 className="App-title">Readable</h1>
                    </Link>
                </header>

                <CategoryList categories={this.state.categories} />

                <Inner />

                <SortList updateSort={this.updateSort} />
            </div>
    );
  }
}

export default withRouter(connect(undefined, {categories: actions.fetchCategories, posts: actions.fetchPosts})(Wrapper));
