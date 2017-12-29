import React from 'react';
import './DestinationMap.css';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MyGoogleMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDblCn7S9K0U-wL8y-43GttI5E_B6Jc2og&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{lat: 30.2672, lng: -97.7431}}>
		{props.isMarkerShown && <Marker position={{ lat: 30.2672, lng: -97.7431 }}/> }
	</GoogleMap>)

export default class DestinationMap extends React.Component {
	render() {
		return (
			<div className="DestinationMap-container">
				<div className="DestinationMap-placeholder">
			
        	<MyGoogleMapComponent isMarkerShown />
        </div>
    </div>
		);
	}
}