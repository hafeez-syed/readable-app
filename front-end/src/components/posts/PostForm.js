import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import v1 from 'uuid/v1';
import * as searchApis from '../../utils/apis';
import { postsAddedAction, postUpdatedAction } from '../../actions/posts';

class PostNew extends Component {
	state = {
		title: '',
		category: '',
		body: '',
		author: ''
	};

	componentWillMount() {
		let props = this.props;
		const match = props.match;
		const path = match.path;
		const postId = match.params.postId;
		const posts = props.posts;

		if(path.indexOf('edit') > -1) {
			const post = _.head(posts.filter(function(post) {
				return post.id === postId
			}));

			const stateMapping = {
				title: post.title,
				body: post.body,
				author: post.author,
				category: post.category
			};

			this.updateState(stateMapping);
		}
	};

	onChangeHandler = (eve) => {
		eve.preventDefault();
		const state = this.state;
		state[eve.target.name] = eve.target.value;
		this.setState(state);
	};

	updateState = (stateMapping) => {
		this.setState(stateMapping);
	};

	render() {
		const state = this.state;
		const props = this.props;
		const match = props.match;
		const type = (match.path.indexOf('edit') > -1) ? 'edit' : 'new';
		const disabled = type === 'edit' ? 'disabled' : '';
		const categories = props.categories;
		const {title, body, author, category} = state;
		const onSubmitHandler = (eve) => {
			eve.preventDefault();
			if(type === 'new') {
				props.addPost(state);
			} else {
				props.updatePost({id: match.params.postId, title: this.state.title, body: this.state.body });
			}
			props.history.push('/');
		};

		return (
			<div className="sorting-wrapper position-default">
				<form className="todo__form" onSubmit={onSubmitHandler}>
					<h3>{type === 'new' ? 'Add new post' : 'Edit post' }</h3>

					<input name="title" value={title} type="text" placeholder="Title" onChange={this.onChangeHandler} />

					{type === 'new' ?
						<select name="category" onChange={this.onChangeHandler}>
							{
								categories && categories.length && categories.map((category, index) => (
									<option key={index} value={category.name}>{_.capitalize(category.name)}</option>
								))
							}
						</select>
						:
						<input name="category" disabled="disabled" type="text" value={`Category: ${_.capitalize(category)}`} />
					}

					<textarea onChange={this.onChangeHandler} name="body" value={body} type="text" placeholder="Description"></textarea>

					<input name="author" disabled={disabled} type="text" value={author} placeholder="Author" onChange={this.onChangeHandler} />

					<button type="submit" >Submit post</button>
				</form>
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (data) => {
			const formData = {
				...data,
				timestamp: Date.now(),
				id: v1()
			};

			return searchApis.addPost(formData)
				.then(function(data) {
					dispatch(postsAddedAction(
						{
							...formData,
							...data
						}
					))
				} );
		},
		updatePost: (data) => {
			return searchApis.updatePost(data)
				.then(function(response) {
					dispatch(postUpdatedAction(
						data.id,
						data.title,
						data.body
					))
				} );
		}
	}
};


const mapStateToProps = ({ categories, posts }) => {
	return {
		categories,
		posts
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostNew));