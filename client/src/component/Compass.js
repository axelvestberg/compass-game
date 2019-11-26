import React, { Component } from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'semantic-ui-css/semantic.min.css'

export default class Compass extends Component {
	
state = {
	alpha: 0,
	heading: 0
}
		

componentDidMount() {
	this.alphaOrientation();
	this.headingAngleBetweenPoints();
}

shouldComponentUpdate(nextProps, nextState) {
	if (Math.round(this.state.alpha) === Math.round(nextState.alpha)) {
		return false
	} else {
		return true
	}
}

headingAngleBetweenPoints = () => {

	const katv = {long: 59.319383, lat: 18.075310}
	const nation = {long: 59.328979, lat: 18.078275}

	let X = Math.cos(katv.long) * Math.sin(4.38101);
	let Y = Math.cos(katv.long) * Math.sin(nation.long) - Math.sin(katv.long) * Math.cos(nation.long) * Math.cos(4.38101);
	let beta = Math.atan2(X,Y)
	console.log(beta)
	let heading = 57.2957795 * beta
	console.log(heading)
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
			console.log(alpha)
	
			if (!window.chrome) {
				alpha = alpha - 270;
				this.setState({ alpha })
			}
	
		}
	})
}

	render() {
		let value = Math.round(this.state.alpha);
		let heading = Math.round(this.state.heading)

		return (
			<div className="ui container center aligned">
				<h2>Compass</h2>
				<p>Alpha: {Math.round(this.state.alpha)}</p>
				<div style={{width: "15em", margin: "auto"}}>
					<CircularProgressbarWithChildren
					value={value+2}
					maxValue={360}
					styles={buildStyles({
						pathColor: "3D4F59",
						trailColor: "#7A9CCC",
						strokeLinecap: "butt"
					})}
					>
						{/* Foreground path */}
						<CircularProgressbar
							value={heading}
							maxValue={360}
							text={heading}
							styles={buildStyles({
								trailColor: "transparent",
								strokeLinecap: "butt",
								pathColor: "7A9CCC"
							})}
						/>
					</CircularProgressbarWithChildren>
					{Math.abs(value - heading)}
				</div>
			</div>
		)
	}
}
