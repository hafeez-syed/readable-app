import React from 'react';
import { Link } from 'react-router-dom';
import {TiThumbsUp, TiThumbsDown, TiTime, TiDocumentAdd} from 'react-icons/lib/ti';

const SortList = (sortPost) => {
    const updateSort = sortPost.updateSort;
    const posts = sortPost.posts;
    return (
        <div className='sorting-wrapper'>
            <h2>Sort</h2>
            <div className='sort-list'>
                <div className='sorting-logo' title='Sort by vote'>
                    <a onClick={() => updateSort(posts, 'voteScore', 'up')}><TiThumbsUp size={60} /></a>
                    <a onClick={() => updateSort(posts, 'voteScore', 'down')}><TiThumbsDown size={60} /></a>
                </div>
                <div className='sorting-logo' title='Sort by time'>
                    <a onClick={() => updateSort(posts, 'timestamp', 'up')}><TiTime size={60} /></a>
                    <a onClick={() => updateSort(posts, 'timestamp', 'down')}><TiTime className="flip-vertical" size={60} /></a>
                </div>
            </div>

            <p>&nbsp;</p>

            <h2>Post</h2>
            <div className='sort-list'>
                <div className='sorting-logo' title='Add new post'>
                    <Link to="/post/new">
                        <TiDocumentAdd size={60} />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SortList;