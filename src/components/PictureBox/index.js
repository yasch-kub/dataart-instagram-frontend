import React, {Component, PropTypes} from 'react';
import {
	Divider,
    Card,
	CardActions,
    CardHeader,
	CardMedia,
	CardText,
	IconButton,
	TextField
} from 'material-ui';
import './style.sass';

export default class PictureBox extends Component {

	static propTypes = {
		avatar: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		isLiked: PropTypes.bool.isRequired,
	};

	dividerStyle = {
		marginLeft: 20,
		marginRight: 20
	};

	iconStyle = {
		width: 30,
		height: 30
	};

	likeButtonIcon = this.props.isLiked ? 'favorite' : 'favorite_border';
	likeButtonTooltip = this.props.isLiked ? 'Unlike' : 'Like';

	render() {
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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, optio.
				</CardText>
				<Divider style = {this.dividerStyle}/>
				<CardActions>
					<IconButton
						tooltip = {this.likeButtonTooltip}
						iconClassName = "material-icons picturebox_button"
					>
						{this.likeButtonIcon}
					</IconButton>
					<TextField
						hintText = "Add comment..."
						floatingLabelText = "Comment"
						floatingLabelFixed = {true}
					/>
				</CardActions>
            </Card>
        )
    }
}