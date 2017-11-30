import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Wrapper from './Wrapper';
import { actions } from '../actions/';

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        posts: state.posts,
        comments: state.comments,
        sorting: state.sorting
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));

export default App;