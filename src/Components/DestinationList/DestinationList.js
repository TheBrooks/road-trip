import React from 'react';
import './DestinationList.css';

export default class DestinationList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const destinationsListItems = this.props.destinations.map((dest) => <li>{dest}</li>);

		return (
			<div className="DestinationList">
	      <ul>
	      	{destinationsListItems}
	      </ul>
	    </div>
		);
	}
}