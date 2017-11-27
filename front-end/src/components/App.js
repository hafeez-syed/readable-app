import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';
import { actions } from '../actions/';

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        posts: state.posts,
        comments: state.comments,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App