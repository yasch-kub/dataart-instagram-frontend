import React, { Component } from 'react';

import PictureComment from '../PictureComment'

export default class PictureCommentsBox extends Component {

	render() {
		let comments = this.props.comments.map((comment, index) =>
			<PictureComment
				key = {index}
				user = {comment.user}
				text = {comment.text}
			/>
		);

		return(
			<div>
				{comments}
			</div>
		);
	}
}