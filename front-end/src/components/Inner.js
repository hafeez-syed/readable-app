import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { Category, PostList, PostForm, PostDetail, CommentEdit } from './';

class Inner extends Component {
	render() {
		return (
			<div className="inner-content">
				<Switch>
					<Route
						exact
						path="/"
						component={PostList}
					/>
					<Route
						path="/comment/:commentId/edit"
						component={CommentEdit}
					/>
				<Route
						path="/post/new"
						component={PostForm}
					/>
					<Route
						path="/:category/:postId/edit"
						component={PostForm}
					/>
					<Route
						path="/:category/:postId/detail"
						component={PostDetail}
					/>
					<Route
						path="/:category"
					    component={Category}
					/>
			</Switch>
			</div>
		)
	}
}

export default Inner;