import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
	
	deleteProject(id){
		this.props.onDelete(id);
	}

	render() {
		let projectItems;
	
		if(this.props.projects){
			projectItems = this.props.projects.map(project => {
				return (
					<ProjectItem onDelete={this.deleteProject.bind(this)} project={project} key={project.title} />
				);
			});
		}
		return(
			<div className="projects">
				<h3>Latest Projects</h3>
				{projectItems}
			</div>
		)
	};
}

Projects.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
};	

export default Projects;