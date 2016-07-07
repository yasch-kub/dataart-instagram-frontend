import React, { Component, PropTypes } from 'react';

import './style.sass';

export default class PictureComment extends Component {

	static defaultProps = {
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	};

	render() {
		return(
			<div className = "picturebox_comment">
				<span className = "picturebox_comment_user">
					{this.props.user}
				</span>
				{this.props.text}
			</div>
		);
	}
}