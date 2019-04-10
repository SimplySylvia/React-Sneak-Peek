import React, { Component } from 'react';
import { Card, Image, Input, Button } from 'semantic-ui-react';

class EditProfile extends Component {
	render() {
		const { email, city, name, img } = this.props;
		// this component calls the functions from profile and updates the state to reflect the changes here.
		return (
			<Card>
				<Image src={img} />
				<Card.Content>
					<Card.Description>
						<Input
							fluid
							value={img}
							size="mini"
							name="img"
							onChange={this.props.onInputChange}
						/>
					</Card.Description>
					<Card.Header>
						<Input
							fluid
							value={name}
							size="mini"
							name="name"
							onChange={this.props.onInputChange}
						/>
					</Card.Header>
					<Card.Description>
						<Input
							fluid
							value={city}
							size="mini"
							name="city"
							onChange={this.props.onInputChange}
						/>
					</Card.Description>
					<Card.Description>
						<Input
							fluid
							value={email}
							size="mini"
							name="email"
							onChange={this.props.onInputChange}
						/>
					</Card.Description>
					<Card.Description className="saveButtons">
						<Button.Group>
							<Button positive onClick={this.props.updateProfile}>
								Save
							</Button>
						</Button.Group>
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}

export default EditProfile;
