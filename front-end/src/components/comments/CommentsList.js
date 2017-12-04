import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentSingle from './CommentSingle';

const CommentsList = ({ comments }) => {
	if(comments && comments.length) {
		return (
			<div>
				<h3>Comments</h3>
				<div className="sorting-wrapper overflow-auto position-default">
					{
						comments.map((comment, index) => (
							<CommentSingle key={index} comment={comment} />
						))
					}
				</div>
			</div>
		)
	} else {
		return (<div></div>)
	}
};


export default withRouter(CommentsList);