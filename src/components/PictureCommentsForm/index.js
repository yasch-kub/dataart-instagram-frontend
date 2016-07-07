import React, { Component } from 'react';

import {
	TextField
} from 'material-ui';

export default class PictureCommentsForm extends Component {

	state = {
		text: ''
	}

	addComment(e) {
		if (e.key === 'Enter') {
			let text = this.state.text.trim();
			if (text) {
				this.props.addComment(text);
				this.setState({
					text: ''
				})
			}
		}
	}

	handleTextChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	render() {
		return(
			<TextField
				hintText = "Add comment..."
				floatingLabelText = "Comment"
				floatingLabelFixed = {true}
				value = {this.state.text}

				onKeyDown = {::this.addComment}
				onChange = {::this.handleTextChange}
			/>
		);
	}
}