import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { CategorySingle, PostList, PostForm, PostDetail, CommentEdit, PageNotFound } from './';

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
						path="/404"
						component={PageNotFound}
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
					    component={CategorySingle}
					/>
					<Redirect to="/404"/>
				</Switch>
			</div>
		)
	}
}

export default Inner;