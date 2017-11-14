import React, { Component } from 'react';
import '../App.css';
import CategoryList from '../components/CategoryList';
import PostList from '../components/PostList';
import SortList from './SortList';
import { fetchCategories, fetchPosts } from '../utils/apis';
import MdLibraryBooks from 'react-icons/lib/md/library-books';

class App extends Component {
    state = {
        postOrder: 'asc',
        categories: [],
        post: [],
        comment: [],

    };

    componentDidMount() {
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
                    <MdLibraryBooks size={60} />
                    <h1 className="App-title">Readable</h1>
                </header>
                <CategoryList categories={this.state.categories} />
                <PostList posts={this.state.post} order={this.state.postOrder} />
                <SortList updateSort={this.updateSort} />
            </div>
    );
  }
}

export default App;
