import React, { Component, PropTypes } from 'react';
import {
	Divider,
    Card,
	CardActions,
    CardHeader,
	CardMedia,
	CardText,
	IconButton,
} from 'material-ui';
import './style.sass';

import PictureCommentsForm from '../PictureCommentsForm';
import PictureCommentsBox from '../PictureCommentsBox';

export default class PictureBox extends Component {

	static propTypes = {
		avatar: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		signature: PropTypes.string.isRequired,
		isLiked: PropTypes.bool.isRequired,

		addComment: PropTypes.func.isRequired
	};

	dividerStyle = {
		marginLeft: 20,
		marginRight: 20
	};

	iconStyle = {
		width: 30,
		height: 30
	};

	render() {
		let likeButtonIcon = this.props.isLiked ? 'favorite' : 'favorite_border';
		let likeButtonTooltip = this.props.isLiked ? 'Unlike' : 'Like';

        return(
            <Card className = "picturebox">
                <CardHeader
					title = {this.props.user}
					subtitle = {this.props.location}
                    avatar = {this.props.avatar}
                />
				<CardMedia>
					<img src = {this.props.src} />
				</CardMedia>
				<CardText>
					<span className = "picturebox_user">
						{this.props.user}
					</span>
					{this.props.signature}
					<PictureCommentsBox comments = {this.props.comments}/>
				</CardText>
				<Divider style = {this.dividerStyle}/>
				<CardActions>
					<IconButton
						tooltip = {likeButtonTooltip}
						iconClassName = "material-icons picturebox_button"
						onClick = {this.props.toggleLike}
					>
						{likeButtonIcon}
					</IconButton>
					<PictureCommentsForm addComment = {this.props.addComment}/>
				</CardActions>
            </Card>
        )
    }
}