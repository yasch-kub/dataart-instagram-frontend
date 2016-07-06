import React, {Component} from 'react';

import './style.sass';

import PicturesFeed from '../../components/PicturesFeed';
import AddPictureButton from '../../components/AddPictureButton'
import Header from '../../components/Header';

export default class App extends Component {
    render() {
        return(
			<div>
				<PicturesFeed />
				<AddPictureButton />
			</div>
        )
    }
}