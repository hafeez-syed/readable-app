import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import v1 from 'uuid/v1';
import * as searchApis from '../../utils/apis';
import { actions } from '../../actions/';

class CommentsForm extends Component {
	state = {
		parentId: '',
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
		const parentId = props.parentId;
		const {body, author} = state;
		const onSubmitHandler = (eve) => {
			eve.preventDefault();
			const state = this.state;
			state['parentId'] = parentId;
			props.addComment(state);
		};

		return (
	        <div>
                <h3 className="title-heading"> </h3>

		        <div className="post-new sorting-wrapper position-default">
			        <form className="todo__form" onSubmit={onSubmitHandler}>
				        <h3>Add a comment</h3>

				        <textarea onChange={this.onChangeHandler} name="body" value={body} type="text" placeholder="Comment"></textarea>

				        <input name="author" type="text" value={author} onChange={this.onChangeHandler} placeholder="Author" />

				        <button type="submit" >Submit post</button>
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
					dispatch(actions.commentsAddedAction(
						{
							...formData,
							...data
						}
					))
				});
		}
	}
};


const mapStateToProps = ({ comments }) => {
	return {
		comments
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsForm));