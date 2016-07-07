import React, {Component} from 'react';

import './style.sass';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PicturesFeed from '../../components/PicturesFeed';
import AddPictureButton from '../../components/AddPictureButton'
import Header from '../../components/Header';

@connect(
	state => ({
		user: state.user.name
	}),
	dispatch => ({

	})
)
export default class App extends Component {
    render() {
        return(
			<div>
				<PicturesFeed user = {this.props.user}/>
				<AddPictureButton />
			</div>
        )
    }
}