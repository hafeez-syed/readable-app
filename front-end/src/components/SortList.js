import React from 'react';
import { Link } from 'react-router-dom';
import {TiThumbsUp, TiThumbsDown, TiTime, TiDocumentAdd} from 'react-icons/lib/ti';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const SortList = (props) => {
    const updateSort = props.updateSort;
    const posts = props.posts;
	return (
        <div className='sorting-wrapper'>
            <div className='sort-list'>
                <h4>Sort by votes</h4>
                <div className='sorting-logo'>
                    <a title="ASC" onClick={() => updateSort(posts, 'voteScore', 'up')}><TiThumbsUp size={60} /></a>
                    <a title="DESC" onClick={() => updateSort(posts, 'voteScore', 'down')}><TiThumbsDown size={60} /></a>
                </div>
                <h4>Sort by time</h4>
                <div className='sorting-logo'>
                    <a title="ASC" onClick={() => updateSort(posts, 'timestamp', 'up')}><TiTime size={60} /></a>
                    <a title="DESC" onClick={() => updateSort(posts, 'timestamp', 'down')}><TiTime className="flip-vertical" size={60} /></a>
                </div>
            </div>

            <p>&nbsp;</p>

            <div className='sort-list text-align-center'>
                <h4>Add new post</h4>
                <div className='sorting-logo' title='Add new post'>
                    <Link to="/post/new">
                        <FloatingActionButton secondary={true}>
                            <TiDocumentAdd size={40} />
                        </FloatingActionButton>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SortList;