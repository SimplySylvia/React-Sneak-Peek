import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Nav.css';

class Nav extends Component {
	render() {
		const { profile } = this.props;

		return (
			<div className="nav">
				<Menu className="nav" size="large">
					<Menu.Menu position="right">
						<Menu.Item name={`${profile.name} Portfolio`} />
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}

export default Nav;
