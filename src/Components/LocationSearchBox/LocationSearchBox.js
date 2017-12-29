import React from 'react';
import './LocationSearchBox.css';
import PlacesAutocomplete, {geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class LocationSearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(address) {
		this.setState({address: address});
	}

	handleEnter(address) {
		let newAddress = this.state.address;
		this.setState({address: ''});

		geocodeByAddress(newAddress)
			.then(results => getLatLng(results[0]))
			.then(latLng => this.props.onSubmit({address:newAddress, lat:latLng.lat, lng:latLng.lng}))
			.catch(error => console.error('Error', error));
	}

	handleSubmit(event) {
		event.preventDefault();
		this.handleEnter(this.state.address);
	}

	render() {
		const inputProps = {
			value: this.state.address,
			onChange: this.handleChange,
			placeholder: 'Enter a destination'
		}

		const myStyles = {
			input: {boxSizing: 'border-box', borderRadius: '99px'},
		}

		return( 
			<div className="LocationSearchBox">
      	<form onSubmit={this.handleSubmit}>
      		<PlacesAutocomplete styles={myStyles} className="PlacesAutocomplete" inputProps={inputProps} onEnterKeyDown={this.handleEnter}/>
    	  </form>
    	</div>
    );
	}
}
