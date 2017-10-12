import React from 'react';
import _ from 'lodash';

const CategoryList = (categories) => {
    const allCategories = categories.categories;
    return (
        <div className='categories-wrapper'>
            <h2>Categories</h2>
            <ul>
                {
                    allCategories.length && allCategories.map((cat) => (
                        <li className='categories-list' key={cat.path}>{_.capitalize(cat.name)}</li>
                    ))
                }
            </ul>
        </div>
    )
};

export default CategoryList;