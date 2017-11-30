import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';

import { Category, PostList, PostNew } from './';

class Inner extends Component {
	render() {
		const { categories } = this.props;
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
			</Switch>
			</div>
		)
	}
}

const mapStateToProps = ({ categories }) => {
	return {
		categories
	}
};

export default withRouter(connect(mapStateToProps)(Inner));