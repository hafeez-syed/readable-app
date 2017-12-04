import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';
import { Category, PostList, PostNew, PostDetail } from './';

class Inner extends Component {
	render() {
		const { categories, posts } = this.props;
		return (
			<div className="inner-content">
				<Switch>
					<Route
						exact
						path="/"
						component={PostList}
					/>
					<Route
						path="/categories/:category"
					    component={Category}
					/>
					<Route
						path="/post/new"
						component={PostNew}
					    categories={categories}
					/>
					<Route
						path="/post/:postId"
						component={PostDetail}
					    posts={posts}
					/>
				</Switch>
			</div>
		)
	}
}

const mapStateToProps = ({ categories, posts }) => {
	return {
		categories,
		posts
	}
};

export default withRouter(connect(mapStateToProps)(Inner));