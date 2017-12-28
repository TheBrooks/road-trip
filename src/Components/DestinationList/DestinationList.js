import React from 'react';
import './DestinationList.css';

export default class DestinationList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			destinations: ["Austin, TX",
	        "El Paso,TX",
	        "Salt Lake City, UT",
	        "Yosemite National Park, CA",
	        "Fort Bragg, CA",
	        "Crater Lake, OR",
	        "Bend, OR",]
		};
	}

	render() {
		const destinationsListItems = this.state.destinations.map((dest) => <li>{dest}</li>);

		return (
			<div className="DestinationList">
	      <ul>
	      	{destinationsListItems}
	      </ul>
	    </div>
		);
	}
}