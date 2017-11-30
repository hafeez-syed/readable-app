import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import { Category, PostList, PostNew } from './';

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
						path="/categories/:category"
					    component={Category}
					/>
					<Route
						path="/post/new"
						component={PostNew}
					/>
			</Switch>
			</div>
		)
	}
}



export default Inner;