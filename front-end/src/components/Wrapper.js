import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MdLibraryBooks from 'react-icons/lib/md/library-books';

import '../App.css';

import CategoryList from '../components/CategoryList';
import Inner from '../components/Inner';

class Wrapper extends Component {
	/* 	<SortList updateSort={this.updateSort} /> */
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

                <CategoryList />

                <Inner />

            </div>
    );
  }
}
export default Wrapper;
