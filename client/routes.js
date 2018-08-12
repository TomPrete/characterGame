import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Game from './Game'
import store, {fetchAllCharacters} from './store'

class Routes extends Component {
  componentDidMount() {
    const fetchCharacters = fetchAllCharacters();
    store.dispatch(fetchCharacters)
  }
  render() {
    // console.log(this.props.characters)
    return (
      <div className="Game">
      <header className="Game-header">
        <h1 className="Game-title">Welcome to CopyCat Gaming Attack Calculator</h1>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Game} something={this.props}/>
          {/*
            Put additional routes here.
          */}
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default Routes;
