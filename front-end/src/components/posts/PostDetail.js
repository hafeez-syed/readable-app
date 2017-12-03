import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../actions/';
import CommentsForm from '../comments/CommentsForm';
import _ from 'lodash';
import Moment from 'react-moment';
import {TiHeart, TiTrash, TiEdit} from 'react-icons/lib/ti/';
import {FaComments} from 'react-icons/lib/fa/';

class PostDetail extends Component {
    render() {
	    const props = this.props;
	    const postId = this.props.match.params.postId;
	    let post = {};
	    const onSubmitHandler = () => {

	    };

	    if(this.props.posts.length) {
	        if(this.props.posts.length !== 1) {
		        this.props.getPostDetailFromState(postId);

            } else {
	            post = _.head(props.posts);
            }
        }
	    return (
	        <div>
                <h3 className="title-heading">{post.title}</h3>
                <div className="post-new sorting-wrapper position-default">
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
					        {post.voteScore}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));