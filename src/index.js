import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore();

import App from './containers/App'

injectTapEventPlugin();

ReactDOM.render(
	<Provider store = {store}>
		<MuiThemeProvider muiTheme = {getMuiTheme(baseTheme)} >
			<App />
		</MuiThemeProvider>
	</Provider>,

	document.getElementById('root')
);