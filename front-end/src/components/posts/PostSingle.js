import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import _ from 'lodash';
import { postDeletedAction, postsSingleAction } from '../../actions/posts';
import { commentDeletedAllAction } from '../../actions/comments';
import {TiTags, TiHeart, TiTrash, TiEdit} from 'react-icons/lib/ti/';
import Badge from 'material-ui/Badge'
import {FaCommentsO} from 'react-icons/lib/fa/';

class PostSingle extends Component {
    render() {
	    const { post, comments, removePost } = this.props;
	    const onPostDeleteHandler = (postId) => {
		    removePost(postId);
	    };
	    return (
            <div className='single-post'>
                <div className='grid-logo'>
                    <TiTags size={40} />
                </div>
                <div className='category'>
				    {_.capitalize(post.category)}
                </div>
                <div className='title'>
                    <Link to={`/${post.category}/${post.id}/detail`}>
					    {post.title}
                    </Link>
                </div>
                <div className='date-time'>
                    <Moment format="MMMM Do YYYY, h:mm:ss a">
					    {post.timestamp}
                    </Moment>
                </div>
                <div className='votes'>
	                <Badge
		                badgeContent={post.voteScore}
		                primary={true}
		                badgeStyle={{top: 4, right: 4}}
	                >
		                <TiHeart className="icon-heart" size={30} />
	                </Badge>
				    {}
                </div>
                <div className='votes'>
	                <Badge
		                badgeContent={comments.length}
		                secondary={true}
		                badgeStyle={{top: 4, right: 4}}
	                >
	                    <FaCommentsO className="icon-comment" size={30} />
	                </Badge>
                </div>
	            <div className="post-controls line-height-70">
		            <Link to={`/${post.category}/${post.id}/edit`}>
			            <TiEdit size={30}/>
		            </Link>
		            Edit
		            <a title="Remove post" onClick={() => onPostDeleteHandler(post.id)}>
			            <TiTrash size={30}/>
		            </a>
		            Delete
	            </div>
            </div>
	    )
    }
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCommentsForPost: (postId) => {
			dispatch(postsSingleAction(postId));
		},
		removePost: (postId) => {
			dispatch(postDeletedAction(postId));
			dispatch(commentDeletedAllAction(postId));
		}
	}
};

const mapStateToProps = ({posts}) => {
	return {
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSingle));