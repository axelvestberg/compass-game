import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import StartContainer from './containers/StartContainer'
import GameContainer from './containers/GameContainer'
import JoinGameContainer from './containers/JoinGameContainer';
import ScoreContainer from './containers/ScoreContainer';

function App() {
  return (
    <div className="ui container">
        <Router>
          <Route path="/" exact component={StartContainer} />
          <Route path="/games" exact component={JoinGameContainer} />
          <Route path="/game-id" exact component={GameContainer} />
          <Route path="/game-id/scoreboard" exact component={ScoreContainer} />
      </Router>
    </div>
  );
}

export default App;
