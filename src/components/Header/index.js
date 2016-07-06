import React, {Component} from 'react'

import {
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
	ToolbarTitle,
	RaisedButton
} from 'material-ui';

export default class Header extends Component {
	render() {
		return(
			<Toolbar>
				<ToolbarGroup firstChild = {true}>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarSeparator />
					<RaisedButton
						label = "Add picture"
						primary = {true}
					/>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}
