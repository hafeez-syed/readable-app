import React from 'react';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';

const CategoryList = ({categories, location}) => {
    const pathName = location.pathname;
    return (
        <div className='categories-wrapper'>
            <h3>Categories</h3>
            <ul>
                {
                categories.map((cat, ind) => (
                        <li className='categories-list' key={ind}>
                            {pathName === `/${cat.name}` ?
                                _.capitalize(cat.name)
                                :                        
                                <Link to={`/${cat.name}`} >
                                    {_.capitalize(cat.name)}
                                </Link>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default withRouter(CategoryList);