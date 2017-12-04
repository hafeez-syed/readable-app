import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import _ from 'lodash';
import { actions } from '../../actions/';
import {TiTimes, TiHeart, TiEdit} from 'react-icons/lib/ti/';
import {FaCommentO} from 'react-icons/lib/fa/';

class CommentSingle extends Component {
    render() {
	    const { comment } = this.props;
	    return (
            <div className='single-comment overflow-auto'>
                <div className='grid-logo comment-bubble'>
                    <FaCommentO size={40} />
                </div>
                <div className='author'>
				    {_.capitalize(comment.author)} -
	                <Moment className='date-time' format="MMMM Do YYYY, h:mm:ss a">
		                {comment.timestamp}
	                </Moment>
                </div>
                <div className='body'>
	                {comment.body}
                </div>
                <div className='votes'>
	                <div className="text-align-left">
		                <TiHeart className="icon-heart" size={30} />
		                {comment.voteScore}
	                </div>
                </div>
	            <div className="post-controls">
		            <TiEdit size={40} />
		            Edit comment
		            <TiTimes size={40} />
		            Delete comment
	            </div>
            </div>
	    )
    }
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCommentsForPost: (postId) => {
			dispatch(actions.postsSingleAction(postId));
		}
	}
};

const mapStateToProps = ({posts}) => {
	return {
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentSingle));