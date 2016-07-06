import React, {Component} from 'react'

import {
	FloatingActionButton,
	IconButton
} from 'material-ui'

export default class AddPictureButton extends Component {

	buttonStyle = {
		position: 'fixed',
		bottom: 20,
		right: 20
	};

	iconStyle = {
		color: '#fff'
	}

	render() {
		return(
			<FloatingActionButton
				style = {this.buttonStyle}
				secondary = {true}
			>
				<IconButton
					iconClassName = "material-icons"
					iconStyle = {this.iconStyle}
				>
					add_a_photo
				</IconButton>
			</FloatingActionButton>
		);
	}
}