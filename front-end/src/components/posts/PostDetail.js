import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../../actions/';
import _ from 'lodash';
import Moment from 'react-moment';
import {TiHeart} from 'react-icons/lib/ti/';
import {FaComments} from 'react-icons/lib/fa/';

class PostDetail extends Component {
    render() {
	    const props = this.props;
	    const postId = this.props.match.params.postId;
	    let post = {};
	    let title = '';
	    let category = '';
	    let body = '';
	    let author = '';
	    let time = '';

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
                        <div className='category'>
                            <label>Category</label>
					        {_.capitalize(post.category)}
                        </div>
                        <div className='date-time'>
                            <label>Time</label>
                            <Moment format="MMMM Do YYYY, h:mm:ss a">
						        {post.timestamp}
                            </Moment>
                        </div>
                        <div className='votes'>
                            <label>Votes</label>
                            <TiHeart className="icon-heart" size={30} />
					        {post.voteScore}
                        </div>
                        <div className='votes'>
                            <label>Comments</label>
                            <FaComments className="icon-comment" size={30} />
					        {post.voteScore}
                        </div>
                    </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetail));