import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentsForm from './CommentsForm';

const CommentEdit = () => {
	return (
		<div>
			<CommentsForm type={'edit'} />
		</div>
	)
};


export default withRouter(CommentEdit);