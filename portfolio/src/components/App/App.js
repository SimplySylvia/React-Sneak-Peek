import React, { Component } from 'react';
import './App.css';
import profileData from '../../profile.json';
import portfolio from '../../projects.json';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';

class App extends Component {
	state = {
		profile: profileData
	};

	updateProfile = profileUpdated => {
		this.setState({
			profile: profileUpdated
		});
	};
	render() {
		const { profile } = this.state;
		return (
			<div className="app">
				<Nav profile={profile} />
				<div className="container">
					<Profile profile={profile} updateProfile={this.updateProfile} />
					<ProjectList portfolio={portfolio} />
				</div>
			</div>
		);
	}
}

export default App;
