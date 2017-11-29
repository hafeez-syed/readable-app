import React from 'react';
import {TiThumbsUp, TiArrowSortedDown, TiArrowSortedUp, TiTime, TiDocumentAdd} from 'react-icons/lib/ti';

const SortList = (sortPost) => {
    console.log(sortPost);
    const updateSort = sortPost.updateSort;
    return (
        <div className='sorting-wrapper'>
            <h2>Sort</h2>
            <div className='sort-list'>
                <div className='sorting-logo' title='Sort by vote'>
                    <TiThumbsUp size={60} />
                    <a onClick={() => updateSort('voteScore', 'up')}><TiArrowSortedUp size={30} /></a>
                    <a onClick={() => updateSort('voteScore', 'down')}><TiArrowSortedDown size={30} /></a>
                </div>
                <div className='sorting-logo' title='Sort by time'>
                    <TiTime size={60} />
                    <a onClick={() => updateSort('timestamp', 'up')}><TiArrowSortedUp size={30} /></a>
                    <a onClick={() => updateSort('timestamp', 'down')}><TiArrowSortedDown size={30} /></a>
                </div>
            </div>

            <p>&nbsp;</p>

            <h2>Post</h2>
            <div className='sort-list'>
                <div className='sorting-logo' title='Add new post'>
                    <TiDocumentAdd size={60} />
                </div>
            </div>
        </div>
    )
};

export default SortList;