import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Project from '../Project/Project';
import './projects.css';

class ProjectList extends Component {
	render() {
		const { portfolio } = this.props;

		let projects = portfolio.map((data, index) => {
			return <Project key={index} project={data} type={this.props.type} />;
		});

		return (
			<div className="projectContainer">
				<Segment.Group className="projects">{projects}</Segment.Group>
			</div>
		);
	}
}

export default ProjectList;
