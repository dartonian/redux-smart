import React, {Component, PropTypes} from 'react';
import {Footer,Header} from '../../shared/components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../../ui-theme';

export default class App extends Component {
	static propTypes = {
		
	};

	render() {
		return (
			<div>
				<MuiThemeProvider muiTheme={theme}>
					<div>
						<Header />
						{this.props.children}
						<Footer />
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}