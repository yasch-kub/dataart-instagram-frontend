import React from 'react';
import data from './data';

import PictureBox from '../PictureBox';

export default class PicturesFeed extends React.Component {

	pictures = data.map((picture, index) =>
		<PictureBox
			key = {index}
			avatar = {picture.avatar}
			user = {picture.user}
			location = {picture.location}
			signature = {picture.signature}
			src = {picture.src}
			isLiked = {picture.isLiked}
		/>
	);

    render() {
        return (
            <div>
				{this.pictures}
            </div>
        );
    }
}