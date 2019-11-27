import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class StartContainer extends Component {
	render() {
		return (
			<div>
				<Link to="/game-id"><Button primary>Create Game</Button></Link>
				<Link to="/games"><Button primary>Join Game</Button></Link>
			</div>
		)
	}
}
