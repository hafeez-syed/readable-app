import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import _ from 'lodash';
import { actions } from '../../actions/';
import {TiTags, TiHeart} from 'react-icons/lib/ti/';
import {FaComments} from 'react-icons/lib/fa/';

class PostSingle extends Component {
    render() {
	    const { post, comments } = this.props;
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
                    <TiHeart className="icon-heart" size={30} />
				    {post.voteScore}
                </div>
                <div className='votes'>
                    <FaComments className="icon-comment" size={30} />
				    {comments.length}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSingle));