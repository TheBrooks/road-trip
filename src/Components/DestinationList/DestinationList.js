import React from 'react';
import './DestinationList.css';

export default class DestinationList extends React.Component {
	render() {
		var destinationsListItems;
		if(this.props.destinations){
			destinationsListItems = this.props.destinations.map((dest) => <li>{dest.address}</li>);
		}

		return (
			<div className="DestinationList">
	      <ul>
	      	{destinationsListItems}
	      </ul>
	    </div>
		);
	}
}