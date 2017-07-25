import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';


import Home from './Home'
import SubPage from './SubPage'

const firstChild = props => {
  return React.Children.ToArray(props.children)[0] || null;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/subpage'>SubPage</Link>
        </div>

        <section className="page">
          <Route
            exact
            path='/'
            render={(match, ...rest) => (
              <TransitionGroup>
                { match && <Home { ...rest }/> }
              </TransitionGroup>
            )}>
          </Route>
          <Route
            exact
            path='/subpage'
            render={(match, ...rest) => (
              <TransitionGroup>
                { match && <SubPage { ...rest }/> }
              </TransitionGroup>
            )}></Route>
        </section>
      </div>
    );
  }
}

export default App;
