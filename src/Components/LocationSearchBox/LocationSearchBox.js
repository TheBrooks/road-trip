import React from 'react';
import './LocationSearchBox.css';

export default class LocationSearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state.value);
		this.setState({value: ''});
	}

	render() {
		return( 
			<div className="LocationSearchBox">
      	<form onSubmit={this.handleSubmit}>
        	<input type="text" value={this.state.value} onChange={this.handleChange} placeHolder="Enter a destination"/ >
    	  </form>
    	</div>
    );
	}
}
