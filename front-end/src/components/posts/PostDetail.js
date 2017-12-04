import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentsForm from '../comments/CommentsForm';
import CommentsList from '../comments/CommentsList';
import _ from 'lodash';
import Moment from 'react-moment';
import {TiHeart, TiTrash, TiEdit} from 'react-icons/lib/ti/';
import {FaComments} from 'react-icons/lib/fa/';

class PostDetail extends Component {
    render() {
	    const { posts, comments, match } = this.props;
	    const postId = match.params.postId;
	    const onSubmitHandler = () => {

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
                        <div className='category line-items'>
                            <label>Category:</label>
	                        <span>
						        {_.capitalize(post.category)}
	                        </span>
                        </div>
                        <div className='date-time line-items'>
                            <label>Time:</label>
                            <Moment format="MMMM Do YYYY, h:mm:ss a">
						        <span>{post.timestamp}</span>
                            </Moment>
                        </div>
                        <div className='votes line-items'>
                            <label>Votes</label>
                            <TiHeart className="icon-heart" size={30} />
					        {post.voteScore}
                        </div>
                        <div className='votes line-items'>
                            <label>Comments</label>
                            <FaComments className="icon-comment" size={30} />
					        {postComments.length}
                        </div>
	                    <div className="post-controls">
		                    <TiEdit size={60} />
		                    Edit
		                    <TiTrash size={60} />
		                    Delete
	                    </div>
                    </div>
                </div>

		        <CommentsForm onSubmitHandler={onSubmitHandler} />

		        <CommentsList comments={postComments}  />

	        </div>
	    )
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
	    getPostDetailFromState: (postId) => {
	        dispatch(actions.postsSingleAction(postId));
        }
    }
};
*/
const mapStateToProps = ({ posts, comments}) => {
    return {
        posts,
	    comments
    }
};

export default withRouter(connect(mapStateToProps)(PostDetail));