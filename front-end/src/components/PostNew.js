import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {TiHome} from 'react-icons/lib/ti';

const PostNew = (props) => {
	const pathName = props.location.pathname;
	return (
		<div className="post-new">
			New Form
		</div>
	)
};

export default withRouter(PostNew);
