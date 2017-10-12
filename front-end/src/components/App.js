import React, { Component } from 'react';
import '../App.css';
import CategoryList from '../components/CategoryList';
import PostList from '../components/PostList';
import SortList from './SortList';
import { fetchCategories, fetchPosts } from '../utils/apis';
import MdLibraryBooks from 'react-icons/lib/md/library-books';

class App extends Component {
    state = {
        categories: [],
        post: [],
        comment: [],

    };

    componentDidMount() {
        fetchCategories()
            .then((data) => {
                this.setState({categories: data.categories});
            });

        fetchPosts()
            .then((posts) => {
                console.log('posts');
                console.log(posts);
                this.setState({posts});
            })
    };

    updateSort = (type, order) => {
        console.log(type, order);
    };

    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <MdLibraryBooks size={60} />
                    <h1 className="App-title">Readable</h1>
                </header>
                <CategoryList categories={this.state.categories} />
                <PostList posts={this.state.posts} />
                <SortList updateSort={this.updateSort} />
            </div>
    );
  }
}

export default App;
