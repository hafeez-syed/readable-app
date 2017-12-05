import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentsForm from '../comments/CommentsForm';
import CommentsList from '../comments/CommentsList';
import * as searchApis from '../../utils/apis';
import { actions } from '../../actions/';
import _ from 'lodash';
import Moment from 'react-moment';
import {TiThumbsUp, TiThumbsDown, TiTrash, TiEdit} from 'react-icons/lib/ti/';

class PostDetail extends Component {
    render() {
	    const { posts, comments, match, updateVote } = this.props;
	    const postId = match.params.postId;
	    const onVoteUpdateHandler = (vote) => {
			updateVote({id: postId, voteData: {option: vote+'Vote'}});
	    };
	    const post = _.head(posts.filter(function(post) {
	    	return post.id === postId
	    }));
	    const postComments = comments.filter(function(comment) {
	    	return comment.parentId === postId
	    });

	    return (
	        <div>
                <h3 className="title-heading">{post.title}</h3>
                <div className="sorting-wrapper overflow-auto position-default">
                    <div className='single-post'>
                        <div className='body line-items'>
                            <label>Description:</label>
	                        <span>
		                        {post.body}
	                        </span>
                        </div>
                        <div className='category line-items'>
                            <label>Category:</label>
	                        <span>
						        {_.capitalize(post.category)}
	                        </span>
                        </div>
	                    <div className='author line-items'>
		                    <label>Author:</label>
		                    <span>
		                        {post.author}
	                        </span>
	                    </div>
                        <div className='date-time line-items'>
                            <label>Time:</label>
                            <Moment format="MMMM Do YYYY, h:mm:ss a">
						        <span>{post.timestamp}</span>
                            </Moment>
                        </div>
                        <div className='votes line-items'>
                            <label>Votes:</label>
					        {post.voteScore}
                        </div>
                        <div className='votes line-items'>
                            <label>Comments</label>
					        {postComments.length}
                        </div>
	                    <div className='sorting-logo float-left'>
		                    <a title="ASC" onClick={() => onVoteUpdateHandler('up')}><TiThumbsUp size={60} /></a>
		                    <a title="DESC" onClick={() => onVoteUpdateHandler('down')}><TiThumbsDown size={60} /></a>
	                    </div>

	                    <div className="post-controls">
		                    <Link to={`/post/${postId}/edit`}>
			                    <TiEdit size={60} />
		                    </Link>
		                    Edit
		                    <TiTrash size={60} />
		                    Delete
	                    </div>
                    </div>
                </div>

		        <CommentsForm parentId={postId} />

		        <CommentsList comments={postComments}  />

	        </div>
	    )
    }
}

const mapDispatchToProps = (dispatch) => {
	const api = searchApis.updatePostVote;

	return {
		updateVote: (postData) => {
			return api(postData)
				.then(function(data) {
					dispatch(actions.postVoteUpdatedAction(
						postData.id,
						postData.voteData.option
					))
				});
		}
	}
};

const mapStateToProps = ({ posts, comments}) => {
    return {
        posts,
	    comments
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));