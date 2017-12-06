import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import _ from 'lodash';
import * as searchApis from '../../utils/apis';
import { actions } from '../../actions/';
import {TiTimes, TiHeart, TiEdit, TiThumbsUp, TiThumbsDown} from 'react-icons/lib/ti/';
import {FaCommentO} from 'react-icons/lib/fa/';

class CommentSingle extends Component {
    render() {
	    const { comment, updateVote } = this.props;
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
		                <TiHeart className="icon-heart" size={30} />
		                {comment.voteScore}
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
		            <TiTimes size={40} />
		            Delete comment
	            </div>
            </div>
	    )
    }
};

const mapDispatchToProps = (dispatch) => {
	const api = searchApis.updateCommentVote;

	return {
		updateVote: (postData) => {
			return api(postData)
				.then(function(data) {
					dispatch(actions.commentVoteUpdatedAction(
						postData.id,
						postData.voteData.option
					))
				});
		}
	}
};

export default withRouter(connect(undefined, mapDispatchToProps)(CommentSingle));