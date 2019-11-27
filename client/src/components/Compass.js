import React, { Component } from 'react'
import 'react-circular-progressbar/dist/styles.css';

export default class Compass extends Component {
	
state = {
	alpha: 0,
	heading: 0,
	userLocation: {}
}

componentDidMount() {
	this.alphaOrientation();
	this.getPos();
	this.headingAngleBetweenPoints();
}

shouldComponentUpdate(nextProps, nextState) {
	if (Math.round(this.state.alpha) === Math.round(nextState.alpha)) {
		return false
	} else {
		return true
	}
}

getPos = () => {
	navigator.geolocation.getCurrentPosition(position => {
		this.setState({ userLocation: {long: position.coords.longitude, lat: position.coords.latitude }})
	}, error => {
		console.error(error)
	}, {
		timeout: 1000,
		maximumAge: 10000,
		enableHighAccuracy: true
	})
}

headingAngleBetweenPoints = () => {
	const hornstull = {long: 59.033333, lat: 18.22275}
	const nation = {long: 59.328979, lat: 18.078275}
	let X = Math.cos(hornstull.long) * Math.sin(4.38101);
	let Y = Math.cos(hornstull.long) * Math.sin(nation.long) - Math.sin(hornstull.long) * Math.cos(nation.long) * Math.cos(4.38101);
	let beta = Math.atan2(X,Y)
	let heading = 57.2957795 * beta
	console.log('heading:', heading);
	this.setState({ heading })
}

alphaOrientation = () => {
	window.addEventListener('deviceorientation', event => {
		let alpha;
		if (event.webkitCompassHeading) {
			alpha = alpha.event.webkitCompassHeading;
			this.setState({ alpha })
		}
		else {
			alpha = event.alpha;
			this.setState({ alpha })
			if (!window.chrome) {
				alpha = alpha - 270;
				console.log(alpha);
				this.setState({ alpha })
			}
		}
	})
}

	render() {
		let heading = Math.round(this.state.heading)
		console.log(this.state);
		return (
			<div className="ui container center aligned">
				<h2>Compass</h2>
				<p>User guess: {this.state.alpha}</p>
				<p>Actual direction: {heading}</p>
				<p>Difference: {Math.abs(this.state.alpha - heading)}</p>
			</div>
		)
	}
}
