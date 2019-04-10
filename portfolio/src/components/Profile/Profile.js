import React, { Component } from 'react';
import moment from 'moment';
import EditProfile from '../EditProfile/EditProfile';
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './Profile.css';

class Profile extends Component {
	state = {
		updating: false
	};

	updateProfile = () => {
		this.setState({
			updating: false
		});
		let profile = {
			email: this.state.email,
			name: this.state.name,
			city: this.state.city,
			img: this.state.img
		};
		this.props.updateProfile(profile);
	};

	onInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	editProfile = () => {
		this.setState({
			updating: true,
			email: this.props.profile.email,
			name: this.props.profile.name,
			city: this.props.profile.city,
			img: this.props.profile.img
		});
	};

	render() {
		const { profile } = this.props;
		const { updating, email, city, name, img } = this.state;

		// swapping edit forms vs the default card based on an edit state
		let view = updating ? (
			<EditProfile
				profile={profile}
				onInputChange={this.onInputChange}
				editProfile={this.editProfile}
				updateProfile={this.updateProfile}
				email={email}
				city={city}
				name={name}
				img={img}
			/>
		) : (
			<Card>
				<Image src={profile.img} />
				<Card.Content>
					<Card.Header>
						{profile.name}
						<Label attached="bottom right" as="a" onClick={this.editProfile}>
							<Icon name="edit" />
						</Label>
					</Card.Header>
					<Card.Description>{profile.city}</Card.Description>
					<Card.Description>{profile.email}</Card.Description>
				</Card.Content>
			</Card>
		);

		return <div className="profile">{view}</div>;
	}
}

export default Profile;
