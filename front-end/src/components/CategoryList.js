import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from '../actions/';
import * as searchApis from '../utils/apis';

const CategoryList = ({categories, location}) => {
    const pathName = location.pathname;
    return (
        <div className='categories-wrapper'>
            <h3>Categories</h3>
            <ul>
                {
                categories.map((cat, ind) => (
                        <li className='categories-list' key={ind}>
                            {pathName === `/categories/${cat.name}` ?
                                _.capitalize(cat.name)
                                :                        
                                <Link to={`/categories/${cat.name}`} >
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

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: (() => {
            return searchApis.fetchCategories()
                        .then((data) => dispatch(actions.categoriesAction(data)));
        })()
    }
};

const mapStateToProps = ({ categories }) => {
    return {
        categories 
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryList));