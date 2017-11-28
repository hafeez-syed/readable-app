import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import PostList from './PostList';
import { Category } from './';

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
				</Switch>
			</div>
		)
	}
}



export default Inner;