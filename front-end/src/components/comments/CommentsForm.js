import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../actions/';
import _ from 'lodash';
import Moment from 'react-moment';
import {TiHeart, TiTrash, TiEdit} from 'react-icons/lib/ti/';
import {FaComments} from 'react-icons/lib/fa/';

class CommentsForm extends Component {

    render() {
	    const { onSubmitHandler } = this.props;
	    const onChangeHandler = () => {

	    };
	    return (
	        <div>
                <h3 className="title-heading"> </h3>

		        <div className="post-new sorting-wrapper position-default">
			        <form className="todo__form" onSubmit={onSubmitHandler}>
				        <h3>Add a comment</h3>

				        <textarea onChange={onChangeHandler} name="body" value="body" type="text" placeholder="Description"></textarea>

				        <input name="author" type="text" value="Author" onChange={onChangeHandler} />

				        <button type="submit" >Submit post</button>
			        </form>
		        </div>


	        </div>
	    )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
	    getPostDetailFromState: (postId) => {
	        dispatch(actions.postsSingleAction(postId));
        }
    }
};

const mapStateToProps = ({posts}) => {
    return {
        posts
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsForm));