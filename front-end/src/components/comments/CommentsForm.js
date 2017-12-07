import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import v1 from 'uuid/v1';
import * as searchApis from '../../utils/apis';
import { commentsAddedAction, commentUpdatedAction } from '../../actions/comments';

class CommentsForm extends Component {
	state = {
		id: '',
		parentId: '',
		body: '',
		author: ''
	};

	componentWillMount() {
		const type = this.props.type;

		if(type === 'edit') {
			const commentId = this.props.match.params.commentId;
			const comments = this.props.comments;

			const comment = _.head(comments.filter(function(comment) {
				return comment.id === commentId;
			}));
			const stateMapping = {
				id: commentId,
				body: comment.body,
				author: comment.author
			};
	
			this.updateState(stateMapping);	
		}
	};

	updateState = (stateMapping) => {
		this.setState(stateMapping);
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
		const parentId = props.parentId;
		const type = props.type;
		const disabled = type === 'edit' ? 'disabled' : '';
		const {body, author} = state;
		const onSubmitHandler = (eve) => {
			eve.preventDefault();
			const state = this.state;
			if(type === 'new') {
				state['parentId'] = parentId;
				props.addComment(state);
			} else {
				props.updateComment({id: this.state.id, author: this.state.author, body: this.state.body });
			}
			props.history.goBack();
		};

		return (
	        <div>
                <h3 className="title-heading"> </h3>

		        <div className="sorting-wrapper position-default">
			        <form className="todo__form" onSubmit={onSubmitHandler}>
				        <h3>Add a comment</h3>

				        <textarea onChange={this.onChangeHandler} name="body" value={body} type="text" placeholder="Comment"></textarea>

				        <input name="author" disabled={disabled} type="text" value={author} onChange={this.onChangeHandler} placeholder="Author" />

				        <button type="submit">Submit post</button>
			        </form>
		        </div>


	        </div>
	    )
    }
};

const mapDispatchToProps = (dispatch) => {
	const api = searchApis.addComment;

	return {
		addComment: (data) => {
			const formData = {
				...data,
				timestamp: Date.now(),
				id: v1()
			};

			return api(formData)
				.then(function(data) {
					dispatch(commentsAddedAction(
						{
							...formData,
							...data
						}
					))
				});
		},
		updateComment: (data) => {
			const formData = {
				...data,
				timestamp: Date.now()
			};

			return searchApis.updateComment(formData)
				.then(function(response) {
					dispatch(commentUpdatedAction(
						formData.id,
						formData.body,
						formData.author,
						formData.timestamp
					))
				} );
		}
	}
};


const mapStateToProps = ({ comments }) => {
	return {
		comments
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsForm));