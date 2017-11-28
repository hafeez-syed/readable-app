import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const CategoryList = ({categories}) => {
	debugger;
    const allCategories = categories;
    return (
        <div className='categories-wrapper'>
            <h2>Categories</h2>
            <ul>
                {
	                allCategories && allCategories.length && allCategories.map((cat) => (
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

export default CategoryList;