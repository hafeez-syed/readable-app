import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import v1 from 'uuid/v1';
import * as searchApis from '../../utils/apis';
import { actions } from '../../actions/index';

class PostNew extends Component {
	state = {
		title: '',
		category: '',
		body: '',
		author: ''
	};

	onChangeHandler = (eve) => {
		eve.preventDefault();
		const state = this.state;
		state[eve.target.name] = eve.target.value;
		this.setState(state);
	};

	render() {
		const state = this.state;
		const props = this.props;
		const categories = props.categories;
		const {title, body, author} = state;
		const onSubmitHandler = (eve) => {
			eve.preventDefault();
			props.addPost(state);
		};

		return (
			<div className="post-new sorting-wrapper position-default">
				<form className="todo__form" onSubmit={onSubmitHandler}>
					<h3>Add new post</h3>

					<input name="title" value={title} type="text" placeholder="Title" onChange={this.onChangeHandler} />

					<select name="category" onChange={this.onChangeHandler}>
						{
							categories && categories.length && categories.map((category, index) => (
								<option key={index} value={category.name}>{_.capitalize(category.name)}</option>
							))
						}
					</select>

					<textarea onChange={this.onChangeHandler} name="body" value={body} type="text" placeholder="Description"></textarea>

					<input name="author" type="text" value={author} placeholder="Author" onChange={this.onChangeHandler} />

					<button type="submit" >Submit post</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch) => {
	const api = searchApis.addPost;

	return {
		addPost: (data) => {
			const formData = {
				...data,
				timestamp: Date.now(),
				id: v1()
			};

			return api(formData)
				.then(function(data) {
					dispatch(actions.postsAddedAction(
						{
							...formData,
							...data
						}
					))
				} );
		}
	}
};


const mapStateToProps = ({ categories }) => {
	return {
		categories
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostNew));