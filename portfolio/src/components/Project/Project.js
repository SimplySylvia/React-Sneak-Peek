import React, { Component } from 'react';
import { Card, Image, Button, Header } from 'semantic-ui-react';

class Project extends Component {
	render() {
		const { project } = this.props;

		return (
			<Card className="project">
				<Card.Content>
					<Header as="h2" textAlign="center">
						{project.title}
					</Header>
				</Card.Content>
				<Card.Content>
					<Image floated="right" size="large" src={project.img} />
					<Card.Header>{project.description}</Card.Header>
				</Card.Content>

				<Card.Content extra>
					<a href={project.url}>
						<Button color="black" icon="github" />
					</a>
				</Card.Content>
			</Card>
		);
	}
}

export default Project;
