import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {


	render() {
		
		return(
			<li className="todos">
				<strong>{this.props.todo.title}</strong>
				<br />
			</li>
		)
	};
}

TodoItem.propTypes = {
	todo: PropTypes.object,
};	

export default TodoItem;