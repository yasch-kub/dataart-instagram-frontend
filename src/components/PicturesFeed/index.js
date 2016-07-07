import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	addComment,
	toggleLike
} from '../../actions/picture';

import PictureBox from '../PictureBox';

@connect(
	state => ({
		pictures: state.picture.pictures,
		user: state.user.name
	}),
	dispatch => ({
		addComment: bindActionCreators(addComment, dispatch),
		toggleLike: bindActionCreators(toggleLike, dispatch)
	})
)
export default class PicturesFeed extends Component {

    render() {
		let pictures = this.props.pictures.map((picture, index) =>
			<PictureBox
				key = {index}
				avatar = {picture.avatar}
				user = {picture.user}
				location = {picture.location}
				signature = {picture.signature}
				src = {picture.src}
				isLiked = {picture.isLiked}
				comments = {picture.comments}

				addComment = {text => this.props.addComment(picture.id, this.props.user, text)}
				toggleLike = {() => this.props.toggleLike(picture.id)}
			/>
		);

        return (
            <div>
				{pictures}
            </div>
        );
    }
}