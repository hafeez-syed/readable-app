import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from './Wrapper';

import * as categoriesAction from '../actions/categories';
import * as postsActions from '../actions/posts';
import * as commentsActions from '../actions/comments';

const mapStateToProps = ({categoriesAction, postsActions, commentsActions}) => {
    return {
        categoriesAction,
        postsActions,
        commentsActions
    };
};

const App = withRouter(connect(mapStateToProps, {categoriesAction, postsActions, commentsActions} )(Wrapper));

export default App;