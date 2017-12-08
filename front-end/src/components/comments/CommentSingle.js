import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import _ from 'lodash';
import * as searchApis from '../../utils/apis';
import { commentVoteUpdatedAction, commentDeletedSingleAction } from '../../actions/comments';
import {TiTimes, TiHeart, TiEdit, TiThumbsUp, TiThumbsDown} from 'react-icons/lib/ti/';
import {FaCommentO} from 'react-icons/lib/fa/';
import Badge from 'material-ui/Badge'

class CommentSingle extends Component {
    render() {
	    const { comment, updateVote, removeComment } = this.props;
	    const onCommentDeleteHandler = (commentId) => {
	    	removeComment(commentId);
	    };
	    const onVoteUpdateHandler = (vote) => {
		    updateVote({id: comment.id, voteData: {option: vote+'Vote'}});
	    };
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
		                <Badge
		                    badgeContent={comment.voteScore}
		                    primary={true}
		                >
			                <TiHeart className="icon-heart" size={30} />
		                </Badge>
	                </div>
                </div>
	            <div className='sorting-logo float-left'>
		            <a title="ASC" onClick={() => onVoteUpdateHandler('up')}><TiThumbsUp size={40} /></a>
		            <a title="DESC" onClick={() => onVoteUpdateHandler('down')}><TiThumbsDown size={40} /></a>
	            </div>
				<div className="post-controls">
					<Link to={`/comment/${comment.id}/edit`}>
			            <TiEdit size={40} />
					</Link>
		            Edit comment
					<a title="Remove comment" onClick={() => onCommentDeleteHandler(comment.id)}>
			            <TiTimes size={40} />
					</a>
		            Delete comment
	            </div>
            </div>
	    )
    }
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateVote: (postData) => {
			return searchApis.updateCommentVote(postData)
				.then(function(data) {
					dispatch(commentVoteUpdatedAction(
						postData.id,
						postData.voteData.option
					))
				});
		},
		removeComment: (commentId) => {
			dispatch(commentDeletedSingleAction(commentId));
		}
	}
};

export default withRouter(connect(undefined, mapDispatchToProps)(CommentSingle));