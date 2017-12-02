import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Moment from 'react-moment';
import {TiTags, TiHeart} from 'react-icons/lib/ti/';
import {FaComments} from 'react-icons/lib/fa/';

const PostSingle = ({post}) => {
    return (
        <div className='single-post'>
            <div className='grid-logo'>
                <TiTags size={40} />
            </div>
            <div className='category'>
                {_.capitalize(post.category)}
            </div>
            <div className='title'>
                <Link to={`/post/${post.id}`}>
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
                {post.voteScore}
            </div>
        </div>
    )
};

export default PostSingle;