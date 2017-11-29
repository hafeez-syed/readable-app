import React from 'react';
import _ from 'lodash';
import Grid from 'react-icons/lib/ti/th-small';

const PostSingle = ({post}) => {
    return (
        <div className='single-post'>
            <div className='grid-logo'>
                <Grid size={16} />
            </div>
            <div className='category'>
                {_.capitalize(post.category)}
            </div>
            <div className='title'>
                {post.title}
            </div>
            <div className='votes'>
                {post.voteScore}
            </div>
        </div>
    )
};

export default PostSingle;