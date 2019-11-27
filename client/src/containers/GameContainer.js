import React, { Component } from 'react'
import Compass from '../components/Compass';
export default class GameContainer extends Component {

	render() {
		return (
			<div>
				<p>Game name</p>
				<Compass />
			</div>
		)
	}
}
