import React, { Component } from 'react';
// import './index.css'

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Game} something={this.props}/>
          {/*
            Put additional routes here.
          */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
