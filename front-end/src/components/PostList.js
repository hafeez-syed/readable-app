import React from 'react';
import _ from 'lodash';
import Grid from 'react-icons/lib/ti/th-small';

const PostList = ({posts, order, type}) => {
    const allPosts = posts;
    const postType = type ? type : 'title';
    const postOrder = order === 'up' ? 'asc' : 'desc';
    return (
        <div className='posts-wrapper'>
            <ul>
                {
                    allPosts && allPosts.length && _.orderBy(allPosts, postType, postOrder).map((post) => (
                        <li className='posts-list' key={post.id}>
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
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default PostList;