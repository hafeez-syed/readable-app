import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CategoryList = (categories) => {
    const allCategories = categories.categories;
    return (
        <div className='categories-wrapper'>
            <h2>Categories</h2>
            <ul>
                {
                    allCategories.length && allCategories.map((cat) => (
                        <li className='categories-list' key={cat.path}>
                            <Link to={`/categories/${cat.name}`} >
                                {_.capitalize(cat.name)}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

const mapStateToProps = ({category}) => ({
    category
});

export default connect(mapStateToProps)(CategoryList);