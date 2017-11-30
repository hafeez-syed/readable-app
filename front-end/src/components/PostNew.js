import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {TiHome} from 'react-icons/lib/ti';

const PostNew = (props) => {
	const pathName = props.location.pathname;
	return (
		<div className="post-new">
			<form className="todo__form" >
				<p>
					Add a movie
				</p>
				<input type="text" placeholder="Title">
				<input type="text" placeholder="Release year">
				<input type="text" placeholder="Category">
				<p className="todo__list movies">
					<span>Popular</span>
					<input type="checkbox" id="popular">
					<label className="toggle" for="popular">Popular</label>
				</p>

				<input type="text" placeholder="IMDB ID">

				<input type="text" placeholder="IMDB Image">
				
				<button type="submit" >Add new movie!</button>
			</form>
		</div>
	)
};

export default withRouter(PostNew);
