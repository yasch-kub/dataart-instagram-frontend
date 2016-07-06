import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import App from './containers/App'

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme = {getMuiTheme(baseTheme)} >
		<App />
	</MuiThemeProvider>,

	document.getElementById('root')
);