import React from 'react';
import './LocationSearchBox.css';

export default class LocationSearchBox extends React.Component {
	render() {
		return( 
			<div className="LocationSearchBox">
      	<form>
        	<input type="text" name="destination" placeHolder="Enter a destination"/ >
    	  </form>
    	</div>
    );
	}
}
