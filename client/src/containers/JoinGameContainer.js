import React, { Component } from 'react'
import ListComponent from '../components/ListComponent';

export default class JoinGameContainer extends Component {
	render() {
		return (
			<div>
				<p>Game List</p>
				<ListComponent />
			</div>
		)
	}
}
